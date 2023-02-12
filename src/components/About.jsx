import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure, SiHive } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-[var(--primary-blue)] text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4 text-white">
            Range of Powerful Accounting Software Features{" "}
          </h1>
          <p className="py-4 text-xl text-white">
            Onesheet is an intuitive online accounting software that provides
            users with an easy way to track financial information, manage
            expenses, and generate detailed reports with just a few clicks.
          </p>

          {/* Card Container*/}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-[5rem]">
            {/* Card */}
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract."
            />

            <AboutCard
              icon={<SiFsecure size={40} />}
              heading="Seamless connection to any API"
              text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
            />
            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Proven, ready-made solutions"
              text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
            />
            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Secure off-chain computation"
              text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
