import UsdCoin from "@/assets/svgs/UsdCoin";
import Ethereum from "../assets/svgs/Ethereum";
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
import HomeIcon from "@/assets/svgs/HomeIcon";
import Invest from "@/assets/svgs/Invest";
import Swap from "@/assets/svgs/Swap";
import Mix from "@/assets/svgs/Mix";
import Loans from "@/assets/svgs/Loans";
import Voting from "@/assets/svgs/Voting";
import Blog from "@/assets/svgs/Blog";

interface SidebarNavLinks {
  id: number;
  href: string;
  icon: any;
  title: string;
}
export const sidebarNavLinks: SidebarNavLinks[] = [
  { id: 1, href: "#", icon: HomeIcon, title: "Home" },
  { id: 2, href: "#", icon: Invest, title: "Invest" },
  { id: 3, href: "#", icon: Swap, title: "Swap" },
  { id: 4, href: "#", icon: Mix, title: "Mix" },
  { id: 5, href: "#", icon: Loans, title: "Loans" },
  { id: 6, href: "#", icon: Voting, title: "Voting" },
  { id: 7, href: "#", icon: Blog, title: "Blog" },
];

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
  class: string;
}
export const facilities: Facilitie[] = [
  {
    id: 1,
    title: "Trade popular stocks, currencies, bonds",
    class: "",
  },
  { id: 2, title: "Swap Cryptos with Tokenized Stocks", class: "lg:ms-[20px]" },
  {
    id: 3,
    title: "Vote on community governance proposals",
    class: "lg:ms-[40px]",
  },
  { id: 4, title: "Lend, Borrow with highest returns", class: "lg:ms-[60px]" },
  {
    id: 5,
    title: "Get the latest crypto trends in one place",
    class: "lg:ms-[80px]",
  },
];

export const tokenRateTitle: string =
  "Top tokens with lowest interest rate to borrow!";
export const votingTitle: string = "Currently running Votings";
export const votingSubject: string = "What should be the Trading commission?";
export const votingEndDate: number = 5;
interface tokenRate {
  id: number;
  coin: string;
  anualInterestRate: number;
  sevenDays: number;
  thirtyDays: number;
}

export const tokensRate: tokenRate[] = [
  {
    id: 1,
    coin: "ETH",
    anualInterestRate: 5,
    sevenDays: 1,
    thirtyDays: 3,
  },
  {
    id: 2,
    coin: "DAI",
    anualInterestRate: 4,
    sevenDays: 1,
    thirtyDays: 3,
  },
  {
    id: 3,
    coin: "BNB",
    anualInterestRate: 7,
    sevenDays: 2,
    thirtyDays: 4,
  },
  {
    id: 4,
    coin: "MATIC",
    anualInterestRate: 5,
    sevenDays: 1,
    thirtyDays: 3,
  },
  {
    id: 5,
    coin: "ETH",
    anualInterestRate: 5,
    sevenDays: 1,
    thirtyDays: 3,
  },
  {
    id: 6,
    coin: "DAI",
    anualInterestRate: 4,
    sevenDays: 1,
    thirtyDays: 3,
  },
  {
    id: 7,
    coin: "BNB",
    anualInterestRate: 7,
    sevenDays: 2,
    thirtyDays: 4,
  },
  {
    id: 8,
    coin: "MATIC",
    anualInterestRate: 5,
    sevenDays: 1,
    thirtyDays: 3,
  },
];

interface voting {
  id: number;
  options: number;
  voteCount: number;
}
export const votingsData: voting[] = [
  { id: 1, options: 0.0002, voteCount: 11 },
  { id: 2, options: 0.0003, voteCount: 1 },
  { id: 3, options: 0.001, voteCount: 3 },
  { id: 4, options: 0.0002, voteCount: 2 },
  { id: 5, options: 0.0003, voteCount: 1 },
  { id: 6, options: 0.001, voteCount: 3 },
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
