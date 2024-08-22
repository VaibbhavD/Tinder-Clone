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
import MessagePage from "./MessagePage";
import MatchesPage from "./MatchesPage";
import UserMenu from "./UserMenu";
import Modal from "../Modal/Modal";
import PremiumCard from "./PremiumCard";

function Dashboard() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [locationAccess, setLocationAccess] = useState(false);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationName, setLocationName] = useState("");
  const [isUserProfile, setIsUserProfile] = useState(false);
  const [isMessages, SetisMessages] = useState(false);
  const [isMatches, SetisMatches] = useState(true);

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

  const [UserImage, SetUserImage] = useState(context.User.image);
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

  const handleMatches = () => {
    SetisMatches(true);
    SetisMessages(false);
  };

  const handleMessages = () => {
    SetisMessages(true);
    SetisMatches(false);
  };

  return (
    <>
      <div className={`flex h-screen bg-[#111418]`}>
        {/* Desktop sidebar */}
        <aside className="z-20 flex-shrink-0 hidden w-96 border-r border-gray-500  overflow-y-auto bg-[#111418] md:block">
          {/* first row */}
          <div className="text-white flex  py-6 bg-black px-4">
            {/* profile image */}
            <div className="flex justify-center items-center">
              <img
                className="hidden h-10 w-10 rounded-full sm:block object-cover mr-2"
                src={image}
                alt="Avatar"
                loading="lazy"
              />
              <p className="text-center text-md font-bold">{firstName}</p>
            </div>
            {/* menues */}
            <div className="flex justify-end items-center w-full gap-6">
              <span
                className="rounded-full bg-black p-1 bg-opacity-65 cursor-pointer"
                onClick={() => setIsUserProfile(true)}
                title="Profile"
              >
                <CgProfile className="text-2xl hover:text-orange-500" />
              </span>
              <span
                className="rounded-full bg-black p-1 bg-opacity-65 cursor-pointer"
                onClick={() => setIsUserProfile(false)}
                title="Explore"
              >
                <MdExplore className="text-2xl hover:text-orange-500" />
              </span>
              <span
                className="rounded-full bg-black p-1 bg-opacity-65 cursor-pointer"
                title="Setting"
              >
                <CiSettings className="text-2xl hover:text-orange-500" />
              </span>
            </div>
          </div>
          {/* second row */}
          <div className="text-white flex gap-4 p-2 px-6 font-bold">
            <span
              className={`cursor-pointer ${
                isMatches
                  ? "underline underline-offset-4 decoration-[#FE4654] decoration-2"
                  : ""
              }`}
              onClick={handleMatches}
            >
              Matches
            </span>
            <span
              className={`cursor-pointer ${
                isMessages
                  ? "underline underline-offset-4 decoration-[#FE4654] decoration-2"
                  : ""
              }`}
              onClick={handleMessages}
            >
              Messages
            </span>
          </div>

          {/* Sidebar data */}
          <div>
            {/* {isMatches && <MatchesPage />}
            {isMessages && <MessagePage />} */}
            <div className="w-full h-96 flex justify-center items-center">
              <div class="border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-[#FE4654]" />
            </div>
          </div>
          {isUserProfile && (
            <div className="w-full mt-60">
              <span
                onClick={logout}
                className="flex items-center px-4 py-2 mt-3 text-white border-2 cursor-pointer hover:border-white border-gray-600 rounded-md"
              >
                <BiLogOut className="text-red-500" />
                <span className="mx-4 font-medium">Logout</span>
              </span>
            </div>
          )}
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
              src={UserImage}
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
        <div className="flex-1 overflow-y-auto bg-[#111418] md:pt-6">
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
            <div className="grid mx-4  rounded-3xl">
              {locationAccess && !isUserProfile && (
                <UserCard location={locationName} />
              )}
              {!locationAccess && !isUserProfile && <ErrorPage />}
              {isUserProfile && <UserProfile />}
              <Modal isshown={context.isPremiumCard}>{<PremiumCard />}</Modal>
            </div>
            <div className="text-white"></div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
