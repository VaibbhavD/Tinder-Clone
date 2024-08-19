import React, { useContext } from "react";
import Hero_Section from "./Hero_Section";
import Testimonal from "../Testimonal/Testimonal";
import Footer from "./Footer";
import Modal from "../Modal/Modal";
import Login from "../Authentication/Login";
import MobileSignup from "../Authentication/MobileSignup";
import Context from "../../context/context";

function Home() {
  const context = useContext(Context);
  return (
    <div
      className="w-full min-h-screen lg:bg-contain bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://sketchelements.com/wp-content/uploads/2020/08/tinder-app-concept.png')",
        // Add vintage effect
      }}
    >
      {/* Pseudo-element for vignette effect */}
      <div
        className="absolute inset-0 bg-black opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, transparent 60%, black 100%)",
        }}
      ></div>
      <Hero_Section />
      <Testimonal />
      <Footer />
      <Modal isshown={context.isLoginPopup}>
        <Login />
      </Modal>
      <Modal isshown={context.isMobileLoginPopup}>
        <MobileSignup />
      </Modal>
    </div>
  );
}

export default Home;
