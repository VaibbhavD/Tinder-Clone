import React, { useEffect, Suspense, lazy } from "react";
import { ContextProvider } from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "./redux/AuthSlice";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Loader from "./component/Loader/loader";

// Lazy load components
const Home = lazy(() => import("./component/Home/Home"));
const UserForm = lazy(() => import("./component/UserForm/UserForm"));
const Dashboard = lazy(() => import("./component/Dashboard/Dashboard"));

function App() {
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedin);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("Users"));
  //   if (user) {
  //     dispatch(AuthActions.Login(user));
  //   }
  // }, [dispatch]);

  return (
    <ContextProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} />
            <Route path="/onboard" element={<UserForm />} />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Home />}
            />
            <Route path="/*" element={isLoggedIn ? <Dashboard /> : <Home />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </Router>
    </ContextProvider>
  );
}

export default App;
