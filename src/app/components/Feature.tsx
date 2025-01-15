import React from "react";
import Image from "next/image";
import { IFeature } from "../constants";

type FeatureProps = {
  feature: IFeature;
};

export function Feature({ feature }: FeatureProps) {
  return (
    <div className="w-80 md:w-96 flex flex-col items-center py-4 justify-center">
      <Image src={feature.icon} alt={"feature icon"} />
      <h3 className="font-medium text-2xl mt-6">{feature.name}</h3>
      <p className="text-center mt-3 leading-5">{feature.description}</p>
    </div>
  );
}
