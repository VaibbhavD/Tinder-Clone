import React from "react";
import { BiMessage } from "react-icons/bi";

function MessagePage() {
  return (
    <div className=" w-full mt-10 text-center content-center">
      <div className="flex justify-center text-7xl">
        <BiMessage className="text-[#FE4654]" />
      </div>
      <div className="text-2xl text-white font-bold ">Say Hello</div>
      <div className="text-gray-300 flex justify-center items-center mt-5 ">
        <div className="w-1/2 ">
          Looking to strike up a conversation? When you match with othsers. You
          can send them a messages under "Mathches"
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
