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
  size = "text-3xl md:text-[40px] md:leading-10",
}: Text4XLProps) => {
  return (
    <h4 className={`text-primary ${font} ${size} ${className}`}>{children}</h4>
  );
};

export default Text4XL;
