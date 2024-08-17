import React, { useContext } from "react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Context from "../../context/context";
import {
  Auth,
  fireDB,
  googleProvider,
  signInWithPopup,
} from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../Loader/loader";
import { collection, doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../redux/AuthSlice";

function Login() {
  const context = useContext(Context);
  const dispatch = useDispatch();
  const { AddNewUser, MobileLoginPopup, LoginPopup, loader, Setloader } =
    context;

  const handleGoogleSignUp = async () => {
    Setloader(true);
    try {
      const result = await signInWithPopup(Auth, googleProvider);
      const user = result.user;
      console.log(user);

      // Check if the user already exists in Firestore
      const userRef = collection(fireDB, "Users");
      const userDoc = await getDoc(doc(userRef, user.uid));

      if (!userDoc.exists()) {
        dispatch(AuthActions.Login(user.email));
        localStorage.setItem("User", JSON.stringify(result.user));
        Setloader(false);
        MobileLoginPopup();
        // navigate("/"); // Redirect to home or profile page
      } else {
        // User already exists
        toast.error("User already exists. Please sign in.");
        // await Auth.signOut(); // Sign out the user to clear the state
        console.log("Error");
        Setloader(false);
      }
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    } finally {
      toast.success("hi");
      LoginPopup();
      Setloader(false);
    }
  };

  return (
    <div class="relative p-4 w-screen max-w-md h-full md:h-auto">
      <div class="relative bg-[#111418] rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
          onClick={LoginPopup}
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

        <div class="p-5">
          <h3 class="text-2xl mb-0.5 font-medium"></h3>
          <p class="mb-4 text-sm font-normal text-gray-800"></p>

          <div class="text-center">
            <div class="mb-3 text-3xl font-semibold leading-5 text-white text-center">
              <img
                src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
                width={100}
                height={100}
                loading="lazy"
                className="pt-2 m-auto pb-4"
              />
              <p>Get Started</p>
            </div>
            <p class="mt-2 text-sm leading-4 text-white px-6">
              By tapping Log in or Continue. you agree to our{" "}
              <span className="text-blue-500 font-bold underline">Terms</span>.
              Learn how we process you data in our{" "}
              <span className="text-blue-500 font-bold underline">
                Privacy Policy{" "}
              </span>{" "}
              and{" "}
              <span className="text-blue-500 font-bold underline">
                Cookie Policy
              </span>{" "}
              .
            </p>
          </div>

          {/* Auth Ways */}

          <div class="mt-7 flex flex-col gap-2 px-4">
            <button
              class="text-lg inline-flex h-10 w-full items-center justify-center gap-2 rounded-3xl border border-gray-700  bg-b p-2 hover:bg-gray-800  font-medium text-white  disabled:cursor-not-allowed disabled:opacity-60"
              onClick={handleGoogleSignUp}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                class="h-[18px] w-[18px] "
              />
              Log in with Google
            </button>

            <button class="text-lg inline-flex h-10 w-full items-center justify-center gap-2 rounded-3xl border border-gray-700  bg-b p-2 hover:bg-gray-800 font-medium text-white  disabled:cursor-not-allowed disabled:opacity-60">
              <span class="h-[18px] w-[18px]">
                <BsFacebook className="text-blue-600" />
              </span>
              Log in with GitHub
            </button>

            <button
              class="text-lg inline-flex h-10 w-full items-center justify-center gap-2 rounded-3xl border border-gray-700  bg-b p-2 hover:bg-gray-800  font-medium text-white  disabled:cursor-not-allowed disabled:opacity-60"
              onClick={() => {
                MobileLoginPopup();
                LoginPopup();
              }}
            >
              <span class="h-[18px] w-[18px]">
                <BiPhoneCall className="text-blue-600" />
              </span>
              Log in with phone number
            </button>
          </div>

          <div class="text-center flex justify-center w-full py-5 text-lg font-bold text-white font-serif">
            {!loader && <>Get the app !</>}
            {loader && <Loader />}
          </div>

          {/* Play store Button */}
          <div className="flex justify-center gap-5">
            <div class=" flex justify-center">
              <div class="h-fit flex items-center border w-auto rounded-lg p-2 bg-black text-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  class="w-7 md:w-8"
                  loading="lazy"
                />
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-200">Download on </p>
                  <p class="text-md  "> Google Play</p>
                </div>
              </div>
            </div>
            <div class=" flex justify-center">
              <div class="h-fit flex items-center border w-auto rounded-lg p-2 bg-black text-white">
                <span>
                  <BsApple class="text-4xl" />
                </span>
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-200">Download on </p>
                  <p class="text-md  "> Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
