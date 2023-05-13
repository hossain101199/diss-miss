import React, { ReactNode } from "react";

interface BaseTextProps {
  children: string | ReactNode;
  className?: string;
  font?: string;
  size?: string;
  textColor?: string;
}
const BaseText = ({
  children,
  className = "",
  font = "font-semibold",
  size = "text-base",
  textColor = "text-secondary",
}: BaseTextProps) => {
  return (
    <div className={`${textColor} ${font} ${size} ${className}`}>
      {children}
    </div>
  );
};

export default BaseText;
