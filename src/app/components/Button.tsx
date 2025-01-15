import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  isColored?: boolean;
};

export const Button = ({ text, onClick, isColored }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-4 border-primary  hover:border-primaryDark border-2 rounded-3xl text-lg  cursor-pointer font-medium ${
        isColored && "bg-primary hover:bg-primaryDark"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
