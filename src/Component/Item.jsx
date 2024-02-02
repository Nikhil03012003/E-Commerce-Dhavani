import React from "react";

const Item = (props) => {
  return (
    <div className="w-[300px] bg-white mb-7 rounded-lg  cursor-pointer hover:scale-100 hover:transition">
      <img src={props.image} alt="" className="rounded-lg" />
      <p className="m-4 text-center text-2xl font-serif bg-gradient-to-r from-pink-800 to-blue-800 text-transparent bg-clip-text">
        {props.name}
      </p>
    </div>
  );
};

export default Item;
