import React from "react";

const Emailbox = () => {
  return (
    <div>
      <div className="md:mt-[400px] mt-[2000px] md:h-72 h-80 rounded-3xl md:mr-32 md:ml-32 bg-[#ffffff30]">
        <div className="">
          <h1 className="font-serif bg-gradient-to-r from-pink-800 to-blue-800 text-transparent bg-clip-text text-4xl md:text-6xl text-center pt-24">
            Get Exclusive Offer On Your E-mail
          </h1>
          <p className="font-serif bg-gradient-to-r from-pink-900 to-blue-900 text-transparent bg-clip-text text-[15px] md:text-xl text-center mt-5">
            Subscribe To Our Newletter And Stay Update
          </p>
        </div>
        <div className="text-center mt-5 ">
          <input
            type="email"
            name=""
            placeholder=" Your Email Id"
            className="md:w-96 border-none rounded-3xl p-2 md:pr-44"
            id=""
          />
          <button className="bg-black text-white font-serif p-3 rounded-3xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Emailbox;
