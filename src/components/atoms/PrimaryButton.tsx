import ArrowUp from "@/assets/svgs/ArrowUp";
import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  title: string;
  icon?: ReactNode;
}

const PrimaryButton = ({ title, icon }: PrimaryButtonProps) => {
  return (
    <button className="bg-ButtonGradient border-2 border-[#FFB11A] rounded-xl py-[15px] px-[24px] font-semibold text-xs flex items-center flex-nowrap gap-[17px] text-white">
      {title && title} {icon && icon}
    </button>
  );
};

export default PrimaryButton;
