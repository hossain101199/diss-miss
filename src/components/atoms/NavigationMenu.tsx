import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Invest from "@/assets/svgs/Invest";
import Swap from "@/assets/svgs/Swap";
import Mix from "@/assets/svgs/Mix";
import Loans from "@/assets/svgs/Loans";
import Voting from "@/assets/svgs/Voting";
import Blog from "@/assets/svgs/Blog";
import Logo from "../../assets/images/logo.png";
import userImage from "../../assets/images/userImage.png";

const NavigationMenu = () => {
  return (
    <div className="bg-backgroundGradient z-50 absolute top-[50px] right-0 h-[80vh] w-screen overflow-hidden lg:hidden">
      <div className="mainBgImage w-full h-full p-[30px]">
        <div className="flex justify-between">
          <Link href="#">
            <Image src={Logo} alt="Image description" />
          </Link>
          <Link href="#">
            <Image
              src={userImage}
              width={40}
              height={40}
              alt="Image description"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-11">
          <NavLink href="#" icon={<Invest />} title="Invest" />
          <NavLink href="#" icon={<Swap />} title="Swap" />
          <NavLink href="#" icon={<Mix />} title="Mix" />
          <NavLink href="#" icon={<Loans />} title="Loans" />
          <NavLink href="#" icon={<Voting />} title="Voting" />
          <NavLink href="#" icon={<Blog />} title="Blog" />
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
