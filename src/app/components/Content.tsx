"use client";
import React, { useRef } from "react";

import { additionalFeatures, features } from "@/constants/constants";
import { CentralBlock } from "./CentralBlock";
import { FeatureBlock } from "./FeatureBlock";
import { Footer } from "./Footer";
import { JoinBlock } from "./JoinBlock";
import RunningLine from "./RunningLine";
import { Header } from "./Header";

export default function Content() {
  const joinBlockRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (joinBlockRef && joinBlockRef.current) {
      joinBlockRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <RunningLine />
      <Header onSubscribeClick={executeScroll} />
      <CentralBlock onSubscribeClick={executeScroll} />
      <FeatureBlock
        title="Why choose DriveSmart to hire your car"
        features={features}
      />
      <FeatureBlock
        title="Use DriveSmart to build your wealth"
        features={additionalFeatures}
      />
      <div ref={joinBlockRef}>
        <JoinBlock />
      </div>
      <Footer />
    </div>
  );
}
