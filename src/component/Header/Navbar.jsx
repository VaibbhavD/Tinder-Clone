import { Fragment, useContext, useState } from "react";

export default function Navbar() {
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
                  {/* Home */}
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
                      Home
                    </NavLink>
                  </div>
                  {/* Category */}
                  <div className="flow-root -ml-1.5">
                    <select
                      className={`${
                        mode === "dark"
                          ? " font-medium cursor-pointer bg-transparent "
                          : " font-medium text-gray-700 cursor-pointer   "
                      }`}
                      defaultValue=""
                      onChange={HandleChange}
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
                        Categeory
                      </option>
                      <option
                        className={`${
                          mode === "dark"
                            ? "text-xs font-medium  cursor-pointer bg-gray-700"
                            : "text-xs font-medium text-gray-700 cursor-pointer bg-stone-100"
                        }`}
                        onClick={() => console.log("hi")}
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

                  {/* India */}
                  {/* <div className="flow-root">
                    <p className="-m-2 flex gap-2 items-center p-2">
                      <NavLink
                        to={"/handicraft"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium text-pink-500 mr-2 "
                            : "font-medium text-gray-900 "
                        }
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        HandiCrafts
                      </NavLink>
                      <img
                        src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="sr-only">, change currency</span>
                    </p>
                  </div> */}
                  {/* Order */}
                  {isLoggedin && (
                    <div className="flow-root">
                      <NavLink
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium text-pink-500 "
                            : "font-medium text-gray-900 "
                        }
                      >
                        Order
                      </NavLink>
                    </div>
                  )}
                  {/* Admin */}
                  {isAdmin && (
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
                        Admin
                      </NavLink>
                    </div>
                  )}
                  {/* About */}
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
                      About
                    </NavLink>
                  </div>
                  {/* Login */}
                  {/* {!isLoggedin && (
                    <div className="flow-root">
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium text-pink-500 "
                            : "font-medium text-gray-900 "
                        }
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Login
                      </NavLink>
                    </div>
                  )} */}
                  {/* Wishlist */}
                  {isLoggedin && (
                    <div className="flow-root">
                      <NavLink
                        to={"/aboutus"}
                        className={({ isActive }) =>
                          isActive
                            ? " font-medium text-gray-700 border-b-2 border-pink-500"
                            : " font-medium text-gray-900 "
                        }
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {" "}
                        Wishlist
                      </NavLink>
                    </div>
                  )}
                  {/* Profile */}
                  {isLoggedin && (
                    <div className="flow-root">
                      <NavLink
                        to={"/profile"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-medium text-pink-500 "
                            : "font-medium  "
                        }
                      >
                        <span className="text-center">Profile</span>
                      </NavLink>
                    </div>
                  )}
                  {/* Logout */}
                  {isLoggedin && (
                    <div className="flow-root">
                      <NavLink
                        className="-m-2 block p-2 rounded-l-sm rounded-r-lg bg-red-500 text-white font-bold cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                        onClick={LogoutHandler}
                      >
                        Logout
                      </NavLink>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative ">
        <p
          className={`flex h-10 items-center justify-center  px-4 text-sm font-medium  sm:px-6 lg:px-8 ${
            mode === "dark"
              ? "bg-gray-800 text-pink-600"
              : "bg-pink-600 text-white"
          }`}
        >
          Get free delivery on orders over ₹300
        </p>

        <nav
          aria-label="Top"
          className={` px-3  ${
            mode === "dark" ? "bg-gray-700 text-stone-100" : "bg-stone-100"
          }`}
        >
          <div className="w-full">
            <div className="flex h-16 items-center w-full">
              <button
                type="button"
                className="rounded-md bg-gray-300 p-2 text-gray-600 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo E-commerce*/}
              <div className="ml-3 flex lg:ml-6">
                <NavLink to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      <Logo />
                    </h1>
                  </div>
                </NavLink>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {/* Home */}
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                        : "text-sm font-medium text-gray-700"
                    }
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Home
                  </NavLink>
                  {/* Category */}
                  <div className="m-auto ">
                    <select
                      className={`${
                        mode === "dark"
                          ? "text-sm font-medium cursor-pointer bg-gray-700 decoration-clone"
                          : "text-sm font-medium text-gray-700 cursor-pointer  bg-stone-100 "
                      }`}
                      defaultValue=""
                      onChange={HandleChange}
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

                  {/* India */}
                  {/* <div className="hidden lg:ml-6 lg:flex">
                    <NavLink
                      to={"/handmade"}
                      className={({ isActive }) =>
                        isActive
                          ? "group -m-2 flex items-center text-gray-700 p-2 border-b-2 border-pink-500"
                          : "group -m-2 flex items-center p-2 text-gray-700"
                      }
                    >
                      <img
                        src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span
                        className="ml-1 block text-sm font-medium text-center"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        HandiCrafts
                      </span>
                    </NavLink>
                  </div> */}
                  {/* Order */}
                  {isLoggedin && (
                    <NavLink
                      to={"/order"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className={({ isActive }) =>
                        isActive
                          ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                          : "text-sm font-medium text-gray-700"
                      }
                    >
                      Order
                    </NavLink>
                  )}
                  {/* Admin */}
                  {isAdmin && (
                    <NavLink
                      to={"/dashboard"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                          : "text-sm font-medium text-gray-700"
                      }
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </NavLink>
                  )}
                  {/* About Us */}
                  {!isLoggedin && (
                    <NavLink
                      to={"/aboutus"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                          : "text-sm font-medium text-gray-700"
                      }
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      About US
                    </NavLink>
                  )}
                  {/* WishList */}
                  {isLoggedin && (
                    <NavLink
                      to={"/aboutus"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-sm font-medium text-gray-700 border-b-2 border-pink-500"
                          : "text-sm font-medium text-gray-700 "
                      }
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {" "}
                      Wishlist
                    </NavLink>
                  )}
                </div>

                {/* Cart */}

                {isLoggedin && (
                  <div className="ml-4 flow-root lg:ml-6 pr-2 md:pr-0">
                    <NavLink
                      to={"/cart"}
                      // className="group -m-2 flex items-center p-2"
                      className={({ isActive }) =>
                        isActive
                          ? "group -m-2 flex items-center p-2 border-b-2 border-pink-500"
                          : "group -m-2 flex items-center p-2"
                      }
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={`${mode == "dark" ? "#FF0090" : "black"}`}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>

                      <span
                        className="ml-1 text-md font-medium text-gray-700 group-"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {Cart.length}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </NavLink>
                  </div>
                )}

                {/* Dark Mode */}
                <div className="flex mr-0 ml-2 lg:ml-6">
                  <button className="" onClick={toggle}>
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
                {/* Profile */}
                {isLoggedin && (
                  <div className="hidden lg:ml-6 lg:flex">
                    <NavLink
                      to={"/profile"}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center text-gray-700 border-b-4 border-pink-500"
                          : "flex items-center text-gray-700"
                      }
                    >
                      <img
                        className="inline-block w-8 h-8 rounded-full"
                        src={
                          User.user.photoURL
                            ? User.user.photoURL
                            : "https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&h=180"
                        }
                        alt="Profile"
                      />
                    </NavLink>
                  </div>
                )}
                {/* Login */}
                {!isLoggedin && (
                  <div className=" lg:ml-6 lg:-mr-10 -mr-5 ml-3 lg:flex bg-pink-600 p-1.5 px-3 rounded-md shadow-sm hover:shadow-pink-300  text-white">
                    <Link
                      to={"/login"}
                      className={`text-md font-bold cursor-pointer`}
                    >
                      Login
                    </Link>
                  </div>
                )}
                {/* Logout */}
                {isLoggedin && (
                  <div className="hidden lg:ml-6 lg:-mr-10 lg:flex bg-pink-600 p-1 px-3 rounded-md shadow-md hover:shadow-pink-300  text-white">
                    <button
                      type="button"
                      onClick={LogoutHandler}
                      className={`text-md font-bold cursor-pointer`}
                    >
                      Logout
                    </button>
                  </div>
                )}

                {/* Search */}
                <div className="flex lg:ml-6"></div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6"></div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
