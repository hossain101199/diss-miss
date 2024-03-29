import React from "react";
import PTag from "../atoms/BaseText";
import BaseText from "../atoms/BaseText";
import Text4XL from "../atoms/Text4XL";
import Hr from "../atoms/Hr";
import squareBox from "../../assets/images/squareBox.png";

import CoinCard from "../atoms/CoinCard";
import { coinList, coinSlogan, coinTitle } from "@/constants";
import Image from "next/image";

const Cryptocurrencies = () => {
  return (
    <>
      <div className="lg:flex flex-col items-center mt-16 lg:mt-36 px-[30px]">
        <BaseText className="mb-7">{coinSlogan}</BaseText>
        <Text4XL className="mb-8">{coinTitle}</Text4XL>
        <Hr />
      </div>
      <div className="CoinCardParents overflow-scroll relative">
        <div className="mt-8 lg:mt-16 flex justify-center items-center gap-[30px]">
          {coinList.slice(0, 5).map((coin) => (
            <CoinCard
              key={coin.id}
              title={coin.name}
              icon={<coin.icon />}
              className="min-w-[250px]"
            />
          ))}
        </div>
        <div className="relative z-10 flex justify-center items-center gap-[30px] mt-[30px] mb-8 lg:mb-16">
          {coinList.slice(5, 9).map((coin) => (
            <CoinCard
              key={coin.id}
              title={coin.name}
              icon={<coin.icon />}
              className="min-w-[250px]"
            />
          ))}
        </div>
        <Image
          src={squareBox}
          alt=""
          className="absolute bottom-[40px] left-[180px]"
        />
      </div>
    </>
  );
};

export default Cryptocurrencies;
