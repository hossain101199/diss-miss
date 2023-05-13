import React from "react";
import PTag from "../atoms/BaseText";
import BaseText from "../atoms/BaseText";
import Text4XL from "../atoms/Text4XL";
import Hr from "../atoms/Hr";

import CoinCard from "../atoms/CoinCard";
import { coinList, coinSlogan, coinTitle } from "@/constants";

const Cryptocurrencies = () => {
  return (
    <>
      <div className="lg:flex flex-col items-center mt-16 md:mt-36 px-[30px]">
        <BaseText className="mb-7">{coinSlogan}</BaseText>
        <Text4XL className="mb-8">{coinTitle}</Text4XL>
        <Hr />
      </div>
      <div className="CoinCardParents overflow-x-scroll overflow-hidden">
        <div className="mt-8 md:mt-16 flex justify-center items-center gap-[30px]">
          {coinList.slice(0, 5).map((coin) => (
            <CoinCard
              key={coin.id}
              title={coin.name}
              icon={<coin.icon />}
              className="min-w-[250px]"
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[30px] mt-[30px] mb-8 md:mb-16">
          {coinList.slice(5, 9).map((coin) => (
            <CoinCard
              key={coin.id}
              title={coin.name}
              icon={<coin.icon />}
              className="min-w-[250px]"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cryptocurrencies;
