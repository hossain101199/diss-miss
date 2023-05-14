import React from "react";
import Text4XL from "./Text4XL";

interface CoinCardProps {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}

const CoinCard = ({ icon, title, className }: CoinCardProps) => {
  return (
    <div className="cardParent">
      <div
        className={`CoinCard px-8 py-6 flex flex-nowrap justify-center items-center gap-6 ${className}`}
      >
        {icon && icon}
        <Text4XL size="text-2xl flex-nowrap">{title}</Text4XL>
      </div>
    </div>
  );
};

export default CoinCard;
