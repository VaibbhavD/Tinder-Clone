import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Context from "../../context/context";

const Hero_Section = () => {
  const context = useContext(Context);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textOpacity = Math.max(1 - scrollY / 500, 0);

  return (
    <div className="bg-black bg-opacity-50">
      <Navbar />
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <div>
          <p
            className="lg:text-8xl md:text-6xl text-5xl z-50 text-white font-extrabold text-center"
            style={{ opacity: textOpacity }}
          >
            Start Something epic.
          </p>
          <div className="w-full text-center mt-3 md:pt-10 pt-36">
            <button
              className="p-3 px-10 md:text-md lg:text-lg font-bold text-white bg-[#FE4654] rounded-3xl hover:bg-[#f45966]"
              onClick={context.LoginPopup}
              style={{ opacity: textOpacity }}
            >
              Create Account
            </button>
            <br />
            <button
              onClick={context.LoginPopup}
              className="md:hidden mt-3 p-3 px-16 md:text-md lg:text-lg font-bold text-white bg-transparent rounded-3xl border-[4px] border-white"
              style={{ opacity: textOpacity }}
            >
              Log In
            </button>
          </div>
          <div
            className="md:hidden flex justify-center pt-10"
            style={{ opacity: textOpacity }}
          >
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 bg-black text-white">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
