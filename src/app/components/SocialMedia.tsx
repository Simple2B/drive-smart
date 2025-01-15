"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type SocialMediaProps = {
  icon: StaticImageData;
  link: string;
  name: string;
};

export const SocialMedia = ({ icon, link, name }: SocialMediaProps) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image src={icon} alt={name} />
    </div>
  );
};
