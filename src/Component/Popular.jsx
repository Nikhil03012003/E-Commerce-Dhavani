import React from "react";
import data_product from "../assets/Data";
import Item from "./Item";
const Popular = () => {
  return (
    <div className="">
      <h1 className="text-center gap-3 text-5xl md:text-6xl mt-20 font-serif bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        FIND YOUR FIT
      </h1>
      <hr className="mb-10 md:ml-40 ml-10 mr-10 md:mr-40" />
      <div className="flex flex-wrap gap-x-24  md:ml-52 ml-10 h-96">
        {data_product.map((item, i) => {
          return <Item key={i} name={item.name} image={item.image} />;
        })}
      </div>
    </div>
  );
};
export default Popular;
