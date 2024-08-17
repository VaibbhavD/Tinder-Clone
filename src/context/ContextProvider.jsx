import { useState } from "react";
import Context from "./context";

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

  // User Details
  const [User, SetUser] = useState({
    firstname: null,
    lastname: null,
    imageUrl: null,
    email: null,
    phoneNumber: null,
    DOB: null,
    gender: null,
    relationship: null,
  });
  // UserEmail
  const emailuser = JSON.parse(localStorage.getItem("User"));

  const [userEmail, SetuserEmail] = useState(emailuser);

  // Add new User
  const AddNewUser = async (user) => {
    Setloader(true);
    console.log(user.email);
    const dbref = doc(fireDB, "users", user.email);
    const profileref = collection(dbref, "Profile");
    try {
      await addDoc(profileref, { ...user });
      SetuserEmail({ user: { ...user } });
      getUserDetails();
      Setloader(false);
    } catch (error) {
      console.log(error);
      Setloader(false);
    }
  };

  // Get User Data from database
  const getUserDetails = async () => {
    const Email = userEmail.user.email;

    const userDocRef = doc(fireDB, "users", Email);

    const Profileref = collection(userDocRef, "Profile");
    try {
      const querysnap = await getDocs(Profileref);
      console.log(querysnap);
      let cartitems = {};
      querysnap.docs.map(
        (doc) =>
          (cartitems = {
            id: doc.id,
            email: User.user.email,
            ...doc.data(),
          })
      );
      console.log(cartitems);
      SetUser(cartitems);
    } catch (error) {
      // toast.error(error.message);
      console.log(error);
    }
  };

  const context = {
    mode: Mode,
    loader: loader,
    Setloader: Setloader,
    ToggleMode: ToggleMode,
    isLoginPopup: isLoginPopup,
    LoginPopup: LoginPopup,
    isMobileLoginPopup: isMobileLoginPopup,
    MobileLoginPopup: MobileLoginPopup,
    AddNewUser: AddNewUser,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
