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
      className="w-full min-h-screen lg:bg-contain bg-fixed"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/16/f7/f1/16f7f147c3a048bd8dde2774315d4b39.png')",
      }}
    >
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
