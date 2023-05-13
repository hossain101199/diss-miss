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
