import { tokensRate } from "@/constants";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const RateChart = () => {
  return (
    <div
      id="tokensRate"
      className="overflow-scroll mx-5 lg:mx-0 h-[250px] mt-7 lg:mt-9  "
    >
      <table className="w-full">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Anual Interest rate</th>
            <th>7 days</th>
            <th>30 days</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tokensRate.map((tokenRate) => (
            <tr key={tokenRate.id} className="border-t-[1px] border-primary">
              <td>{tokenRate.coin}</td>
              <td>{tokenRate.anualInterestRate}%</td>
              <td>{tokenRate.sevenDays}%</td>
              <td>{tokenRate.thirtyDays}%</td>
              <td>
                <PrimaryButton hoverButton={true} title="Borrow" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RateChart;
