"use client";
import React from "react";
import Image from "next/image";
import { Title } from "./Title";
import { Button } from "./Button";
import PhoneLaptop from "../../../public/phone-laptop.jpeg";
import PhoneMobile from "../../../public/phone-mobile.jpeg";

type CentralBlockProps = {
  onSubscribeClick: () => void;
};

export const CentralBlock = ({ onSubscribeClick }: CentralBlockProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <Title text="Ride, Earn, and Thrive!" />
      <p className="text-center w-full max-w-lg text-xl px-2">
        Discover the 1st platform in the UAE empowering car owners and providing
        the best value car hire in the market
      </p>
      <Button
        text="Subscribe for early opportunities"
        isColored
        onClick={onSubscribeClick}
      />
      <picture>
        <source srcSet={PhoneMobile.src} media="(max-width: 767px)" />
        <source srcSet={PhoneLaptop.src} media="(min-width: 768px)" />
        <Image src={PhoneLaptop} alt="Company Logo" />
      </picture>
    </div>
  );
};
