import React from "react";
import logo from "../assets/images/logo.jpeg";
import { IoLogoInstagram } from "react-icons/io5";
import { RiWhatsappLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="font-serif bg-gradient-to-r from-pink-300 to-blue-300 h-2/3 md:h-96 md:mt-[10px]  rounded-3xl">
      <div className="md:ml-[650px]  ml-[160px]">
        <Link to="/Shop">
          {" "}
          <img
            src={logo}
            alt=""
            className="md:w-[150px] w-[70px] h-[65px]  md:h-[100px] rounded-3xl cursor-pointer"
          />
        </Link>
      </div>
      <div className="mt-10 md:ml-[350px] ml-[80px]">
        <ul className="flex flex-wrap gap-3 md:gap-10">
          <li className="bg-green-500 rounded-3xl p-2 font-serif cursor-pointer">
            <Link to="/Support"> Support</Link>
          </li>
          <li className="bg-blue-500 rounded-3xl p-2 font-serif cursor-pointer">
            <Link to="/Policy"> Privacy Policy</Link>
          </li>
          <li className="bg-yellow-500 rounded-3xl p-2 font-serif cursor-pointer">
            <Link to="/Condition"> Terms and Conditions</Link>
          </li>
          <li className="bg-orange-500 rounded-3xl p-2 font-serif cursor-pointer">
            <Link to="/Return">Warranty,Return & Refund</Link>
          </li>
          <li className="bg-red-500 rounded-3xl p-2 font-serif cursor-pointer">
            <Link to="/About"> About Us</Link>
          </li>
        </ul>
      </div>
      <div className="md:ml-[550px] ml-[80px] mt-5">
        <h1 className="font-bold text-2xl">
          Contact Us:-
          <a href=""><b className="text-blue-600 text-[14px] cursor-pointer">
            Email:Sound@dhavanitraders.com
          </b></a>
        </h1>
      </div>
      <div className="flex flex-wrap gap-5  md:gap-7 md:ml-[500px] ml-[60px]  mt-5">
        <a href="https://instagram.com/dhavani.infinity?igshid=NzV4MTl5Ym5waXBu&utm_source=qr" className="bg-white rounded-full p-2 md:p-4 shadow shadow-gray-700">
          <IoLogoInstagram className="text-pink-900 text-2xl  cursor-pointer " />
        </a>
        <a href="https://wa.me/919650078982?text=Welcome to Dhavani How can we help you select the options given below
            1. Refund 
            2.Replacement 
            3.Return"  className="bg-white rounded-full p-2 md:p-4 shadow shadow-gray-700">
          <RiWhatsappLine className="text-green-500 text-2xl  cursor-pointer " />
        </a>
        <a href="https://www.facebook.com/p/Dhavani-Traders-61552107230498/"  className="bg-white rounded-full p-2 md:p-4 shadow shadow-gray-700">
          <FaFacebookSquare className="text-blue-900 text-2xl  cursor-pointer " />
        </a>
        <a href="https://youtube.com/@Dhavani-hx7pi?si=aq2ZnhrKmmXsQls-"  className="bg-white rounded-full p-2 md:p-4 shadow shadow-gray-700">
          <FaYoutube className="text-red-600 text-3xl  cursor-pointer " /></a>
        <a href="https://www.linkedin.com/onboarding/start/people-you-may-know/new/"  className="bg-white rounded-full p-2 md:p-4 shadow shadow-gray-700">
          <FaLinkedin className="text-blue-500 text-2xl  cursor-pointer " /></a>
      </div>
    </div>
  );
};

export default footer;
