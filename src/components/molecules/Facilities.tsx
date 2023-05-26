import React from "react";
import Text4XL from "../atoms/Text4XL";
import Hr from "../atoms/Hr";
import BaseText from "../atoms/BaseText";
import BulletCheckMark from "../atoms/BulletCheckMark";
import { facilitieSlogan, facilitieTitle, facilities } from "@/constants";
import Image from "next/image";
import squareCrystal from "../../assets/images/squareCrystal.png";

const Facilities = () => {
  return (
    <section className="relative lg:grid grid-cols-5 px-[30px] lg:px-0 pt-4 lg:pt-32">
      <Image src={squareCrystal} alt="" className="lg:absolute top-" />
      <div className="relative z-10 col-span-3 flex justify-end">
        <div className="lg:max-w-md">
          <Text4XL className="mb-6 md:mb-9">{facilitieTitle}</Text4XL>
          <Hr />
          <BaseText className="mt-6 md:mt-9">{facilitieSlogan}</BaseText>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-start gap-3 mt-8 lg:mt-0">
        {facilities.map((faciliti, index) => (
          <BulletCheckMark
            key={faciliti.id}
            title={faciliti.title}
            className={faciliti.class}
          />
        ))}
      </div>
    </section>
  );
};

export default Facilities;
