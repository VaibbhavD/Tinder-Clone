import React, { useContext } from "react";
import Navbar from "./Navbar";
import Context from "../../context/context";

export default function Hero_Section() {
  const context = useContext(Context);
  return (
    <div className="bg-black bg-opacity-50">
      <Navbar />
      <div className="min-h-screen min-w-screen flex justify-center items-center ">
        <div className="">
          <p className="lg:text-8xl md:text-6xl text-4xl z-50 text-white font-extrabold ">
            Start Something epic.
          </p>
          <div className="w-full text-center mt-3 pt-36 ">
            <button
              className="p-3 px-10 md:text-md lg:text-lg font-bold text-white bg-pink-600 rounded-3xl border-[4px] border-white"
              onClick={context.LoginPopup}
            >
              Crete Account
            </button>
            <br />
            <button
              onClick={context.LoginPopup}
              className="md:hidden mt-3 p-3 px-16 md:text-md lg:text-lg font-bold text-white bg-transparent rounded-3xl border-[4px] border-white"
            >
              Log In
            </button>
          </div>
          <div class="md:hidden flex justify-center pt-10">
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 bg-black text-white">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                class="w-7 md:w-8"
              />
              <div class="text-left ml-3">
                <p class="text-xs text-gray-200">Download on </p>
                <p class="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
