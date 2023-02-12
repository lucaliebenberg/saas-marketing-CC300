import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5 text-left">
        <div>
          <h3 className="font-bold text-xl border-b-4 border-[var(--primary-blue)] inline-block mt-4 ml-3">
            Product
          </h3>
          <ul className="">
            <li>Features</li>
            <li>Agencies</li>
            <li>Security Audits</li>
            <li>SaaS VAPT</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl border-b-4 border-[var(--primary-blue)] inline-block mt-4 ml-3">
            Company
          </h3>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl border-b-4 border-[var(--primary-blue)] inline-block mt-4 ml-3">
            Socials
          </h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
