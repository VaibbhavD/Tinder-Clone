import React from "react";
import { BiLike } from "react-icons/bi";
import { RiEjectFill } from "react-icons/ri";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";

function UserMenu(props) {
  return (
    <div className="flex justify-center items-center gap-6">
      <BiLeftArrow
        className="text-white text-4xl cursor-pointer"
        onClick={props.handle}
      />
      <RiEjectFill className="text-red-600 text-4xl cursor-pointer" />
      <BiMessage className="text-blue-500 text-4xl cursor-pointer" />
      <BiLike className="text-green-500 text-4xl cursor-pointer " />
      <BiRightArrow
        className="text-white text-4xl cursor-pointer"
        onClick={props.handle}
      />
    </div>
  );
}

export default UserMenu;
