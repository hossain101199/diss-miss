import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/heroImage.png";
import pattern from "../../assets/images/pattern.png";
import BaseText from "../atoms/BaseText";
import { heroSlogan, heroTitle1, heroTitle2, heroTitle3 } from "@/constants";

const HeroSection = () => {
  return (
    <section className="relative grid lg:grid-cols-9 content-center px-[30px] lg:mt-16">
      <Image
        src={heroImage}
        alt="Image description"
        className="lg:col-span-4 lg:scale-125 w-full"
      />

      <div className="lg:col-span-5 flex flex-col justify-center">
        <h1 className="text-primary font-[800] text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px]">
          {heroTitle1} <br />
          {heroTitle2}
        </h1>
        <div className="relative">
          <h1 className="HeroText font-[800] text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] relative z-10">
            {heroTitle3}
          </h1>
          <div className="HeroTextStroke font-[800] overflow-hidden text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px]">
            {heroTitle3}
          </div>
        </div>
        <BaseText className="mt-9 md:mt-14">{heroSlogan}</BaseText>
      </div>
      <Image
        src={pattern}
        alt="Image description"
        className="absolute bottom-0 right-0"
      />
    </section>
  );
};

export default HeroSection;
