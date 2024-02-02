import React from 'react'
import Item from '../Component/Item'
import data from '../assets/Store'
const collection = (props) => {
  return (
    <div className="">
      <h1 className="text-center gap-3 text-4xl md:text-6xl mt-20 font-serif bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
       NEW COLLECTION
      </h1>
      <hr className="mb-10 md:ml-40 ml-10 mr-10 md:mr-40" />
      <div className="flex flex-wrap gap-x-24  md:ml-52 ml-10 h-96">
       {data.map((item,i)=>{
        return <Item key={i} name={item.name} image={item.image}/>
       })}
      </div>
    </div>
  )
}

export default collection
