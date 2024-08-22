import React, { useContext, Suspense, lazy, useMemo } from "react";
import Context from "../../context/context";
import PageLoader from "../Loader/PageLoader";

// Lazy-load non-critical components
const Hero_Section = lazy(() => import("./Hero_Section"));
const Testimonal = lazy(() => import("../Testimonal/Testimonal"));
const Footer = lazy(() => import("./Footer"));
const Modal = lazy(() => import("../Modal/Modal"));
const Login = lazy(() => import("../Authentication/Login"));
const MobileSignup = lazy(() => import("../Authentication/MobileSignup"));

const Home = () => {
  const context = useContext(Context);
  const {
    PageLoader: isPageLoader,
    isLoginPopup,
    isMobileLoginPopup,
  } = context;

  const backgroundImageStyle = useMemo(
    () => ({
      backgroundImage:
        "url('https://sketchelements.com/wp-content/uploads/2020/08/tinder-app-concept.png')",
      // backgroundSize: "cover",
      // backgroundPosition: "",
    }),
    []
  );

  return (
    <>
      {isPageLoader ? (
        <PageLoader />
      ) : (
        <div
          className="w-full min-h-screen bg-black bg-opacity-50 relative no-scrollbar"
          style={backgroundImageStyle}
        >
          <Suspense fallback={<PageLoader />}>
            <Hero_Section />
            <Testimonal />
            <Footer />
            {isLoginPopup && (
              <Modal isshown={isLoginPopup}>
                <Login />
              </Modal>
            )}
            {isMobileLoginPopup && (
              <Modal isshown={isMobileLoginPopup}>
                <MobileSignup />
              </Modal>
            )}
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Home;
