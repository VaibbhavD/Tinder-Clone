import { useState } from "react";
import Context from "./context";

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

  const context = {
    mode: Mode,
    ToggleMode: ToggleMode,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
