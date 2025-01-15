import { COMING_IN } from "@/constants/service";
import React from "react";

const RunningLine = ({ repeat = 50 }) => {
  const textArray = Array(repeat).fill(null);

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap">
        {textArray.map((_, index) => (
          <React.Fragment key={index}>
            <span className="mx-4 uppercase">coming in {COMING_IN}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RunningLine;
