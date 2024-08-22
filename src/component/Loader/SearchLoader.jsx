import React, { useContext } from "react";
import Context from "../../context/context";
function SearchLoader() {
  const context = useContext(Context);

  return (
    <div class="flex justify-center items-center h-screen">
      <div class="relative flex justify-center items-center">
        {/* <!-- Outer Expanding Ring 1 --> */}
        <div class="absolute rounded-full h-12 w-12 border-4 border-[#FE4654]  animate-expand"></div>
        {/* <!-- Outer Expanding Ring 2 --> */}
        <div class="absolute rounded-full h-12 w-12 border-4 border-[#FE4654]  animate-expand-delayed"></div>
        {/* <!-- Inner Ring --> */}
        <div class="absolute rounded-full h-16 w-16 border-2 border-[#FE4654] "></div>
        {/* <!-- User Image --> */}
        <img
          src={context.User.image}
          alt="User"
          class="rounded-full h-16 w-16"
        />
      </div>
    </div>
  );
}

export default SearchLoader;
