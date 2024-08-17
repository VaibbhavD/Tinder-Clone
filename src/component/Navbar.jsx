import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import Context from "../context/context";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const context = useContext(Context);
  const { mode, ToggleMode, LoginPopup } = context;
  return (
    <div className="bg-transparent sticky top-0 z-50 pt-2">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40  lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              {/* for Mobile Start */}
              <Dialog.Panel
                className="relative flex w-full max-w-60 flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28 justify-end ">
                  <button
                    type="button"
                    className={`-m-2 inline-flex rounded-md font-bold p-2 ${
                      mode == "dark" ? "test-white" : "text-gray-900"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {/* Products */}
                  <div className="flow-root">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium text-pink-500 "
                          : "font-medium text-gray-900 "
                      }
                    >
                      Products
                    </NavLink>
                  </div>
                  {/* Learn */}
                  <div className="flow-root -ml-1.5">
                    <select
                      className={`${
                        mode === "dark"
                          ? " font-medium cursor-pointer bg-transparent "
                          : " font-medium  cursor-pointer   "
                      }`}
                      defaultValue=""
                    >
                      <option
                        className={`${
                          mode === "dark"
                            ? " text-xs font-medium bg-gray-700 cursor-pointer text-white"
                            : "text-xs font-medium  cursor-pointer bg-stone-100"
                        }`}
                        value=""
                        disabled
                      >
                        Learn
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium  cursor-pointer bg-gray-700"
                            : "text-xs font-medium  cursor-pointer bg-stone-100"
                        }`}
                        value="cloths"
                      >
                        Mens Wear
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium   cursor-pointer bg-gray-700"
                            : "text-xs font-medium cursor-pointer  bg-stone-100"
                        }`}
                        value="mobiles"
                      >
                        Mobiles
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium  cursor-pointer  bg-gray-700"
                            : "text-xs font-medium cursor-pointer  bg-stone-100"
                        }`}
                        value="furniture"
                      >
                        Home & Furniture
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium  cursor-pointer  bg-gray-700"
                            : "text-xs font-medium cursor-pointer  bg-stone-100"
                        }`}
                        value="electronics"
                      >
                        Electronics
                      </option>
                    </select>
                  </div>

                  {/* Safety */}
                  <div className="flow-root">
                    <NavLink
                      to={"/dashboard"}
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium text-pink-500 "
                          : "font-medium text-gray-900 "
                      }
                    >
                      Safety
                    </NavLink>
                  </div>

                  {/* Suppport */}
                  <div className="flow-root">
                    <NavLink
                      to={"/aboutus"}
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium text-pink-500 "
                          : "font-medium text-gray-900 "
                      }
                    >
                      Suppport
                    </NavLink>
                  </div>
                  {/* Download */}
                  <div className="flow-root">
                    <NavLink
                      to={"/profile"}
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium text-pink-500 "
                          : "font-medium  "
                      }
                    >
                      <span className="text-center">Download</span>
                    </NavLink>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative  ">
        <nav aria-label="Top" className={` px-3 text-white `}>
          <div>
            <div className="flex h-16 items-center w-full">
              <button
                type="button"
                className="rounded-md  p-2 text-gray-600 lg:hidden"
                onClick={() => setOpen(true)}
              ></button>

              {/* Logo E-commerce*/}
              <div className=" flex lg:ml-6">
                <NavLink to={"/"} className="flex">
                  <div className="flex ">
                    <div className="flex justify-center items-center">
                      <img
                        src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
                        width={80}
                        height={80}
                        loading="lazy"
                        className="pt-2"
                      />
                      <span className="font-bold lg:text-5xl text-3xl">
                        tinder
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="w-full flex justify-between ml-10">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:space-x-6">
                  {/* Products */}
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-medium  border-b-2 border-pink-500"
                        : "text-lg font-medium "
                    }
                  >
                    Products{" "}
                  </NavLink>
                  {/* Learn */}

                  <NavLink
                    to={"/order"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-medium  border-b-2 border-pink-500"
                        : "text-lg font-medium "
                    }
                  >
                    Learn
                  </NavLink>

                  {/* Safety */}

                  <NavLink
                    to={"/order"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-medium  border-b-2 border-pink-500"
                        : "text-lg font-medium "
                    }
                  >
                    Safety
                  </NavLink>

                  {/* Download */}

                  <NavLink
                    to={"/dashboard"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-medium  border-b-2 border-pink-500"
                        : "text-lg font-medium "
                    }
                  >
                    Download
                  </NavLink>

                  {/* Support */}

                  <NavLink
                    to={"/aboutus"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-lg font-medium  border-b-2 border-pink-500"
                        : "text-lg font-medium "
                    }
                  >
                    Support
                  </NavLink>
                </div>

                {/* Dark Mode */}
                <div className="w-full flex  justify-end gap-5 lg:gap-0">
                  <div className="flex mr-0 ml-2 lg:ml-6">
                    <button className="" onClick={ToggleMode}>
                      {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                      {mode === "light" ? (
                        <FiSun className="" size={30} />
                      ) : "dark" ? (
                        <BsFillCloudSunFill size={30} />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>

                  {/* Login */}

                  <button
                    className="hidden md:block lg:ml-6 lg:mr-5 lg:flex bg-white cursor-pointer p-1.5 lg:px-5 px-5 rounded-3xl shadow-sm hover:shadow-pink-300 text-black"
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
}
