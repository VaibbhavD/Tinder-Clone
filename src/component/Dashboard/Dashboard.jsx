import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { MdExplore } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import ErrorPage from "./ErrorPage";
import { BiLogOut } from "react-icons/bi";
import UserCard from "../User/UserCard";
import UserProfile from "../User/UserProfile";
import { AuthActions } from "../../redux/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Context from "../../context/context";
import { useContext } from "react";
import Loader from "../Loader/loader";
import PageLoader from "../Loader/PageLoader";

function Dashboard() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [locationAccess, setLocationAccess] = useState(false);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationName, setLocationName] = useState("");
  const [isUserProfile, setIsUserProfile] = useState(false);

  const context = useContext(Context);
  const {
    image,
    firstName,
    lastName,
    getUserDetails,
    Setloader,
    loader,
    SetUser,
    PageLoader,
  } = context.User;

  const toggleSideMenu = () => setIsSideMenuOpen((prev) => !prev);
  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);

  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
      );
      const data = await response.json();
      if (data?.address) {
        const { state } = data.address;
        setLocationName(state);
      }
    } catch (error) {
      console.error("Error getting location name:", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationAccess(true);
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("User");
    localStorage.removeItem("phone");
    dispatch(AuthActions.Logout());
    navigate("/");
  };

  return (
    <>
      <div className={`flex h-screen bg-[#111418]`}>
        {/* Desktop sidebar */}
        <aside className="z-20 flex-shrink-0 hidden w-80 pl-2 overflow-y-auto bg-[#111418] md:block">
          <div className="text-white">
            {/* logo */}
            <div className="flex p-2 bg-[#111418]">
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
                src={image}
                alt="Avatar"
                loading="lazy"
              />
            </div>
            <p className="text-center font-bold text-lg">
              {firstName} {lastName}
            </p>
            {/* Search bar */}
            <div className="flex justify-center mt-10">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="w-full p-2 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Friend"
                  required
                />
                <button
                  type="submit"
                  className="text-gray-900 absolute right-2.5 bottom-2.5"
                >
                  <CgSearch />
                </button>
              </div>
            </div>
            {/* Sidebar data */}
            <div className="flex-nowrap justify-end w-full mt-6">
              <span
                onClick={() => setIsUserProfile(true)}
                className="flex items-center px-4 py-2 mt-3 cursor-pointer hover:border-white text-white border-2 border-gray-600 rounded-md"
              >
                <CgProfile />
                <span className="mx-4 font-medium">Profile</span>
              </span>
              <span
                onClick={() => setIsUserProfile(false)}
                className="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md"
              >
                <MdExplore />
                <span className="mx-4 font-medium">Explore</span>
              </span>
              <span className="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md">
                <CiSettings />
                <span className="mx-4 font-medium">Setting</span>
              </span>
              <span
                onClick={logout}
                className="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md"
              >
                <BiLogOut className="text-red-500" />
                <span className="mx-4 font-medium">Logout</span>
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
          <div className="flex justify-center mt-10">
            <img
              className="h-40 w-40 rounded-full sm:block object-cover mr-2 border-4 border-[#FE4654]"
              src={image}
              alt="Avatar"
              loading="lazy"
            />
          </div>
          <p className="text-center font-bold text-lg text-orange-500">
            {firstName} {lastName}
          </p>
          <div className="flex-nowrap justify-end w-full mt-6">
            <span
              onClick={() => setIsUserProfile(true)}
              className="flex items-center px-4 py-2 mt-3 cursor-pointer hover:border-white text-white border-2 border-gray-600 rounded-md"
            >
              <CgProfile />
              <span className="mx-4 font-medium">Profile</span>
            </span>
            <span
              onClick={() => setIsUserProfile(false)}
              className="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md"
            >
              <MdExplore />
              <span className="mx-4 font-medium">Explore</span>
            </span>
            <span className="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md">
              <CiSettings />
              <span className="mx-4 font-medium">Setting</span>
            </span>
            <span
              onClick={logout}
              className="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md"
            >
              <BiLogOut className="text-red-500" />
              <span className="mx-4 font-medium">Logout</span>
            </span>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-[#111418] md:pt-14">
          <header className="flex items-center justify-between bg-[#111418] text-white">
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
                onClick={() => setIsUserProfile(true)}
              >
                <CgProfile />
              </button>
            </div>
          </header>

          {/* Main Dashboard Data */}
          <main className="">
            <div className="grid mb-4 mx-4 rounded-3xl">
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
