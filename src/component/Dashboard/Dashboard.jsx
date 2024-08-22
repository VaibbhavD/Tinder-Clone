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
import MessagePage from "./MessagePage";
import MatchesPage from "./MatchesPage";
import UserMenu from "./UserMenu";
import Modal from "../Modal/Modal";
import PremiumCard from "./PremiumCard";
import { BiMessage } from "react-icons/bi";
import SearchLoader from "../Loader/SearchLoader";

function Dashboard() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [locationAccess, setLocationAccess] = useState(false);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationName, setLocationName] = useState("");
  const [isUserProfile, setIsUserProfile] = useState(false);
  const [isMessages, SetisMessages] = useState(false);
  const [isMatches, SetisMatches] = useState(true);
  const [isSearchLoader, SetisSearchLoader] = useState(false);

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
          SetisSearchLoader(true);
          setTimeout(() => {
            SetisSearchLoader(false);
          }, 5000);
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
        <aside className="z-20 no-scrollbar flex-shrink-0 hidden w-96 border-r border-gray-500  overflow-y-auto bg-[#111418] md:block">
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
                onClick={() => (setIsUserProfile(false), SetisMessages(false))}
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
            {isMatches && !isSearchLoader && <MatchesPage />}
            {isMessages && !isSearchLoader && <MessagePage />}
            {isSearchLoader && (
              <div className="w-full h-96 flex justify-center items-center">
                <div class="border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-[#FE4654]" />
              </div>
            )}
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

        {/* Main content */}
        <div className="flex-1 overflow-y-auto bg-[#111418] md:pt-6">
          {/* Main Dashboard Data */}
          <main className="max-h-screen">
            <div className="grid mx-4 overflow-y-auto rounded-3xl">
              {locationAccess &&
                !isUserProfile &&
                !isMessages &&
                !isSearchLoader && <UserCard location={locationName} />}
              {isSearchLoader && <SearchLoader />}
              {!locationAccess && !isUserProfile && <ErrorPage />}
              {isUserProfile && <UserProfile />}
              {isMessages && <MessagePage />}
              <Modal isshown={context.isPremiumCard}>{<PremiumCard />}</Modal>
            </div>
            <header className="md:hidden absolute bottom-0 w-full flex py-2 items-center justify-between bg-gray-700 text-white px-3">
              <div className="w-full flex justify-between items-center gap-5">
                <span
                  className="rounded-full p-1 bg-opacity-65 cursor-pointer"
                  onClick={() => (
                    setIsUserProfile(false), SetisMessages(false)
                  )}
                  title="Explore"
                >
                  <MdExplore className="text-3xl hover:text-orange-500" />
                </span>

                <span
                  className="rounded-full  p-1 bg-opacity-65 cursor-pointer"
                  title="Setting"
                >
                  <BiMessage
                    className="text-3xl hover:text-orange-500"
                    onClick={() => (
                      setIsUserProfile(false), SetisMessages(true)
                    )}
                  />
                </span>
                <span
                  className="rounded-full  p-1 bg-opacity-65 cursor-pointer"
                  onClick={() => (setIsUserProfile(true), SetisMessages(false))}
                  title="Profile"
                >
                  <CgProfile className="text-3xl hover:text-orange-500" />
                </span>
                <span
                  className="rounded-full  p-1 bg-opacity-65 cursor-pointer"
                  title="Setting"
                >
                  <CiSettings className="text-3xl hover:text-orange-500" />
                </span>
              </div>
            </header>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
