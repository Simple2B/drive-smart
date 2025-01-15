import React from "react";
import { IFeature } from "../../constants/constants";
import { Feature } from "./Feature";
import { Title } from "./Title";

type FeatureBlockProps = {
  title: string;
  features: IFeature[];
};

export const FeatureBlock = ({ title, features }: FeatureBlockProps) => {
  return (
    <div className="py-20">
      <div className="px-8 md:px-28">
        <Title text={title} />
      </div>
      <div className="w-full  flex flex-col items-center gap-16 md:flex-row md:justify-center md:items-baseline mt-6">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
};
