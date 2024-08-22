import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";

const Navbar = () => {
  const { LoginPopup } = useContext(Context);

  const navLinkClasses = ({ isActive }) =>
    isActive ? "font-bold text-pink-500" : "font-bold text-white";

  return (
    <div className="bg-transparent sticky top-0 z-50 pt-2">
      <header className="relative">
        <nav aria-label="Top" className="px-3 text-white">
          <div>
            <div className="flex h-16 items-center w-full">
              <div className="flex ">
                <NavLink to={"/"} className="flex">
                  <div className="flex items-center">
                    <img
                      src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="pt-2"
                      alt="Tinder Logo"
                    />
                    <span className="font-bold lg:text-5xl text-3xl">
                      tinder
                    </span>
                  </div>
                </NavLink>
              </div>
              <div className="w-full flex justify-between ml-16 mt-2 items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:space-x-6 text-xl ">
                  <NavLink to={"/"} className={navLinkClasses}>
                    Products
                  </NavLink>
                  <NavLink to={"/order"} className={navLinkClasses}>
                    Learn
                  </NavLink>
                  <NavLink to={"/order"} className={navLinkClasses}>
                    Safety
                  </NavLink>
                  <NavLink to={"/dashboard"} className={navLinkClasses}>
                    Download
                  </NavLink>
                  <NavLink to={"/aboutus"} className={navLinkClasses}>
                    Support
                  </NavLink>
                </div>
                <div className="w-full flex justify-end gap-5 lg:gap-0">
                  <button
                    className="hidden md:block font-bold text-xl lg:ml-6 lg:mr-5 lg:flex bg-white cursor-pointer p-1.5 lg:px-5 px-5 rounded-3xl shadow-sm hover:shadow-pink-300 text-black"
                    onClick={LoginPopup}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
