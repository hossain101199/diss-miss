import React, { useState } from "react";
import PrimaryButton from "../atoms/PrimaryButton";
import Menu from "@/assets/svgs/Menu";
import ArrowUp from "@/assets/svgs/ArrowUp";
import Mix from "@/assets/svgs/Mix";
import { tokenRateTitle, websiteTitle } from "@/constants";
import Link from "next/link";
import useModal from "@/hooks/useModal";
import Modal from "./Modal";
import RateChart from "../atoms/RateChart";
import Text4XL from "../atoms/Text4XL";
import Sidebar from "@/layout/Sidebar";
import Logo from "@/assets/svgs/Logo";
import HomeIcon from "@/assets/svgs/HomeIcon";
import Invest from "@/assets/svgs/Invest";
import Swap from "@/assets/svgs/Swap";
import Loans from "@/assets/svgs/Loans";
import Voting from "@/assets/svgs/Voting";
import Blog from "@/assets/svgs/Blog";
import Image from "next/image";
import userImage from "../../assets/images/userImage.png";
import logo from "../../assets/images/logo.png";
import NavLink from "../atoms/NavLink";
import NavigationMenu from "../atoms/NavigationMenu";

const Navbar = () => {
  const { show, handleShow, handleClose } = useModal();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex justify-between items-center px-[30px] lg:px-[52px]">
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
        <PrimaryButton
          title="CONNECT WALLET"
          icon={<ArrowUp />}
          handleClick={handleShow}
        />
      </div>

      <div className=" flex items-center lg:hidden gap-5">
        <PrimaryButton title="CONNECT" handleClick={handleShow} />
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          <Menu />
        </button>
      </div>
      {isNavOpen && <NavigationMenu className="top-[50px] right-0" />}
      <Modal show={show} handleClose={handleClose}>
        <div className="lg:p-9 lg:max-w-[500px] h-fit">
          <Text4XL size="text-[30px] leading-10 lg:leading-snug px-[30px] lg:px-0">
            {tokenRateTitle}
          </Text4XL>
          <RateChart />
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
