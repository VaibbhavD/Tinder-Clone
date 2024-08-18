import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { MdExplore } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import ErrorPage from "./ErrorPage";
import { BiLogOut } from "react-icons/bi";
import UserCard from "../User/UserCard";
import UserProfile from "../User/UserProfile";

function Dashboard() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [locationAccess, setLocationAccess] = useState(false);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationName, setLocationName] = useState("");
  const [isUserProfile, setisUserProfile] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  // Function to get reverse geocode from coordinates
  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
      );
      const data = await response.json();
      if (data && data.address) {
        const { city, state, country } = data.address;
        setLocationName(state);
      }
    } catch (error) {
      console.error("Error getting location name:", error);
    }
  };

  // Get user's current location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationAccess(true);
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Fetch location name using reverse geocoding
          getLocationName(latitude, longitude);
        },
        (error) => {
          console.error("Location access denied:", error);
          setLocationAccess(false);
        }
      );
    } else {
      setLocationAccess(false);
    }
  }, []);

  return (
    <>
      <div className={`flex h-screen bg-[#111418]`}>
        {/* Desktop sidebar */}
        <aside className="z-20 flex-shrink-0 hidden w-80 pl-2 overflow-y-auto bg-[#111418] md:block">
          <div className="text-white">
            <div className="flex p-2 bg-[#111418]">
              {/* logo */}
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
                <input
                  type="search"
                  id="default-search"
                  class="w-full p-2 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Friend"
                  required
                />
                <button
                  type="submit"
                  class="text-gray-900 absolute end-2.5 bottom-2.5"
                >
                  <CgSearch />
                </button>
              </div>
            </div>

            {/* Sidebar data */}
            <div className="flex-nowrap justify-end w-full mt-6">
              <span
                onClick={() => setisUserProfile(true)}
                class="flex items-center px-4 py-2 mt-3 cursor-pointer hover:border-white text-white border-2 border-gray-600 rounded-md"
              >
                <CgProfile />
                <span class="mx-4 font-medium">Profile</span>
              </span>
              <span
                onClick={() => setisUserProfile(false)}
                class="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md"
              >
                <MdExplore />
                <span class="mx-4 font-medium">Explore</span>
              </span>
              <span class="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md">
                <CiSettings />
                <span class="mx-4 font-medium">Setting</span>
              </span>
              <span class="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md">
                <BiLogOut className="text-red-500" />
                <span class="mx-4 font-medium">Logout</span>
              </span>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {isSideMenuOpen && (
          <div
            className="fixed inset-0 z-10 flex items-end bg-[#111418] bg-opacity-50 sm:items-center sm:justify-center"
            onClick={() => setIsSideMenuOpen(false)}
          />
        )}

        <aside
          className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 overflow-y-auto bg-[#111418] dark:bg-gray-800 md:hidden transition-transform duration-150 ease-in-out transform ${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Sidebar content */}
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-[#111418] md:pt-14">
          <header className="flex items-center justify-between bg-gray-800 text-white">
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
          <main className="">
            <div className="grid mb-4 mx-4 rounded-3xl ">
              {/* Render ErrorPage if location services are off, otherwise render UserCard */}
              {locationAccess && !isUserProfile && (
                <UserCard location={locationName} />
              )}
              {!locationAccess && !isUserProfile && <ErrorPage />}
              {isUserProfile && <UserProfile />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
