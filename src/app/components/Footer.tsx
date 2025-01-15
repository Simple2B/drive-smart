import React from "react";
import { Logo } from "./Logo";
import { CONTACT_US } from "../../constants/service";
import { socialMedia } from "@/constants/constants";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center py-16 gap-6 md:flex-row md:px-20 md:justify-between">
      <div className="flex flex-col items-center  gap-6">
        <Logo />
        <div className="flex gap-6 items-end justify-center">
          {socialMedia.map((item, index) => (
            <SocialMedia
              link={item.link}
              key={index}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div className="text-center pt-20">
        <p className="text-xl">Contact us</p>
        <a href={`mailto:${CONTACT_US}`}>{CONTACT_US}</a>
      </div>
    </div>
  );
};
