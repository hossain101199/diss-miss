import Image from "next/image";
import React, { useState } from "react";
import crystalImage from "../../assets/images/crystalImage.png";
import crystalImage2 from "../../assets/images/crystalImage2.png";
import Hr from "../atoms/Hr";
import NextButton from "../atoms/NextButton";

import BaseText from "../atoms/BaseText";
import Text4XL from "../atoms/Text4XL";

const OwnershipInfo = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const handleSlider = (): void => {
    if (slideNumber < 10) {
      setSlideNumber(slideNumber + 1);
    } else {
      setSlideNumber(1);
    }
  };
  return (
    <section className="grid lg:grid-cols-7 justify-center mt-20 lg:mt-36">
      <Image
        src={crystalImage2}
        alt="Image description"
        className="lg:hidden w-full"
      />
      <Image
        src={crystalImage}
        alt="Image description"
        className="hidden lg:col-start-5 lg:col-span-3 lg:block w-full"
      />
      <div className="relative overflow-hidden lg:col-start-1 lg:row-start-1 lg:col-span-4 flex justify-end">
        <div className="flex flex-col relative mt-14 lg:mt-11 ms-6 lg:ms-0 pe-6">
          <Text4XL className="mb-8">
            Fractional <br /> Ownership
          </Text4XL>
          <Hr />
          <BaseText className="mt-8 max-w-md" font="font-normal" size="text-sm">
            Tokenized sticks allow for fractional ownership, meaning you can buy
            and sell smaller portions of a company’s stock. This opens up
            investment opportunities to a much wider categories.
          </BaseText>
          <h1 className="font-extrabold text-[200px] slideCount">
            {slideNumber < 10 ? `0${slideNumber}` : `${slideNumber}`}
          </h1>
          <div className="flex items-center gap-5 mt-14">
            <div className="hidden lg:flex items-center justify-between w-3/4 font-semibold text-sm text-white">
              <hr className="w-3/4" /> Next
            </div>
            <NextButton handleClick={handleSlider} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipInfo;
