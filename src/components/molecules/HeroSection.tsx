import Image from "next/image";
import React from "react";
import heroImage from "../../assets/images/heroImage.png";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col items-center md:flex-row justify-center px-[30px]">
        <Image src={heroImage} alt="Image description" />
        <div>
          <h1 className="text-[#E2EBFB] font-[800] text-[42px] lg:text-[90px]">
            Get your <br />
            Tokenized, Get <br />
            <span className="HeroText">Digitalized!</span>
          </h1>
          <p className="text-[#9690AD] font-semibold ">
            Tokenized stocks offer several benefits over traditional sticks.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
