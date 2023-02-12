import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full h-[46vh] px-4 py-[8rem] bg-[var(--primary-blue)] text-white text-center">
      <h1 className="text-white">Join Our Onesheet Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4"
          type="email"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2 border border-black" type="checkbox" />
        <p className="text-white">
          Yes, I agree to receive email communications from DeFi
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
