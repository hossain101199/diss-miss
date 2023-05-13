import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import Menu from "@/assets/svgs/Menu";
import ArrowUp from "@/assets/svgs/ArrowUp";
import Mix from "@/assets/svgs/Mix";
import { websiteTitle } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[30px] lg:px-[52px]">
      <Link href="#">
        <h2 className="text-primary font-bold text-base">{websiteTitle}</h2>
      </Link>

      <div className="hidden lg:flex items-center gap-5">
        <div className="bg-white bg-opacity-[0.1] rounded-[16px] flex justify-center items-center gap-5 py-[15px] px-[24px]">
          <Mix />
          <select className="text-white font-semibold text-xs bg-transparent outline-none ">
            <option className="text-black">Select Network</option>
            <option className="text-black" value="Network1">
              Network 1
            </option>
          </select>
        </div>
        <PrimaryButton title="CONNECT WALLET" icon={<ArrowUp />} />
      </div>

      <div className="flex items-center lg:hidden gap-5">
        <PrimaryButton title="CONNECT" />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
