import React from "react";
import Navbar from "./Navbar";

export default function Hero_Section() {
  return (
    <div className="bg-black bg-opacity-50">
      <Navbar />
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <div className="">
          <p className="lg:text-8xl md:text-6xl text-3xl z-50 text-white font-bold ">
            Start Something epic.
          </p>
          <div className="w-full text-center mt-3 ">
            <button className="p-3 px-10 md:text-md lg:text-lg font-bold text-white bg-pink-600 rounded-3xl border-[4px] border-white">
              Crete Account
            </button>
            <br />
            <button className="md:hidden mt-3 p-3 px-16 md:text-md lg:text-lg font-bold text-white bg-transparent rounded-3xl border-[4px] border-white">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
