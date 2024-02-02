import React, { useState } from "react";
import logo from "../assets/images/logo.jpeg";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
import { IoIosClose, IoIosMenu } from "react-icons/io";
function Navbar() {
  const [menu, setMenu] = useState(true);
  const [toggle, setToggle] = useState("shop");
  
  return (
    <div>
      <div className="">.</div>
      <div className="">.</div>
      <div className="flex justify-around  bg-white">
        <div>
          <img src={logo} className="md:w-24 w-14 rounded-full" />
        </div>
        <ul className=" md:flex hidden items-center text-xl font-serif md:gap-28">
          <li
            className="hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500 border p-2 font-bold text-gray-700"
            onClick={() => {
              setToggle("shop");
            }}
            ><Link to="/Shop">Home</Link>
             </li>

          <li
            className="hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500 border p-2 font-bold text-gray-700"
            onClick={() => {
              setToggle("Product");
            }}
          ><Link to='/Productcollect'>Product</Link>
          </li>
          <li
            className="hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500 border p-2 font-bold text-gray-700"
            onClick={() => {
              setToggle("New Arrival");
            }}
          >
           <Link to='/Arrival'>New Arrivals</Link> 
          </li>
          <li
            className="hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500 border p-2 font-bold text-gray-700"
            onClick={() => {
              setToggle("Warranty Register");
            }}
          >
            <Link to='/Warrenty'>Warranty Register</Link>
          </li>
        </ul>
        {/* Responsive  */}

        <ul
          className={` duration-300 fixed md:hidden text-center bg-black w-full h-screen  text-white top-32 
        ${menu ? "left-[0]" : "left-[-100%]"}`}
        >
          <li
            className="mt-9 hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500  text-2xl  font-bold text-gray-700"
            onClick={() => {
              setToggle("Home");
            }}
          >
            <Link to="/Shop">Home</Link>
          </li>
          <li
            className="mt-9 hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500  text-2xl  font-bold text-gray-700"
            onClick={() => {
              setToggle("Product");
            }}
          >
          <Link to='/Product'>Product</Link>
          </li>
          <li
            className="mt-9 hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500   text-2xl font-bold text-gray-700"
            onClick={() => {
              setToggle("New Arrival");
            }}
          >
            <Link to='/Arrival'>New Arrivals</Link> 
          </li>
          <li
            className="mt-9 hover:border-blue-500 rounded-2xl cursor-pointer hover:text-blue-500  text-2xl  font-bold text-gray-700"
            onClick={() => {
              setToggle("Warranty Register");
            }}
          >
            <Link to='/Warrenty'>Warranty Register</Link>
          </li>
        </ul>

        <div className=" items-center flex gap-9">
         <Link to='/Profile'><VscAccount className="text-2xl cursor-pointer text-gray-700 hover:text-blue-500 " /></Link> 
         <Link to='/Shoping'> <FaShoppingCart className="text-2xl  cursor-pointer text-gray-700 hover:text-blue-500" /></Link>
        </div>
        <div>
          {menu ? (
            <IoIosClose
              className="text-4xl md:hidden items-center block"
              onClick={() => setMenu(!menu)}
            />
          ) : (
            <IoIosMenu
              className="text-4xl md:hidden block items-center"
              onClick={() => setMenu(!menu)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
