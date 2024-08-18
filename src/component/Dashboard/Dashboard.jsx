import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdExplore } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import ErrorPage from "./ErrorPage";
import { BiLogOut, BiLogOutCircle } from "react-icons/bi";
import UserCard from "../User/UserCard";

function Dashboard() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isItemOpen, setIsItemOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleNotificationsMenu = () =>
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const closeSideMenu = () => setIsSideMenuOpen(false);

  return (
    <>
      <div
        className={`flex h-screen bg-[#111418]  ${
          isSideMenuOpen ? "overflow-hidden" : ""
        }`}
      >
        {/* Desktop sidebar */}
        <aside className="z-20 flex-shrink-0 hidden w-80 pl-2 overflow-y-auto bg-[#111418]  md:block">
          <div className="text-white">
            <div className="flex p-2 bg-[#111418] ">
              {/* logo  */}
              <div className="flex justify-center items-center">
                <img
                  src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="pt-2"
                />
                <span className="font-bold lg:text-5xl text-3xl">tinder</span>
              </div>
            </div>

            {/* profile image */}
            <div className="flex justify-center mt-10">
              <img
                className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-[#FE4654]"
                src="https://image.flaticon.com/icons/png/512/149/149071.png"
                alt="Avatar"
              />
            </div>
            {/* Search bar */}
            <div className="flex justify-center mt-10">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                <input
                  type="search"
                  id="default-search"
                  class=" w-full p-2 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Friend"
                  required
                />
                <button
                  type="submit"
                  class="text-gray-900 absolute end-2.5 bottom-2.5 "
                >
                  <CgSearch />
                </button>
              </div>
            </div>
            {/* side bar data */}
            <div className="flex-nowrap justify-end w-full mt-6">
              <span
                class="flex items-center px-4 py-2  mt-3 cursor-pointer hover:border-white text-white border-2 border-gray-600 rounded-md "
                href="#"
              >
                <CgProfile />
                <span class="mx-4 font-medium">Profile</span>
              </span>
              <span
                class="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md "
                href="#"
              >
                <MdExplore />
                <span class="mx-4 font-medium">Explore</span>
              </span>
              <span
                class="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md "
                href="#"
              >
                <CiSettings />
                <span class="mx-4 font-medium">Setting</span>
              </span>
              <span
                class="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md "
                href="#"
              >
                <BiLogOut className="text-red-500" />
                <span class="mx-4 font-medium">Logout</span>
              </span>
            </div>
            <div></div>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {isSideMenuOpen && (
          <div
            className="fixed inset-0 z-10 flex items-end bg-[#111418]  bg-opacity-50 sm:items-center sm:justify-center"
            onClick={closeSideMenu}
          />
        )}

        <aside
          className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 overflow-y-auto bg-[#111418]  dark:bg-gray-800 md:hidden transition-transform duration-150 ease-in-out transform ${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="text-white">
            <div className="flex p-2 bg-[#111418] ">
              <div className="flex justify-center items-center">
                <img
                  src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="pt-2"
                />
                <span className="font-bold lg:text-5xl text-3xl">tinder</span>
              </div>
            </div>
            <ul className="mt-6 leading-10">
              <li className="relative px-2 py-1">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-4">DASHBOARD</span>
                </a>
              </li>
              <li className="relative px-2 py-1">
                <div
                  className="inline-flex items-center justify-between w-full text-sm font-semibold text-white hover:text-green-400 cursor-pointer"
                  onClick={() => setIsItemOpen(!isItemOpen)}
                >
                  <span className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      />
                    </svg>
                    <span className="ml-4">ITEM</span>
                  </span>
                  {isItemOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 text-white w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 text-white w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  )}
                </div>
                {isItemOpen && (
                  <div>
                    <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium rounded-md shadow-inner bg-green-400">
                      <li className="px-2 py-1">
                        <a
                          href="#"
                          className="w-full ml-2 text-sm font-semibold text-white hover:text-gray-800"
                        >
                          Item 1
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-[#111418]  md:pt-14">
          <header className="flex items-center justify-between bg-gray-800  text-white">
            <button
              className="text-white focus:outline-none md:hidden"
              aria-label="Toggle sidebar menu"
              onClick={toggleSideMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="md:hidden flex items-center space-x-4">
              <button
                className="relative text-3xl focus:outline-none"
                aria-label="Profile menu"
                onClick={toggleProfileMenu}
              >
                <CgProfile />
              </button>
            </div>
          </header>
          {/* Main Dashboard Data */}
          <main class="">
            <div class="grid mb-4 pb-10  mx-4 rounded-3xl bg-gray-100 border-4 border-green-400 min-h-screen">
              {/* Add Content */}
              <UserCard />
              {/* <div class="grid grid-cols-12 gap-6">
              </div> */}
            </div>
          </main>
          <div className="p-6">{/* Content goes here */}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
