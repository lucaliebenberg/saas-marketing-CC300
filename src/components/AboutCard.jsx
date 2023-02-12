import React from "react";

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
      <div>
        <div className="inline-flex p-2 rounded-full">{props.icon}</div>
        <h3 className="text-xl text-white font-bold py-4">{props.heading}</h3>
        <p className="text-white">{props.text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
