import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function ErrorPage() {
  return (
    <div className=" w-full bg-white h-screen text-center content-center">
      <div className="flex justify-center text-7xl">
        <CiLocationOn />
      </div>
      <div className="text-5xl text-gray-606">Enable Location</div>
      <div className="text-gray-600 flex justify-center items-center mt-5 ">
        <div className="w-1/2 ">
          Tap Site settings. It's under the "Advanced" section of settings. Tap
          Location. This option is near the top of the page. Tap the switch next
          to "Location" to toggle it on . If it's blue and pointing to the
          right, location services are enabled.
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
