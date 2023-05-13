import React, { ReactNode } from "react";

interface Text4XLProps {
  children: string | ReactNode;
  className?: string;
  font?: string;
  size?: string;
}
const Text4XL = ({
  children,
  className = "",
  font = "text-3xl md:text-[40px] md:leading-10",
  size = "font-extrabold",
}: Text4XLProps) => {
  return (
    <div className={`text-primary ${font} ${size} ${className}`}>
      {children}
    </div>
  );
};

export default Text4XL;
