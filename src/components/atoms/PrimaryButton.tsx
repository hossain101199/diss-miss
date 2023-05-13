import ArrowUp from "@/assets/svgs/ArrowUp";
import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  title: string;
  icon?: ReactNode;
  hoverButton?: boolean;
  className?: string;
  color?: string;
}

const PrimaryButton = ({
  title,
  icon,
  className = "",
  color = "bg-ButtonGradient border-[#FFB11A]",
  hoverButton = false,
}: PrimaryButtonProps) => {
  return (
    <>
      {hoverButton ? (
        <button
          className={`hover:bg-ButtonGradient border-2 border-transparent hover:border-[#FFB11A] rounded-xl py-[8px] px-[21px] font-semibold text-xs text-yellowRba hover:text-primary ${className}`}
        >
          {title && title}
        </button>
      ) : (
        <button
          className={`border-2 ${color} rounded-xl py-[15px] px-[24px] font-semibold text-xs flex items-center flex-nowrap gap-[17px] text-primary  ${className}`}
        >
          {title && title} {icon && icon}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
