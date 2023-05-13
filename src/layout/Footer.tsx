import Logo from "@/assets/svgs/Logo";
import BaseText from "@/components/atoms/BaseText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/images/logo.png";
import {
  footerRoutes,
  footerSlogan,
  socialMedias,
  websiteTitle,
} from "@/constants";

const Footer = () => {
  return (
    <footer className="border-t-2  border-white-transparent lg:rounded-[45px] lg:grid grid-cols-2 p-12 lg:p-20 mt-16 lg:mt-20">
      <div className="flex justify-center">
        <div>
          <Link href="#" className="flex items-center gap-5">
            <Image src={logo} alt="" />
            <h2 className="text-primary font-bold text-base">{websiteTitle}</h2>
          </Link>
          <BaseText className="mt-7 lg:mt-8" font="font-normal" size="text-xs">
            {footerSlogan}
          </BaseText>
          <div className="flex gap-6 mt-12 lg:mt-6">
            {socialMedias.map((socialMedia) => (
              <Link key={socialMedia.id} href={socialMedia.href}>
                <socialMedia.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {footerRoutes.map((footerRoute) => (
          <Link key={footerRoute.id} href={footerRoute.href}>
            <BaseText
              font="font-normal"
              size="text-xs"
              className="hover:text-primary"
            >
              {footerRoute.title}
            </BaseText>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
