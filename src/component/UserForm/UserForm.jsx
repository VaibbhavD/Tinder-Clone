import React from "react";

function UserForm() {
  return (
    <div className="w-full h-full bg-[#111418]">
      <section class="max-w-4xl px-6 py-4 mx-auto  bg-[#111418] rounded-md shadow-md">
        <div className="flex items-center">
          <img
            src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
            width={70}
            height={70}
            loading="lazy"
            className="pt-2 "
          />
          <p className="text-white text-4xl font-bold">tinder</p>
        </div>
        <form>
          <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2">
            {/* firstname & lastname*/}
            <div>
              <label class="text-white dark:text-gray-200" for="username">
                Firstname
              </label>
              <input
                id="username"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {/* lastname */}
              <label class="text-white dark:text-gray-200" for="username">
                LastName
              </label>
              <input
                id="username"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Upload Image */}
            <div>
              <label class="block text-sm font-medium text-white">Image</label>
              <div class=" w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="flex items-center space-x-6">
                  <div class="shrink-0">
                    <img
                      id="preview_img"
                      class="h-30 w-30 object-cover rounded-full"
                      src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
                      alt="Current profile photo"
                    />
                  </div>
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      onchange="loadFile(event)"
                      class="block w-full text-sm text-slate-500
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100
                      file:mr-4 file:py-2 file:px-4
      "
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* Email */}
            <div>
              <label class="text-white dark:text-gray-200" for="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* Policy */}
            <div className="text-white text-center">
              <p>All Information are Secured</p>
            </div>
            {/* mobile No */}
            <div>
              <label
                class="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Phone Number
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* Date of Birth */}
            <div>
              <label
                class="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Birth date
              </label>
              <input
                id="date"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* Date of Birth */}
            <div className="grid-cols-1">
              <label
                class="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Birth date
              </label>
              <input
                id="date"
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* Gender */}
            <div>
              <label
                class="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Gender
              </label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          {/* Relationship */}
          <div className="mt-2">
            <label
              class="text-white dark:text-gray-200"
              for="passwordConfirmation"
            >
              Relationsip
            </label>
            <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              <option value="Short Term">Short Term</option>
              <option value="Long Term">Long Term</option>
              <option value="Forever">Forever</option>
            </select>
          </div>
          <div class="flex items-center mt-5 text-white">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 rounded "
            />
            <label for="link-checkbox" class="ms-2 text-sm font-medium ">
              I agree with the{" "}
              <a
                href="#"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>

          <div class="flex justify-end mt-6 mb-9  w-full">
            <button class="px-6 w-full py-3 leading-5 font-bold text-white transition-colors duration-200 transform bg-[#FE4654] rounded-md ">
              Next
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UserForm;
