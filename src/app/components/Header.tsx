import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export const Header = () => {
  return (
    <div className="w-full  flex lg:flex-row lg:justify-between lg:items-start flex-col items-center py-8 gap-8 lg:px-8">
      <Image src={logo} alt="Company Logo" />
      <div className="flex flex-col items-center  gap-3">
        <button className="px-8 py-4 border-primary border-2 rounded-3xl text-lg font-medium">
          Subscribe & Receive a discount
        </button>
        <p className="text-center w-full max-w-xs text-sm">
          <strong>Discounted rates</strong> for the first 100 subscribers
          Subscribe to be issued with the{" "}
          <strong>free DriveSmart Starter Pack</strong>
        </p>
      </div>
    </div>
  );
};
