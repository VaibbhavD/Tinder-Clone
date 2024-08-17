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
          "url('https://plugins-media.makeupar.com/smb/blog/post/2022-08-05/c414b386-9e1e-41c5-b87e-c930c41f34ed.jpg')",
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
