import React from "react";
import { Link } from "react-router-dom";
import Item from "../Component/Item";
import Dj from "../assets/images/Dj.gif";
import Popular from "../Component/Popular";
import Offer from "../Component/Offer";
import Collection from "../Component/Collection";
import Emailbox from "../Component/Emailbox";

function Shop() {
  // <span className='bg-gradient-to-r from-pink-500 to-white text-transparent bg-clip-text text-[90px]'>New Collection <br /> For Everyone</span>
  return (
    <div>
      <div className="flex flex-wrap justify-around">
        <div>
          <div>
            <p className="bg-gradient-to-r from-pink-500 to-white text-transparent bg-clip-text font-Sevillana mt-20 md:mt-32 text-[45px] md:text-[90px]">
              New Collection <br /> For Everyone
            </p>
          </div>
          <h1 className="text-[40px] bg-gradient-to-r from-pink-500 to-blue-500 font-Sevillana  text-transparent bg-clip-text ">
            <br /> Dhavani-Traders
          </h1>
          <Link to="/Arrival">
            <button className="bg-pink-400 mt-5 hover:bg-slate-700 cursor-pointer text-black font-bold p-2 text-center rounded-3xl">
              New Collection
            </button>
          </Link>
        </div>
        <div>
          <img className="md:w-60 w-48 p-4 mt-16" src={Dj} />
        </div>
      </div>
      <Item />
      <Popular />
      <Offer />
      <Collection/>
      <Emailbox/>
    </div>
  );
}

export default Shop;
