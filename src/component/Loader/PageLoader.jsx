import React from "react";
import logo from "./logo.png";

function PageLoader() {
  return (
    <div className="w-screen h-screen bg-[#FE7256]">
      <div className="flex h-full justify-center content-center items-center">
        <img
          src={logo}
          width={80}
          height={80}
          loading="lazy"
          className="animate-pulse"
        />
      </div>
    </div>
  );
}

export default PageLoader;
