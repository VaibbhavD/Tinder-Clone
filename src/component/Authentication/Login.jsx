import React, { useContext, useCallback } from "react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Context from "../../context/context";
import {
  Auth,
  fireDB,
  googleProvider,
  signInWithPopup,
  facebookProvider,
} from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/loader";

function Login() {
  const context = useContext(Context);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    SetUser,
    MobileLoginPopup,
    LoginPopup,
    loader,
    Setloader,
    getUserDetails,
  } = context;

  const handleGoogleSignUp = useCallback(async () => {
    Setloader(true);
    try {
      const result = await signInWithPopup(Auth, googleProvider);
      const user = result.user;
      const userRef = doc(fireDB, "Users", user.email);

      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        SetUser(user);
        MobileLoginPopup();
      } else {
        SetUser(user);
        await getUserDetails(user.email);
        dispatch(AuthActions.Login(user.email));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during Google sign-up:", error);
      toast.error("Failed to sign in with Google. Please try again.");
    } finally {
      LoginPopup();
      Setloader(false);
    }
  }, [
    Setloader,
    SetUser,
    MobileLoginPopup,
    LoginPopup,
    getUserDetails,
    dispatch,
    navigate,
  ]);

  const handleFacebookSignUp = useCallback(async () => {
    Setloader(true);
    try {
      const result = await signInWithPopup(Auth, facebookProvider);
      const user = result.user;
      const userRef = doc(fireDB, "Users", user.email);

      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        SetUser(user);
        MobileLoginPopup();
      } else {
        SetUser(user);
        await getUserDetails(user.email);
        dispatch(AuthActions.Login(user.email));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during Facebook sign-up:", error);
      toast.error("Failed to sign in with Facebook. Please try again.");
    } finally {
      LoginPopup();
      Setloader(false);
    }
  }, [
    Setloader,
    SetUser,
    MobileLoginPopup,
    LoginPopup,
    getUserDetails,
    dispatch,
    navigate,
  ]);

  return (
    <div className="relative p-4 w-screen max-w-md h-full md:h-auto">
      <div className="relative bg-[#111418] rounded-lg shadow">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={LoginPopup}
          aria-label="Close login popup"
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
          <span className="sr-only">Close popup</span>
        </button>

        <div className="p-5">
          <div className="text-center">
            <div className="mb-3 text-3xl font-semibold leading-5 text-white text-center">
              <img
                src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
                width={100}
                height={100}
                loading="lazy"
                className="pt-2 m-auto pb-4"
                alt="Logo"
              />
              <p>Get Started</p>
            </div>
            <p className="mt-2 text-sm leading-4 text-white px-6">
              By tapping Log in or Continue, you agree to our{" "}
              <span className="text-blue-500 font-bold underline">Terms</span>.
              Learn how we process your data in our{" "}
              <span className="text-blue-500 font-bold underline">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-blue-500 font-bold underline">
                Cookie Policy
              </span>{" "}
              .
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-2 px-4">
            <button
              className="text-lg inline-flex h-10 w-full items-center justify-center gap-2 rounded-3xl border border-gray-700 bg-b p-2 hover:bg-gray-800 font-medium text-white"
              onClick={handleGoogleSignUp}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-[18px] w-[18px]"
              />
              Log in with Google
            </button>

            <button
              onClick={handleFacebookSignUp}
              className="text-lg inline-flex h-10 w-full items-center justify-center gap-2 rounded-3xl border border-gray-700 bg-b p-2 hover:bg-gray-800 font-medium text-white"
            >
              <BsFacebook className="text-blue-600 h-[18px] w-[18px]" />
              Log in with Facebook
            </button>

            <button
              className="text-lg inline-flex h-10 w-full items-center justify-center gap-2 rounded-3xl border border-gray-700 bg-b p-2 hover:bg-gray-800 font-medium text-white"
              onClick={() => {
                MobileLoginPopup();
                LoginPopup();
              }}
            >
              <BiPhoneCall className="text-blue-600 h-[18px] w-[18px]" />
              Log in with phone number
            </button>
          </div>

          <div className="text-center flex justify-center w-full py-5 text-lg font-bold text-white font-serif">
            {!loader ? <>Get the app!</> : <Loader />}
          </div>

          <div className="flex justify-center gap-5">
            <div className="flex items-center border w-auto rounded-lg p-2 bg-black text-white">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play"
                loading="lazy"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-md">Google Play</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg p-2 bg-black text-white">
              <BsApple className="text-4xl" />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-md">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
