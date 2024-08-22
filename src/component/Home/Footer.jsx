import React from "react";

const Footer = () => (
  <footer className="bg-black text-white relative pt-1 pb-6 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-center lg:text-left">
        <div className="w-full lg:w-4/12 px-4">
          <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            {["twitter", "facebook-square", "dribbble", "github"].map(
              (platform) => (
                <button
                  key={platform}
                  className={` shadow-lg font-normal h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none mr-2 text-${platform}`}
                  type="button"
                >
                  <i className={`fab fa-${platform}`} aria-hidden="true"></i>
                </button>
              )
            )}
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-sm font-semibold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                {["About Us", "Blog", "Github", "Free Products"].map((link) => (
                  <li key={link}>
                    <a
                      className="hover:text-blue-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-sm font-semibold mb-2">
                Other Resources
              </span>
              <ul className="list-unstyled">
                {[
                  "MIT License",
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Contact Us",
                ].map((link) => (
                  <li key={link}>
                    <a
                      className="hover:text-blue-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-black">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Download our fitness app</h3>
          <p>Stay fit. All day, every day.</p>
          <div className="flex justify-center my-10">
            {[
              {
                src: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
                text: "Google Play Store",
              },
              {
                src: "https://cdn-icons-png.flaticon.com/512/888/888841.png",
                text: "Apple Store",
              },
            ].map(({ src, text }) => (
              <div
                key={text}
                className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2"
              >
                <img src={src} className="w-7 md:w-8" alt={text} />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on</p>
                  <p className="text-sm md:text-base">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2021</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notus JS by
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                Creative Tim
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
