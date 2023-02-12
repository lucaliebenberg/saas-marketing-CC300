import React from "react";

import terminal from "../assets/terminal.png";

const Developers = () => {
  return (
    <div className="w-full h-[62vh] bg-white pt-[50px]">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1 className="mb-[3rem] text-[var(--primary-blue)]">
            Expert AI Analytics.
          </h1>
          <p className="text-lg text-black">
            Modern accounting software is powered by AI, giving businesses the
            ability to streamline their finances and gain valuable insights from
            their financial data.
          </p>
          <ul className="pl-6 pt-5 text-md text-black">
            <li className="list-disc">Predictive Analytics</li>
            <li className="list-disc">Natural Language Processing</li>
            <li className="list-disc">Highly Configurable</li>
          </ul>
        </div>
        <div className="flex justify-center w-full py-16">
          <img
            className="max-w-[250px] shadow-lg shadow-cyan-500/50"
            src={terminal}
            alt="terminal"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
