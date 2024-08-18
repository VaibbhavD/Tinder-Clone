import React, { useState, useContext } from "react";
import Context from "../../context/context";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const { User, userPhoneNumber, AddNewUser } = useContext(Context); // Get email and phone from context
  const navigate = useNavigate();

  // Use separate state for User email
  const [Useremail, setUserEmail] = useState(User?.email || "");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    image: "",
    birthDate: "",
    gender: "Male",
    relationship: "Short Term",
    email: User?.email || "", // Keep email here for initial population
    phoneNumber: userPhoneNumber,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle email change separately
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value); // Update the email state directly
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("You must agree to the terms and conditions");
      return;
    }

    const newUser = {
      ...formData,
      email: Useremail, // Ensure we use the updated email value
    };

    // Call your addNewUser function here with newUser data
    addNewUser(newUser);
  };

  // Add new user logic
  const addNewUser = (user) => {
    console.log("New user added:", user);
    localStorage.setItem("User", JSON.stringify(user));
    AddNewUser(user);
    navigate("/dashboard");
    // Add logic to store the user data (e.g., API call or Firebase)
  };

  return (
    <div className="w-full h-screen pt-10 bg-[#111418]">
      <button
        className={`p-3 lg:ml-44 duration-200 rounded-full bg-gray-600 text-white absolute top-5 }`}
        onClick={() => navigate(-1)}
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
      <section className="max-w-4xl px-6 py-4 mx-auto bg-[#111418] rounded-md shadow-md">
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
          <div className="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-2">
            {/* Firstname & Lastname */}
            <div className="mt-8">
              <label className="text-white " htmlFor="firstName">
                Firstname
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />

              <div className="mt-4">
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="lastName"
                >
                  LastName
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Upload Image */}
            <div>
              <label className="block text-sm font-medium text-white"></label>
              <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6">
                <div className="flex items-center space-x-6">
                  <div className="shrink-0">
                    <img
                      id="preview_img"
                      className="h-32 w-32 object-cover rounded-full"
                      src={formData.image || "https://via.placeholder.com/150"}
                      alt="Profile photo"
                      width={80}
                      height={80}
                    />
                  </div>
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                      className="block w-full text-sm text-slate-500"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={Useremail}
                disabled={!!User?.email} // Disable email if it's already populated from User context
                onChange={handleEmailChange} // Handle email change separately
                className="block w-full px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={userPhoneNumber}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-400 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Birth date */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="birthDate"
              >
                Birth date
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Relationship */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="relationship"
              >
                Relationship
              </label>
              <select
                id="relationship"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
                <option value="Forever">Forever</option>
              </select>
            </div>
          </div>

          <div className="flex items-center mt-5 text-white">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-4 h-4 rounded"
            />
            <label htmlFor="termsAccepted" className="ms-2 text-sm font-medium">
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>

          <div className="flex justify-end mt-6 mb-11 w-full">
            <button
              type="submit"
              className="px-6 w-full py-3 leading-5 font-bold text-white transition-colors duration-200 transform bg-[#FE4654] rounded-md"
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
