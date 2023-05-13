import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/heroImage.png";
import BaseText from "../atoms/BaseText";

const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-9 content-center px-[30px] lg:mt-16">
      <Image
        src={heroImage}
        alt="Image description"
        className="lg:col-span-4 md:scale-125 w-full"
      />

      <div className="lg:col-span-5 flex flex-col justify-center">
        <h1 className="text-primary font-[800] text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px]">
          Get your <br />
          Tokenized, Get <br />
        </h1>
        <div className="relative">
          <h1 className="HeroText font-[800] text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px] relative z-10">
            Digitalized!
          </h1>
          <div className="HeroTextStroke font-[800] overflow-hidden text-[42px] lg:text-[50px] xl:text-[60px] 2xl:text-[90px]">
            Digitalized!
          </div>
        </div>
        <BaseText className="mt-9 md:mt-14">
          Tokenized stocks offer several benefits over traditional sticks.
        </BaseText>
      </div>
    </section>
  );
};

export default HeroSection;
