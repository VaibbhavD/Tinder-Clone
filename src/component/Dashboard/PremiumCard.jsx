import React from "react";
import Context from "../../context/context";
import { useContext } from "react";

function PremiumCard() {
  const context = useContext(Context);
  return (
    <div class="flex flex-col items-center justify-center p-10  text-gray-700 bg-black border border-gray-500 ">
      <span className="w-full text-right">
        {" "}
        <button
          type="button"
          className=""
          onClick={() => context.SetisPremiumCard(false)}
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
      </span>
      <div className="w-full flex justify-center items-center ">
        <img
          src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
          width={80}
          height={80}
          loading="lazy"
          className="pt-2"
        />
        <span className="font-bold lg:text-5xl text-3xl">Premium</span>
      </div>

      {/* <!-- Component Start --> */}
      <div class="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
        <div class="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
          <div class="flex flex-col items-center p-10 bg-gray-200">
            <span class="font-semibold">Basic</span>
            <div class="flex items-center">
              <span class="text-3xl">$</span>
              <span class="text-5xl font-bold">20</span>
              <span class="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div class="p-10">
            <ul>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Lightsaber</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Robe</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Insurance</span>
              </li>
            </ul>
          </div>
          <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
              Join now
            </button>
          </div>
        </div>

        {/* <!-- Tile 2 --> */}
        <div class="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
          <div class="flex flex-col items-center p-10 bg-gray-200">
            <span class="font-semibold">Premium</span>
            <div class="flex items-center">
              <span class="text-3xl">$</span>
              <span class="text-6xl font-bold">50</span>
              <span class="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div class="p-10">
            <ul>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 italic">Padawan +</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Solo missions</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Utility belt</span>
              </li>
            </ul>
          </div>
          <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
              Join now
            </button>
          </div>
        </div>

        {/* <!-- Tile 3 -- */}
        <div class="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19 mt-8">
          <div class="flex flex-col items-center p-10 bg-gray-200">
            <span class="font-semibold">Advanced</span>
            <div class="flex items-center">
              <span class="text-3xl">$</span>
              <span class="text-5xl font-bold">99</span>
              <span class="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div class="p-10">
            <ul>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 italic">Jedi Knight +</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Sit on council</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Stock options</span>
              </li>
            </ul>
          </div>
          <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumCard;
