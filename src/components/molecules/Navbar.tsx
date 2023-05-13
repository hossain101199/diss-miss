import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import Menu from "@/assets/svgs/Menu";
import ArrowUp from "@/assets/svgs/ArrowUp";
import Mix from "@/assets/svgs/Mix";

const Navbar = () => {
  return (
    <div className="relative z-10 flex justify-between items-center px-[30px] md:px-[52px]">
      <h2 className="text-[#EFF5FF] font-bold text-base">Diss Miss</h2>
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
