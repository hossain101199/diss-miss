import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import Menu from "@/assets/svgs/Menu";
import ArrowUp from "@/assets/svgs/ArrowUp";

const Navbar = () => {
  return (
    <div className="relative z-10 flex justify-between items-center px-[30px] md:px-[52px]">
      <h2 className="text-[#EFF5FF] font-bold text-base">Diss Miss</h2>
      <div className="hidden md:flex items-center gap-5">
        <select className="text-white font-semibold text-xs bg-white bg-opacity-[0.1] rounded-[16px] outline-none py-[15px] px-[24px]">
          <option className="text-black">Select Network</option>
          <option className="text-black" value="Network1">
            Network 1
          </option>
        </select>

        <PrimaryButton title="CONNECT WALLET" icon={<ArrowUp />} />
      </div>
      <div className="flex items-center md:hidden gap-5">
        <PrimaryButton title="CONNECT" />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
