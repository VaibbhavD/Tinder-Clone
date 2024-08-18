import React from "react";
import Context from "../../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const context = useContext(Context);
  const {
    image,
    birthDate,
    firstName,
    phoneNumber,
    lastName,
    gender,
    relationship,
    email,
  } = context.User;

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Friends</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Photos</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img src={image} alt="Profile" />
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              className="text-white py-2 px-4 uppercase rounded bg-orange-500 font-bold"
              onClick={() => navigate("/onboard")}
            >
              Update Profile
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {firstName} {lastName}
          </h1>
        </div>
        <div className="w-full md:w-full flex-grow p-4">
          <div className="flex flex-wrap md:flex-nowrap mt-4 md:gap-4">
            <div className="flex flex-col mb-4 w-full md-full">
              <span className="font-bold">Email:</span>
              <p>{email}</p>
            </div>
            <div className="flex flex-col mb-4 w-full md:w-1/2">
              <span className="font-bold">Phone Number:</span>
              <p>{phoneNumber}</p>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap md:gap-4">
            <div className="flex flex-col mb-4 w-full md:w-1/3">
              <span className="font-bold">Birth Date:</span>
              <p>{birthDate}</p>
            </div>
            <div className="flex flex-col mb-4 w-full md:w-1/3">
              <span className="font-bold">Gender:</span>
              <p>{gender}</p>
            </div>
            <div className="flex flex-col mb-4 w-full md:w-1/3">
              <span className="font-bold">Relationship:</span>
              <p>{relationship}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
