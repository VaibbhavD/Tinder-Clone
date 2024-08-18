import { useState } from "react";
import Context from "./context";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

export const ContextProvider = (props) => {
  const localMode = localStorage.getItem("mode");

  const [Mode, SetMode] = useState(localMode);
  const [isLoginPopup, SetisLoginPopup] = useState(false);
  const [isMobileLoginPopup, SetisMobileLoginPopup] = useState(false);

  // Loader
  const [loader, Setloader] = useState(false);

  // Dark Mode Toggle

  const ToggleMode = () => {
    if (Mode === "white") {
      SetMode("dark");
      localStorage.setItem("mode", "dark");
      document.body.style.backgroundColor = "White";
    } else {
      SetMode("white");
      localStorage.setItem("mode", "white");
      document.body.style.backgroundColor = "rcb (17,24,39)";
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
  // get email and phone from local storage
  const user = JSON.parse(localStorage.getItem("User"));
  const phoneUser = JSON.parse(localStorage.getItem("phone"));

  // User Details
  const [User, SetUser] = useState(user);
  // UserEmail
  const [userPhoneNumber, SetuserPhoneNumber] = useState(phoneUser);

  // Add new User
  const AddNewUser = async (user) => {
    Setloader(true);
    const userRef = doc(fireDB, "Users", user.email); // Corrected document reference
    const profileRef = collection(userRef, "Profile");
    try {
      // Add a new document in the 'Profile' subcollection
      await addDoc(profileRef, { ...user });
      SetUser({ ...user });
      getUserDetails();
    } catch (error) {
      console.log(error);
    } finally {
      Setloader(false);
    }
  };

  // Get User Data from database
  const getUserDetails = async () => {
    const Email = User.email;

    const userDocRef = doc(fireDB, "Users", Email); // Corrected document reference
    const profileRef = collection(userDocRef, "Profile");
    try {
      const querySnap = await getDocs(profileRef);
      console.log(querySnap);

      let cartItems = {};
      querySnap.docs.forEach((doc) => {
        cartItems = {
          id: doc.id,
          email: Email,
          ...doc.data(),
        };
      });

      console.log(cartItems);
      SetUser(cartItems);
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    mode: Mode,
    loader: loader,
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
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
