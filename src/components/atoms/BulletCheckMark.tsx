import CheckMark from "@/assets/svgs/CheckMark";
import React from "react";
import BaseText from "./BaseText";

const BulletCheckMark = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={`flex justify-center items-center gap-6 ${className}`}>
      <div className="p-5 border-2 border-white-transparent rounded-full w-fit">
        <CheckMark />
      </div>
      <BaseText textColor="text-primary">{title}</BaseText>
    </div>
  );
};

export default BulletCheckMark;
