import RightArrow from "@/assets/svgs/RightArrow";
import React from "react";

const NextButton = ({
  className = "",
  handleClick,
}: {
  className?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`NextButton flex justify-center items-center ${className}`}
    >
      <RightArrow />
    </button>
  );
};

export default NextButton;
