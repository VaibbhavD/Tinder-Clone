import { useState } from "react";
import { context } from "./context";

export const ContextProvider = (props) => {
  const localMode = localStorage.getItem("mode");

  const [Mode, SetMode] = useState(localMode);

  const ToggleMode = () => {
    if (Mode === "white") {
      SetMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      SetMode("white");
      localStorage.setItem("mode", "white");
    }
  };
};
