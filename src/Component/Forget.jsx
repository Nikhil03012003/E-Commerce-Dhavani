import React from "react";
import { Link } from "react-router-dom";
const Forget = () => {
  return (
    <div className="bg-[#ffffff30] h-[250px] m-[80px]">
      <h1 className="text-center md:text-4xl text-2xl mt-10 mb-5 font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-blue-300">
        RESET PASSWORD
      </h1>
      <div className="flex flex-col space-y-5 md:ml-40 md:mr-40">
        <input
          type="Email"
          placeholder="Email.."
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <input
          type="Submit"
          placeholder="Reset"
          className="text-black  border-none p-1 cursor-pointer md:p-2 rounded-3xl font-serif  bg-gradient-to-r from-pink-900 to-blue-300"
        />
        <div className="flex space-x-10">
          <Link to='/Creat'><p className="text-black hover:text-blue-800 font-bold text-xl cursor-pointer">
            Create New Account
          </p></Link>
          <Link to="/Profile">
            {" "}
            <p className="text-black hover:text-blue-800 font-bold text-xl cursor-pointer">
              Log In
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forget;
