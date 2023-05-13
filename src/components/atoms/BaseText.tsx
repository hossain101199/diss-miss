import React, { ReactNode } from "react";

interface BaseTextProps {
  children: string | ReactNode;
  className?: string;
  font?: string;
  size?: string;
}
const BaseText = ({
  children,
  className = "",
  font = "font-semibold",
  size = "text-base",
}: BaseTextProps) => {
  return (
    <div className={`text-secondary ${font} ${size} ${className}`}>
      {children}
    </div>
  );
};

export default BaseText;
