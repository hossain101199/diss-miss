import { title } from "process";
import UsdCoin from "@/assets/svgs/UsdCoin";
import Ethereum from "../assets/svgs/Ethereum";
import React from "react";
import Chainlink from "@/assets/svgs/Chainlink";
import Dai from "@/assets/svgs/Dai";
import Matic from "@/assets/svgs/Matic";
import Aave from "@/assets/svgs/Aave";
import Bnb from "@/assets/svgs/Bnb";
import Polkadot from "@/assets/svgs/Polkadot";
import Xrp from "@/assets/svgs/Xrp";
import Facebook from "@/assets/svgs/Facebook";
import Linkedin from "@/assets/svgs/Linkedin";
import Twitter from "@/assets/svgs/Twitter";
import Telegram from "@/assets/svgs/Telegram";
import Discord from "@/assets/svgs/Discord";

export const websiteTitle: string = "Diss Miss";
export const heroTitle1: string = "Get your";
export const heroTitle2: string = "Tokenized, Get";
export const heroTitle3: string = "Digitalized!";
export const heroSlogan: string =
  "Tokenized stocks offer several benefits over traditional sticks.";

export const coinTitle: string = "Trade with multiple Cryptocurrencies";
export const coinSlogan: string = "Overcome the barier of limitation,";
interface Coin {
  id: number;
  name: string;
  icon: any;
}

export const coinList: Coin[] = [
  { id: 1, name: "Ethereum", icon: Ethereum },
  { id: 2, name: "USD Coin", icon: UsdCoin },
  { id: 3, name: "Chainlink", icon: Chainlink },
  { id: 4, name: "Dai", icon: Dai },
  { id: 5, name: "Matic", icon: Matic },
  { id: 6, name: "Aave", icon: Aave },
  { id: 7, name: "BNB", icon: Bnb },
  { id: 8, name: "Polkadot ", icon: Polkadot },
  { id: 9, name: "XRP", icon: Xrp },
];

export const facilitieTitle: string = "Your One-Stop Crypto Solution Provider!";
export const facilitieSlogan: string = "Swisscheese Features";
interface Facilitie {
  id: number;
  title: string;
}
export const facilities: Facilitie[] = [
  { id: 1, title: "Trade popular stocks, currencies, bonds" },
  { id: 2, title: "Swap Cryptos with Tokenized Stocks" },
  { id: 3, title: "Vote on community governance proposals" },
  { id: 4, title: "Lend, Borrow with highest returns" },
  { id: 5, title: "Get the latest crypto trends in one place" },
];

export const footerSlogan: string = " Your One-Stop Crypto Solution Provider";
interface SocialMedia {
  id: number;
  href: string;
  icon: any;
}
export const socialMedias: SocialMedia[] = [
  { id: 1, href: "#", icon: Facebook },
  { id: 2, href: "#", icon: Linkedin },
  { id: 3, href: "#", icon: Twitter },
  { id: 4, href: "#", icon: Telegram },
  { id: 5, href: "#", icon: Discord },
];

interface FooterRoute {
  id: number;
  title: string;
  href: any;
}
export const footerRoutes: FooterRoute[] = [
  { id: 1, title: "Home", href: "#" },
  { id: 2, title: "Mix Portfolios", href: "#" },
  { id: 3, title: "Blog", href: "#" },
  { id: 4, title: "Invest", href: "#" },
  { id: 5, title: "Crypto Loans", href: "#" },
  { id: 6, title: "Privacy Policy", href: "#" },
  { id: 7, title: "Swap", href: "#" },
  { id: 8, title: "Voting", href: "#" },
  { id: 9, title: "Terms & Conditions", href: "#" },
];
