import React from 'react'
import { Link } from 'react-router-dom'
const Creat = () => {
  return (
    <div className="bg-[#ffffff30] h-[600px] rounded-lg md:h-[900px] m-[60px] md:m-[80px]">
    <h1 className="text-center md:text-4xl text-2xl mt-10 mb-5 font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-blue-300">
      CREATE ACCOUNT
    </h1>
    <div className="flex-col flex md:ml-40 md:mr-40 gap-y-1 md:space-y-3">
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer Name*
        </p>{" "}
        <input
          type="name"
          placeholder="Name.."
          className="text-black  border-none md:p-2 p-1 rounded-3xl "
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer Phone*{" "}
        </p>
        <input
          type="Phone"
          placeholder="Phone no..."
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer Email*
        </p>{" "}
        <input
          type="Email"
          placeholder="Email.."
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Create Password*
        </p>{" "}
        <input
          type="Password"
          placeholder="Password"
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer City*
        </p>{" "}
        <input
          type="City"
          placeholder="City.."
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer State*
        </p>{" "}
        <input
          type="State"
          placeholder="State.."
          className="text-black rounded-3xl  border-none p-1 md:p-2 "
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer Pin-Code
        </p>{" "}
        <input
          type="Pin-Code"
          placeholder="Pin-Code.."
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
         <input
          type="Submit"
          placeholder="Submit"
          className="text-black  border-none p-1 cursor-pointer md:p-2 rounded-3xl font-serif  bg-gradient-to-r from-pink-900 to-blue-300"
        />
        <Link to="/Profile">
            {" "}
            <p className="text-black hover:text-blue-800 font-bold text-xl cursor-pointer">
              Log In
            </p>
          </Link>
      </div>
    </div>
  )
}

export default Creat
