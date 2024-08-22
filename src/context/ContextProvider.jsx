import { useState } from "react";
import Context from "./context";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

export const ContextProvider = (props) => {
  const localMode = localStorage.getItem("mode");

  const [Mode, SetMode] = useState(localMode || "white");
  const [isLoginPopup, SetisLoginPopup] = useState(false);
  const [isMobileLoginPopup, SetisMobileLoginPopup] = useState(false);
  const [isPremiumCard, SetisPremiumCard] = useState(false);

  // Loader state
  const [loader, Setloader] = useState(false);
  const [PageLoader, SetPageLoader] = useState(false);

  // Dark Mode Toggle
  const ToggleMode = () => {
    if (Mode === "white") {
      SetMode("dark");
      localStorage.setItem("mode", "dark");
      document.body.style.backgroundColor = "rgb(17,24,39)"; // Corrected background color
    } else {
      SetMode("white");
      localStorage.setItem("mode", "white");
      document.body.style.backgroundColor = "White";
    }
  };

  // Login Popup function
  const LoginPopup = () => {
    SetisLoginPopup((prev) => !prev);
  };

  // Mobile Login Popup
  const MobileLoginPopup = () => {
    SetisMobileLoginPopup((prev) => !prev);
  };

  // Get user details from localStorage
  const user = JSON.parse(localStorage.getItem("Users"));
  const phoneUser = JSON.parse(localStorage.getItem("phone"));

  // User State
  const [User, SetUser] = useState(user);
  const [userPhoneNumber, SetuserPhoneNumber] = useState(phoneUser);

  // Add new user to Firestore
  const AddNewUser = async (user) => {
    Setloader(true);
    // Handle special characters in email
    const userRef = doc(fireDB, "Users", user.email); // Corrected document reference
    const profileRef = collection(userRef, "Profile");

    try {
      // Add a new document in the 'Profile' subcollection
      await addDoc(profileRef, { ...user });
      localStorage.setItem("Users", JSON.stringify(user));
      SetUser({ ...user });
      getUserDetails(user.email); // Fetch user details after adding
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      Setloader(false);
    }
  };

  // Get User Details from Firestore
  const getUserDetails = async (Email) => {
    SetPageLoader(true);
    const userDocRef = doc(fireDB, "Users", Email); // Corrected document reference
    const profileRef = collection(userDocRef, "Profile");

    try {
      const querySnap = await getDocs(profileRef);
      console.log("User data fetched:", querySnap);

      let userData = {};
      querySnap.docs.forEach((doc) => {
        userData = {
          id: doc.id,
          email: Email,
          ...doc.data(),
        };
      });
      localStorage.setItem("Users", JSON.stringify(userData));
      SetUser(userData);
      SetPageLoader(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
      SetPageLoader(false);
    }
  };

  const context = {
    mode: Mode,
    loader: loader,
    PageLoader: PageLoader,
    SetPageLoader: SetPageLoader,
    User: User,
    SetUser: SetUser,
    Setloader: Setloader,
    ToggleMode: ToggleMode,
    isLoginPopup: isLoginPopup,
    LoginPopup: LoginPopup,
    isMobileLoginPopup: isMobileLoginPopup,
    MobileLoginPopup: MobileLoginPopup,
    AddNewUser: AddNewUser,
    userPhoneNumber: userPhoneNumber,
    SetuserPhoneNumber: SetuserPhoneNumber,
    getUserDetails: getUserDetails,
    isPremiumCard: isPremiumCard,
    SetisPremiumCard: SetisPremiumCard,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
