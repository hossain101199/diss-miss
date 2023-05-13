import React from "react";
import Text4XL from "../atoms/Text4XL";

const TokensAndVoatings = () => {
  return (
    <section className="mt-32 lg:mt-36">
      <div className="lg:border-2 border-white-transparent lg:rounded-[45px] lg:p-9">
        <Text4XL size="text-[30px] leading-10 lg:leading-snug px-[30px] lg:px-0">
          Top tokens with lowest interest rate to borrow!
        </Text4XL>
        {/* <div>
          <table>
            <tr>
              <th>hello</th>
              <th>hello</th>
              <th>hello</th>
              <th>hello</th>
            </tr>
          </table>
        </div> */}
      </div>
    </section>
  );
};

export default TokensAndVoatings;
