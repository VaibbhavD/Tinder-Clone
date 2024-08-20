import React from "react";
import { CgUser } from "react-icons/cg";

function MatchesPage() {
  return (
    <div className=" w-full mt-10 text-center content-center">
      <div className="flex justify-center text-7xl">
        <CgUser className="text-[#FE4654] animate-pulse " />
      </div>
      <div className="text-2xl text-white font-bold ">Matches</div>
      <div className="text-gray-300 flex justify-center items-center mt-5 ">
        <div className="w-1/2 ">
          Looking to strike up a conversation? When you match with othsers. You
          can send them a messages under "Mathches"
        </div>
      </div>
    </div>
  );
}

export default MatchesPage;
