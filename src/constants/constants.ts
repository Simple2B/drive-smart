import { StaticImageData } from "next/image";
import carEarn from "../../public/icons/carEarn.svg";
import carTailor from "../../public/icons/carTailor.svg";
import carMatch from "../../public/icons/carMatch.svg";
import carInvest from "../../public/icons/carInvest.svg";
import carKey from "../../public/icons/carKey.svg";
// import facebook from "../../public/icons/facebook.svg";
// import linkedin from "../../public/icons/linkedin.svg";
// import instagram from "../../public/icons/instagram.svg";
import x from "../../public/icons/x.svg";

import {
  // FACEBOOK_LINK,
  // INSTAGRAM_LINK,
  // LINKEDIN_LINK,
  X_LINK,
} from "./service";

export type IFeature = {
  name: string;
  description: string;
  icon: StaticImageData;
};

export const features: IFeature[] = [
  {
    name: "Best value for money",
    description: "Hire cars up to 25% lower than market",
    icon: carEarn,
  },
  {
    name: "Tailored for you",
    description:
      "Select the car that suits your style.  DriveSmart is the only company that provides 100% booking accuracy, ensuring you get precisely what you want every time",
    icon: carTailor,
  },
  {
    name: "Much greater choice",
    description: "1000x more options on DriveSmart",
    icon: carMatch,
  },
];

export const additionalFeatures: IFeature[] = [
  {
    name: "Earn from your car",
    description:
      "Transform your idle vehicle into a source of income!  With the potential to earn up to 70,000 Dhs a year, owning a car has never been so rewarding",
    icon: carEarn,
  },
  {
    name: "Become your own boss",
    description: "DriveSmart Entrepreneurs can make over 500,000 Dhs per year",
    icon: carKey,
  },
  {
    name: "Invest smartly",
    description:
      "Take advantage of our unique investment opportunities.  Enjoy an impressive 22% annual yield with upfront costs as low as 20,000 Dhs",
    icon: carInvest,
  },
];

export type ISocialMedia = {
  name: string;
  link: string;
  icon: StaticImageData;
};

export const socialMedia: ISocialMedia[] = [
  {
    name: "X",
    link: X_LINK,
    icon: x,
  },
  // {
  //   name: "LinkedIn",
  //   link: LINKEDIN_LINK,
  //   icon: linkedin,
  // },
  // {
  //   name: "Instagram",
  //   link: INSTAGRAM_LINK,
  //   icon: instagram,
  // },
  // {
  //   name: "Facebook",
  //   link: FACEBOOK_LINK,
  //   icon: facebook,
  // },
];
