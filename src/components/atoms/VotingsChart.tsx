import { tokensRate, votingsData } from "@/constants";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const VotingsChart = () => {
  return (
    <div
      id="votingsChart"
      className="overflow-scroll mx-5 lg:mx-0 h-[250px] mt-10 lg:mt-8"
    >
      <table className="w-full">
        <thead>
          <tr>
            <th className="hidden lg:block">#</th>
            <th>Options</th>
            <th>Vote count</th>
          </tr>
        </thead>
        <tbody>
          {votingsData.map((votingData) => (
            <tr key={votingData.id} className="border-t-[1px] border-primary">
              <td className="hidden lg:block">{votingData.id}</td>
              <td>{votingData.options}%</td>
              <td>
                {votingData.voteCount < 10
                  ? `0${votingData.voteCount}`
                  : votingData.voteCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VotingsChart;
