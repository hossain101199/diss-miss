import React, { ReactElement } from "react";
import Link, { LinkProps } from "next/link";

interface NavLinkProps {
  icon: ReactElement;
  title: string;
  href: string;
}

const NavLink = ({ icon, title, href }: NavLinkProps) => {
  return (
    <Link href={href} className="flex gap-3 items-center text-primary w-28">
      {icon} {title}
    </Link>
  );
};

export default NavLink;
