import { StaticImageData } from "next/image";
import carEarn from "../../public/icons/carEarn.svg";
import carTailor from "../../public/icons/carTailor.svg";
import carMatch from "../../public/icons/carMatch.svg";
import carInvest from "../../public/icons/carInvest.svg";
import carKey from "../../public/icons/carKey.svg";

export type IFeature = {
  name: string;
  description: string;
  icon: StaticImageData;
};

export const features: IFeature[] = [
  {
    name: "Best value for money",
    description: "Best value for money",
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
