import React from "react";
import { Link } from "react-router-dom";
import shoping from "../assets/images/shoping.jpg";
function Shoping() {
  return (
    <div className="grid grid-cols-1 space-y-5 md:grid-cols-2 justify-around m-[80px]">
      <h1 className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-blue-900 md:mt-[100px] md:text-5xl">
        Welcome to Dhavani Traders <br />
        Start Your Shoping Click Here
      <Link to='/Productcollect'>  <button className="bg-orange-500 md:p-2 p-1 md:text-xl rounded-3xl text-white">Shopping</button></Link>
      </h1>
      <img src={shoping} alt="" className="w-[640px] rounded-lg" />
    </div>
  );
}

export default Shoping;
