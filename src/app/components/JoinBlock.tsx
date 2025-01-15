import Image from "next/image";
import React from "react";
import { Title } from "./Title";
import { SubscribeForm } from "./SubscribeForm";

import car from "../../../public/car.png";

export const JoinBlock = () => {
  return (
    <div className="flex flex-col md:flex-row md:pt-24 justify-between">
      <div className="px-5 md:px-24 flex flex-col gap-5 max-w-[800px]">
        <Title text={"Join a Thriving Community"} />
        <SubscribeForm />
        <p className="text-sm text-center">
          We take your privacy seriously. Any personal information you provide
          on this site <strong>will be securely stored</strong> and{" "}
          <strong>only used for the purpose of delivering our services.</strong>{" "}
          We will never share, sell, or disclose your data to third parties
          without your consent, unless required by law
        </p>
      </div>
      <Image src={car} alt="car" className="md:max-w-[700px]" />
    </div>
  );
};
