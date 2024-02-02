import React from "react";

const Support = () => {
  return (
    <div className="text-white">
      <h1 className="text-center md:text-4xl text-2xl mt-10 mb-5 font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-blue-300">
        SUPPORT TICKET
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
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer Email*
        </p>{" "}
        <input
          type="Email"
          placeholder="Email.."
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Customer Subject*
        </p>{" "}
        <input
          type="box"
          name=""
          id=""
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Date*
        </p>{" "}
        <input
          type="Date"
          name=""
          id=""
          className="text-black  border-none p-1 md:p-2 rounded-3xl cursor-pointer"
        />
        <p className="md:text-2xl  font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-600">
          Upload File*
        </p>{" "}
        <input
          type="file"
          name=""
          id=""
          className="text-black  border-none p-1 md:p-2 rounded-3xl"
        />
        <button
          type="submit"
          className="p-2 mt-5 bg-gradient-to-r from-pink-200 to-blue-600 font-serif rounded-3xl"
        >
          Submit
        </button>
        <button
          type="reset"
          className="p-2 mb-5 bg-gradient-to-r from-pink-200 to-blue-600 font-serif rounded-3xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Support;
