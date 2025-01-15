import React from "react";

export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
}

type ToastProps = {
  text: string;
  type: ToastType;
};

export const Toast = ({ text, type }: ToastProps) => {
  const baseStyles =
    "fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg transition-all duration-300";
  const slideStyles = "opacity-100 translate-y-0";

  const typeStyles = {
    [ToastType.SUCCESS]: "bg-green-500 text-white",
    [ToastType.ERROR]: "bg-red-500 text-white",
  }[type];

  return (
    <div className={`${baseStyles} ${typeStyles} ${slideStyles}`}>
      <div className="flex items-center gap-2">
        {type === ToastType.SUCCESS ? (
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        )}
        <span>{text}</span>
      </div>
    </div>
  );
};
