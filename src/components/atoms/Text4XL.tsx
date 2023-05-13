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
  font = "font-extrabold",
  size = "text-3xl lg:text-[40px] leading-10 md:leading-snug",
}: Text4XLProps) => {
  return (
    <h4 className={`text-primary md:leading-snug ${font} ${size} ${className}`}>
      {children}
    </h4>
  );
};

export default Text4XL;
