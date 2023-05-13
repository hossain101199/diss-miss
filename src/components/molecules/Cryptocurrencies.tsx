import React from "react";
import PTag from "../atoms/BaseText";
import BaseText from "../atoms/BaseText";
import Text4XL from "../atoms/Text4XL";
import Hr from "../atoms/Hr";
import Card from "../atoms/Card";

const Cryptocurrencies = () => {
  return (
    <>
      <div className="lg:flex flex-col items-center mt-16 md:mt-36 px-[30px]">
        <BaseText className="mb-7">Overcome the barier of limitation,</BaseText>
        <Text4XL className="mb-8">Trade with multiple Cryptocurrencies</Text4XL>
        <Hr />
      </div>
      <div className="mt-8 md:mt-16">
        <Card />
      </div>
    </>
  );
};

export default Cryptocurrencies;
