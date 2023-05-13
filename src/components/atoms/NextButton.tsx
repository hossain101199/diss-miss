import RightArrow from "@/assets/svgs/RightArrow";
import React from "react";

const NextButton = ({ className = "" }: { className?: string }) => {
  return (
    <button
      className={`NextButton flex justify-center items-center ${className}`}
    >
      <RightArrow />
    </button>
  );
};

export default NextButton;
