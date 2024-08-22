import React, { useContext, useRef, useState, useCallback } from "react";
import Context from "../../context/context";
import { useNavigate } from "react-router-dom";
import { AuthActions } from "../../redux/AuthSlice";
import { useDispatch } from "react-redux";

const countryPhoneCodes = [
  { name: "United States", code: "+1", isoCode: "US" },
  { name: "United Kingdom", code: "+44", isoCode: "GB" },
  { name: "India", code: "+91", isoCode: "IN" },
  { name: "Bangladesh", code: "+880", isoCode: "BD" },
  { name: "Australia", code: "+61", isoCode: "AU" },
];

function MobileSignup() {
  const context = useContext(Context);
  const [isSendOtp, setIsSendOtp] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(""); // OTP state
  const [userOtp, setUserOtp] = useState(""); // User input OTP

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  const generateOtp = useCallback(() => {
    const generatedOtp = Math.floor(10000 + Math.random() * 90000).toString();
    setOtp(generatedOtp);
    alert(`Generated OTP: ${generatedOtp}`);
  }, []);

  const handleChange = useCallback((index, event) => {
    const value = event.target.value;
    setUserOtp((prev) => {
      const newOtp = prev.split("");
      newOtp[index] = value;
      return newOtp.join("");
    });
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }, []);

  const handleSendOtp = useCallback(
    (e) => {
      e.preventDefault();
      setIsSendOtp(true);
      generateOtp();
    },
    [generateOtp]
  );

  const handleVerifyOtp = useCallback(() => {
    if (otp === userOtp) {
      dispatch(AuthActions.Login(otp));
      context.SetuserPhoneNumber(phoneNumber);
      localStorage.setItem("phone", JSON.stringify(phoneNumber));
      navigate("/onboard");
      alert("OTP Verified Successfully!");
    } else {
      alert("Invalid OTP, please try again.");
    }
  }, [otp, userOtp, phoneNumber, dispatch, context, navigate]);

  return (
    <>
      {!isSendOtp ? (
        <div className="flex flex-col items-center justify-center pt-20 px-5">
          <div className="w-full max-w-md px-8 bg-[#111418] rounded-lg shadow-lg p-6">
            <div className="w-full flex justify-end">
              <button
                type="button"
                className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 items-center"
                onClick={context.MobileLoginPopup}
                aria-label="Close popup"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="#c6c7c7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <h1 className="text-2xl font-semibold text-center text-white mb-4">
              Can we get your number?
            </h1>
            <form onSubmit={handleSendOtp}>
              <div className="flex mb-4 gap-2">
                <div className="flex-shrink-0">
                  <label className="text-white">Country</label>
                  <select
                    className="block w-20 border border-gray-300 text-center rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
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
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <span className="text-sm px-1 text-white">
                We'll text you a code to verify you're really you. Message and
                data rates may apply.
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
      ) : (
        <div className="flex flex-col items-center justify-center pt-20 w-full px-5">
          <div className="w-full max-w-md px-8 py-10 bg-[#111418] rounded-lg shadow-md text-white">
            <h1 className="text-2xl font-semibold text-center mb-6">
              Enter OTP
            </h1>
            <p className="text-center mb-4">
              Code sent to {`${countryCode}-${phoneNumber}`}
            </p>
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
                    className="rounded-lg bg-gray-100 w-14 aspect-square flex items-center justify-center text-center"
                    onChange={(e) => handleChange(index, e)}
                    aria-label={`OTP digit ${index + 1}`}
                  />
                ))}
            </div>
            <p
              onClick={generateOtp}
              className="text-blue-500 text-right cursor-pointer"
            >
              Resend?
            </p>
            <button
              onClick={handleVerifyOtp}
              className="w-full px-4 py-2 text-lg font-medium text-white bg-[#FE4654] rounded-md hover:bg-blue-700 mt-4"
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileSignup;
