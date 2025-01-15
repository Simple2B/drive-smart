import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  isColored?: boolean;
  isDisabled?: boolean;
};

export const Button = ({
  text,
  onClick,
  isColored,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`px-8 py-4 border-primary  hover:border-primaryDark border-2 rounded-3xl text-lg mx-2 ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      } font-medium ${isColored && "bg-primary hover:bg-primaryDark"}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
