"use client";
import React from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

type HeaderProps = {
  onSubscribeClick: () => void;
};
export const Header = ({ onSubscribeClick }: HeaderProps) => {
  return (
    <div className="w-full  flex lg:flex-row lg:justify-between lg:items-start flex-col items-center py-8 gap-8 lg:px-8">
      <Logo />
      <div className="flex flex-col items-center gap-3">
        <Button
          text="Subscribe & Receive a discount"
          onClick={onSubscribeClick}
        />
        <p className="text-center w-full max-w-xs 2xl:text-base text-sm">
          <strong>Discounted rates</strong> for the first 100 subscribers
          Subscribe to be issued with the{" "}
          <strong>free DriveSmart Starter Pack</strong>
        </p>
      </div>
    </div>
  );
};
