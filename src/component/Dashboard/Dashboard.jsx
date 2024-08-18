import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdExplore } from "react-icons/md";
import { CgSearch } from "react-icons/cg";

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

            {/* side bar menu */}
            <div className="flex justify-end gap-4 w-full mb-4">
              <span
                className="font-bold text-2xl cursor-pointer pt-2 text-center"
                title="Search"
              >
                <CgSearch />
              </span>
              <span
                className="font-bold text-2xl cursor-pointer pt-2 text-center"
                title="Explore"
              >
                <MdExplore />
              </span>
              <span
                className="font-bold text-2xl cursor-pointer pt-2 text-center"
                title="Profile"
              >
                <CgProfile />
              </span>
            </div>

            {/* profile image */}
            <div className="flex justify-center">
              <img
                className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
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
            <div class="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
              <div class="grid grid-cols-12 gap-6">
                <div class="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                  <div class="col-span-12 mt-8">
                    <div class="flex items-center h-10 intro-y">
                      <h2 class="mr-5 text-lg font-medium truncate">
                        Dashboard
                      </h2>
                    </div>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                      <a
                        class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div class="p-5">
                          <div class="flex justify-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-7 w-7 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              />
                            </svg>
                            <div class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span class="flex items-center">30%</span>
                            </div>
                          </div>
                          <div class="ml-2 w-full flex-1">
                            <div>
                              <div class="mt-3 text-3xl font-bold leading-8">
                                4.510
                              </div>

                              <div class="mt-1 text-base text-gray-600">
                                Item Sales
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div class="p-5">
                          <div class="flex justify-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-7 w-7 text-yellow-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span class="flex items-center">30%</span>
                            </div>
                          </div>
                          <div class="ml-2 w-full flex-1">
                            <div>
                              <div class="mt-3 text-3xl font-bold leading-8">
                                4.510
                              </div>

                              <div class="mt-1 text-base text-gray-600">
                                Item Sales
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div class="p-5">
                          <div class="flex justify-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-7 w-7 text-pink-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                              />
                            </svg>
                            <div class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span class="flex items-center">30%</span>
                            </div>
                          </div>
                          <div class="ml-2 w-full flex-1">
                            <div>
                              <div class="mt-3 text-3xl font-bold leading-8">
                                4.510
                              </div>

                              <div class="mt-1 text-base text-gray-600">
                                Item Sales
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div class="p-5">
                          <div class="flex justify-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-7 w-7 text-green-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                              />
                            </svg>
                            <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span class="flex items-center">30%</span>
                            </div>
                          </div>
                          <div class="ml-2 w-full flex-1">
                            <div>
                              <div class="mt-3 text-3xl font-bold leading-8">
                                4.510
                              </div>

                              <div class="mt-1 text-base text-gray-600">
                                Item Sales
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-span-12 mt-5">
                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-2">
                      <div class="bg-white shadow-lg p-4" id="chartline"></div>
                      <div class="bg-white shadow-lg" id="chartpie"></div>
                    </div>
                  </div>
                  <div class="col-span-12 mt-5">
                    <div class="grid gap-2 grid-cols-1 lg:grid-cols-1">
                      <div class="bg-white p-4 shadow-lg rounded-lg">
                        <h1 class="font-bold text-base">Table</h1>
                        <div class="mt-4">
                          <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto">
                              <div class="py-2 align-middle inline-block min-w-full">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                  <table class="min-w-full divide-y divide-gray-200">
                                    <thead>
                                      <tr>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                          <div class="flex cursor-pointer">
                                            <span class="mr-2">
                                              PRODUCT NAME
                                            </span>
                                          </div>
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                          <div class="flex cursor-pointer">
                                            <span class="mr-2">Stock</span>
                                          </div>
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                          <div class="flex cursor-pointer">
                                            <span class="mr-2">STATUS</span>
                                          </div>
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                          <div class="flex cursor-pointer">
                                            <span class="mr-2">ACTION</span>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                      <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                          <p>Apple MacBook Pro 13</p>
                                          <p class="text-xs text-gray-400">
                                            PC & Laptop
                                          </p>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                          <p>77</p>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                          <div class="flex text-green-500">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              class="w-5 h-5 mr-1"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                              />
                                            </svg>
                                            <p>Active</p>
                                          </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                          <div class="flex space-x-4">
                                            <a
                                              href="#"
                                              class="text-blue-500 hover:text-blue-600"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                />
                                              </svg>
                                              <p>Edit</p>
                                            </a>
                                            <a
                                              href="#"
                                              class="text-red-500 hover:text-red-600"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-5 h-5 mr-1 ml-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                              >
                                                <path
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  stroke-width="2"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                />
                                              </svg>
                                              <p>Delete</p>
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="p-6">{/* Content goes here */}</div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
