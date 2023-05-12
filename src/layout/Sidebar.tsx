import Blog from "@/assets/svgs/Blog";
import HomeIcon from "@/assets/svgs/HomeIcon";
import Invest from "@/assets/svgs/Invest";
import Loans from "@/assets/svgs/Loans";
import Logo from "@/assets/svgs/Logo";
import Mix from "@/assets/svgs/Mix";
import Swap from "@/assets/svgs/Swap";
import Voting from "@/assets/svgs/Voting";
import Image from "next/image";
import React from "react";
import userImage from "../assets/images/userImage.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="hidden md:block bg-primary rounded-[45px] w-fit relative ">
      <div className="relative px-8 pt-16 pb-9 flex flex-col items-center h-screen justify-between z-10">
        <Link href="#">
          <Logo />
        </Link>
        <div className="flex flex-col gap-11">
          <Link href="#">
            <HomeIcon />
          </Link>
          <Link href="#">
            <Invest />
          </Link>
          <Link href="#">
            <Swap />
          </Link>
          <Link href="#">
            <Mix />
          </Link>
          <Link href="#">
            <Loans />
          </Link>
          <Link href="#">
            <Voting />
          </Link>
          <Link href="#">
            <Blog />
          </Link>
        </div>
        <Link href="#">
          <Image
            src={userImage}
            width={40}
            height={40}
            alt="Image description"
          />
        </Link>
      </div>
      <div className="sideGradient1 absolute top-[10px] right-0 z-0"></div>
      <div className="sideGradient2 absolute top-[7px] left-[-50px]  z-0"></div>
      <div className="sideGradient3 absolute top-[40%] left-0  z-0"></div>
      <div className="sideGradient4 absolute bottom-0 left-[-20px] z-0"></div>
    </aside>
  );
};

export default Sidebar;
