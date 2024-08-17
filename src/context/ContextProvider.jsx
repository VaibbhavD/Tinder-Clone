import { useState } from "react";
import Context from "./context";

export const ContextProvider = (props) => {
  const localMode = localStorage.getItem("mode");

  const [Mode, SetMode] = useState(localMode);
  const [isLoginPopup, SetisLoginPopup] = useState(false);
  const [isMobileLoginPopup, SetisMobileLoginPopup] = useState(false);

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

  const LoginPopup = () => {
    SetisLoginPopup((prev) => !prev);
  };

  const MobileLoginPopup = () => {
    SetisMobileLoginPopup((prev) => !prev);
  };

  const context = {
    mode: Mode,
    ToggleMode: ToggleMode,
    isLoginPopup: isLoginPopup,
    LoginPopup: LoginPopup,
    isMobileLoginPopup: isMobileLoginPopup,
    MobileLoginPopup: MobileLoginPopup,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
