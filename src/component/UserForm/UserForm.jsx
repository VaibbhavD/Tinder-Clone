import React, { useState, useContext } from "react";
import Context from "../../context/context";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const { User, userPhoneNumber, AddNewUser } = useContext(Context); // Get email and phone from context
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    image: "",
    birthDate: "",
    gender: "Male",
    relationship: "Short Term",
    email: User.email,
    phoneNumber: userPhoneNumber,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("You must agree to the terms and conditions");
      return;
    }

    const newUser = {
      ...formData,
    };

    // Call your addNewUser function here with newUser data
    addNewUser(newUser);
  };

  const addNewUser = (user) => {
    console.log("New user added:", user);
    AddNewUser(user);
    navigate("/dashboard");
    // Add logic to store the user data (e.g., API call or Firebase)
  };

  return (
    <div className="w-full h-screen pt-10 bg-[#111418]">
      <button
        className={`p-3 lg:ml-44 duration-200 rounded-full bg-gray-600 text-white absolute top-5 }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hover:scale-110 font-bold "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <section class="max-w-4xl px-6 py-4 mx-auto bg-[#111418] rounded-md shadow-md">
        <div className="flex items-center">
          <img
            src="https://pnghq.com/wp-content/uploads/tinder-logo-png-free-png-images-download-20137-2048x1152.png"
            width={80}
            height={80}
            loading="lazy"
            className="pt-2"
          />
          <p className="text-white text-5xl font-bold">tinder</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2">
            {/* Firstname & Lastname */}
            <div className="mt-8">
              <label class="text-white " htmlFor="firstName">
                Firstname
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />

              <div className="mt-4">
                {" "}
                <label class="text-white dark:text-gray-200" htmlFor="lastName">
                  LastName
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Upload Image */}
            <div>
              <label class="block text-sm font-medium text-white"></label>
              <div class="w-full mt-1 flex justify-center px-6 pt-5 pb-6">
                <div class="flex items-center space-x-6">
                  <div class="shrink-0">
                    <img
                      id="preview_img"
                      class="h-32 w-32 object-cover rounded-full"
                      src={formData.image || "https://via.placeholder.com/150"}
                      alt="Profile photo"
                      width={80}
                      height={80}
                    />
                  </div>
                  <label class="block">
                    <span class="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                      class="block w-full text-sm text-slate-500"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Email - From Context */}
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={User.email}
                disabled
                class="block w-full px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Phone - From Context */}
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={userPhoneNumber}
                disabled
                class="block w-full px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Birth date */}
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="birthDate">
                Birth date
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Gender */}
            <div>
              <label class="text-white dark:text-gray-200" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Relationship */}
            <div>
              <label
                class="text-white dark:text-gray-200"
                htmlFor="relationship"
              >
                Relationship
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
                <option value="Forever">Forever</option>
              </select>
            </div>
          </div>

          <div class="flex items-center mt-5 text-white">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
              class="w-4 h-4 rounded"
            />
            <label htmlFor="termsAccepted" class="ms-2 text-sm font-medium">
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

          <div class="flex justify-end mt-6 mb-11 w-full">
            <button
              type="submit"
              class="px-6 w-full py-3 leading-5 font-bold text-white transition-colors duration-200 transform bg-[#FE4654] rounded-md"
            >
              Next
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UserForm;
