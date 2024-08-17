import React, { useContext, useRef, useState } from "react";
import Context from "../../context/context";

function MobileSignup() {
  const context = useContext(Context);
  // Country Codes
  const countryPhoneCodes = [
    {
      name: "United States",
      code: "+1",
      isoCode: "US",
    },
    {
      name: "United Kingdom",
      code: "+44",
      isoCode: "GB",
    },
    {
      name: "India",
      code: "+91",
      isoCode: "IN",
    },
    {
      name: "Bangladesh",
      code: "+880",
      isoCode: "BD",
    },
    {
      name: "Australia",
      code: "+61",
      isoCode: "AU",
    },
  ];

  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Create refs for each input field
  const inputRefs = useRef([]);

  // Handle the change event and move to the next input
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      // Move to the next input field
      inputRefs.current[index + 1].focus();
    } else if (value.length === 1 && index === inputRefs.current.length - 1) {
      // If on the last input, remove focus (optional)
      inputRefs.current[index].blur();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20  px-5">
        <div className="w-full max-w-md px-8 bg-[#111418] rounded-lg shadow-lg p-6">
          <div className="w-full flex justify-end">
            <button
              type="button"
              class="text-right text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  items-center popup-close"
              onClick={context.LoginPopup}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="#c6c7c7"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  cliprule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close popup</span>
            </button>
          </div>
          <img
            src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
            width={100}
            height={100}
            loading="lazy"
            className="pt-2 m-auto pb-4"
          />
          <h1 className="text-2xl font-semibold text-center text-white mb-4">
            Can we get your number?
          </h1>

          <form>
            <div className="flex mb-4 gap-2">
              <div className="flex-shrink-0">
                <label className="text-white">Country</label>
                <select
                  className="block w-20  border border-gray-300  text-center rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  {countryPhoneCodes.map((country) => (
                    <option value={country.code} key={country.isoCode}>
                      {country.code}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full bg-gray-100 text-center p-2.5 rounded-lg border border-l-0 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  maxLength={10}
                  minLength={10}
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <span className="text-sm px-1 text-white">
              We'll text you a code to verify you're really you. Message and
              data rates may apply.
              <span className="text-blue-500 font-bold">
                What happens if your number changes?
              </span>
            </span>

            <button
              type="submit"
              className={`w-full py-3 mt-3 text-white text-lg font-medium rounded-3xl ${
                phoneNumber.length === 10
                  ? "bg-[#FE4654] hover:opacity-90"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={phoneNumber.length !== 10}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center pt-20 w-full px-5">
        <div className="w-full max-w-md px-8 py-10 bg-[#111418] rounded-lg shadow-md text-white">
          <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
          <p className="text-center mb-4">Code sent to +880-123456789</p>
          <div className="grid grid-cols-5 gap-x-4 my-2 text-black">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="number"
                  min={0}
                  max={9}
                  maxLength={1}
                  className="rounded-lg hide-inputScroll hide-inputscroll bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center text-center"
                  onChange={(e) => handleChange(index, e)}
                />
              ))}
          </div>
          <p className="text-blue-500 text-right cursor-pointer">Resend ?</p>
          <button className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 mt-4">
            Verify
          </button>
        </div>
      </div> */}
    </>
  );
}

export default MobileSignup;
