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
  const { mode, ToggleMode } = context;
  return (
    <div className="bg-white sticky top-0 z-50">
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
                      style={{ color: mode === "dark" ? "white" : "" }}
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
                          : " font-medium text-gray-700 cursor-pointer   "
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
                            : "text-xs font-medium text-gray-700 cursor-pointer bg-stone-100"
                        }`}
                        value="cloths"
                      >
                        Mens Wear
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium   cursor-pointer bg-gray-700"
                            : "text-xs font-medium cursor-pointer text-gray-700 bg-stone-100"
                        }`}
                        value="mobiles"
                      >
                        Mobiles
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium  cursor-pointer  bg-gray-700"
                            : "text-xs font-medium cursor-pointer text-gray-700 bg-stone-100"
                        }`}
                        value="furniture"
                      >
                        Home & Furniture
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium  cursor-pointer  bg-gray-700"
                            : "text-xs font-medium cursor-pointer text-gray-700 bg-stone-100"
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
                      style={{ color: mode === "dark" ? "white" : "" }}
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
                      style={{ color: mode === "dark" ? "white" : "" }}
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
      <header className="relative ">
        <nav
          aria-label="Top"
          className={` px-3  ${
            mode === "dark" ? "bg-gray-700 text-stone-100" : "bg-stone-100"
          }`}
        >
          <div>
            <div className="flex h-16 items-center w-full">
              <button
                type="button"
                className="rounded-md bg-gray-300 p-2 text-gray-600 lg:hidden"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
                onClick={() => setOpen(true)}
              ></button>

              {/* Logo E-commerce*/}
              <div className="ml-3 flex lg:ml-6">
                <NavLink to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      logo
                    </h1>
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
                        ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                        : "text-sm font-medium text-gray-700"
                    }
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Products{" "}
                  </NavLink>
                  {/* Learn */}
                  <div className="m-auto ">
                    <select
                      className={`${
                        mode === "dark"
                          ? "text-sm font-medium cursor-pointer bg-gray-700 decoration-clone"
                          : "text-sm font-medium text-gray-700 cursor-pointer  bg-stone-100 "
                      }`}
                      defaultValue=""
                      // onChange={HandleChange}
                    >
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-sm font-medium bg-gray-700 cursor-pointer text-white"
                            : "text-sm font-medium text-gray-700 cursor-pointer bg-stone-100"
                        }`}
                        value=""
                        disabled
                      >
                        Categeory
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-sm font-medium  cursor-pointer bg-gray-700"
                            : "text-sm font-medium text-gray-700 cursor-pointer bg-stone-100"
                        }`}
                        onClick={() => console.log("hi")}
                        value="cloths"
                      >
                        Clothing
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-sm font-medium   cursor-pointer bg-gray-700"
                            : "text-sm font-medium cursor-pointer text-gray-700 bg-stone-100"
                        }`}
                        value="mobiles"
                      >
                        Mobiles
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-sm font-medium  cursor-pointer  bg-gray-700"
                            : "text-sm font-medium cursor-pointer text-gray-700 bg-stone-100"
                        }`}
                        value="furniture"
                      >
                        Furniture
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-sm font-medium  cursor-pointer  bg-gray-700"
                            : "text-sm font-medium cursor-pointer text-gray-700 bg-stone-100"
                        }`}
                        value="electronics"
                      >
                        Electronics
                      </option>
                    </select>
                  </div>

                  {/* Safety */}

                  <NavLink
                    to={"/order"}
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                        : "text-sm font-medium text-gray-700"
                    }
                  >
                    Safety
                  </NavLink>

                  {/* Download */}

                  <NavLink
                    to={"/dashboard"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                        : "text-sm font-medium text-gray-700"
                    }
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Download
                  </NavLink>

                  {/* Support */}

                  <NavLink
                    to={"/aboutus"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                        : "text-sm font-medium text-gray-700"
                    }
                    style={{ color: mode === "dark" ? "white" : "" }}
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

                  <div className=" lg:ml-6 lg:mr-5 lg:flex bg-pink-600 p-1.5 px-3 rounded-md shadow-sm hover:shadow-pink-300  text-white">
                    <Link
                      to={"/login"}
                      className={`text-md font-bold cursor-pointer`}
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
