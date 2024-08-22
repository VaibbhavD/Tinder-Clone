import React from "react";
import { BiLike, BiMessageAdd } from "react-icons/bi";
import { RiEjectFill } from "react-icons/ri";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { IoReload } from "react-icons/io5";
import { HeartIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { StarIcon } from "@heroicons/react/16/solid";
import { BiMessage } from "react-icons/bi";
import { IoFlash } from "react-icons/io5";
import Context from "../../context/context";
import { useContext } from "react";

function UserMenu(props) {
  const context = useContext(Context);
  return (
    <div className="flex justify-center items-center mt-4">
      <span className="rounded-full border border-gray-600 h-16 w-16 flex justify-center items-center ">
        <BiMessage
          className="text-gray-700 hover:text-pink-500 text-3xl cursor-pointer"
          onClick={() => context.SetisPremiumCard(true)}
        />
      </span>
      <span className="rounded-full border border-gray-600 flex justify-center items-center">
        <XMarkIcon
          className="text-gray-700 hover:text-red-600 text-xl h-20 cursor-pointer p-2"
          onClick={props.swipeLeft}
        />
      </span>
      <span className="rounded-full border border-gray-600 h-16 w-16 flex justify-center items-center ">
        <StarIcon
          className="text-gray-700 hover:text-blue-500 text-xl cursor-pointer h-12"
          onClick={() => context.SetisPremiumCard(true)}
        />
      </span>
      <span className="rounded-full border border-gray-600 h-20 w-20 flex justify-center items-center ">
        <HeartIcon
          className="text-gray-700 hover:text-green-500 text-4xl h-16 cursor-pointer p-2"
          onClick={props.swipeRight}
        />
      </span>
      <span
        className="rounded-full border border-gray-600 h-16 w-16 flex justify-center items-center"
        onClick={() => context.SetisPremiumCard(true)}
      >
        <IoFlash className="text-gray-700 hover:text-orange-500 text-4xl cursor-pointer" />
      </span>
    </div>
  );
}

export default UserMenu;
