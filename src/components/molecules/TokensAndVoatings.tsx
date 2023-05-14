import React from "react";
import Text4XL from "../atoms/Text4XL";
import RateChart from "../atoms/RateChart";
import BaseText from "../atoms/BaseText";
import VotingsChart from "../atoms/VotingsChart";
import diamond from "../../assets/images/diamond.png";
import {
  tokenRateTitle,
  votingEndDate,
  votingSubject,
  votingTitle,
} from "@/constants";
import Image from "next/image";
import NextButton from "../atoms/NextButton";
import PrimaryButton from "../atoms/PrimaryButton";

const TokensAndVoatings = () => {
  return (
    <section className="mt-32 lg:mt-36 lg:flex gap-20 justify-center ">
      <div className="lg:border-2 border-white-transparent lg:rounded-[45px] lg:p-9 lg:max-w-[500px] h-fit">
        <Text4XL size="text-[30px] leading-10 lg:leading-snug px-[30px] lg:px-0">
          {tokenRateTitle}
        </Text4XL>
        <RateChart />
      </div>
      <div className="relative  h-fit mt-36 lg:mt-14 ">
        <div className="votingBgImage  border-2 border-white-transparent rounded-[45px] p-[30px] lg:p-9 lg:max-w-[500px]">
          <Text4XL size="text-[30px] leading-10 lg:leading-snug">
            {votingTitle}
          </Text4XL>
          <BaseText textColor="text-primary" className="mt-7 lg:mt-8">
            <span className="text-[#9690ad] ">Subject: </span>
            {votingSubject}
          </BaseText>
          <BaseText textColor="text-primary" className="mt-5 lg:mt-6">
            <span className="text-[#9690ad] "> Ending in: </span>{" "}
            {votingEndDate} days
          </BaseText>
          <VotingsChart />
        </div>
        <Image
          src={diamond}
          alt=""
          className="absolute right-[-45px] top-[-115px] lg:right-[-130px] lg:top-[70px]"
        />
        <NextButton className="absolute right-[50px] bottom-[-25px] lg:right-[-25px] lg:top-[250px]" />
        <PrimaryButton
          title="Participate"
          color="bg-secondaryButtonGradient border-secondaryBorder"
          className="absolute bottom-[-23px] left-[50px] lg:left-[200px]"
        />
      </div>
    </section>
  );
};

export default TokensAndVoatings;
