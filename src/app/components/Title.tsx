import React from "react";

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return <h1 className="text-title text-center">{text}</h1>;
};
