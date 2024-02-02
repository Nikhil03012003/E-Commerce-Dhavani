import React from "react";
import P17 from "../assets/images/P17.webp";
const Offer = () => {
  return (
    <div className=" flex flex-wrap justify-around gap-5 bg-[#ffffff30] md:mr-32 md:ml-32 rounded-3xl h-[570px] md:h-[350px] mt-[5500px] md:mt-[1650px]">
      <div className="mt-24">
        <p className="font-serif bg-gradient-to-r from-pink-800 to-blue-800 text-transparent bg-clip-text text-4xl md:text-6xl">
          Exclusive Offer <br /> For You
        </p>
        <p className="font-serif bg-gradient-to-r from-pink-800 to-blue-800 text-transparent bg-clip-text text-[15px] md:text-xl">
          ONLY ON BEST SELLER PRODUCT
        </p>
        <button className="md:p-3 p-2 rounded-full bg-pink-900 text-white cursor-pointer hover:bg-blue-600">
          Check Now
        </button>
      </div>
      <div>
        <img src={P17} alt="" className="w-[550px] mt-16 rounded-3xl" />
      </div>
    </div>
  );
};

export default Offer;
