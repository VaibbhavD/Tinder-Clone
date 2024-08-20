import { ContextProvider } from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import UserForm from "./component/UserForm/UserForm";
import { ToastContainer } from "react-toastify";
import Dashboard from "./component/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AuthActions } from "./redux/AuthSlice";
import "./App.css";
import { useEffect } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedin);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) {
      dispatch(AuthActions.Login(user));
    }
  }, [dispatch]);

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} />
          <Route path="/onboard" element={<UserForm />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Home />}
          />
          <Route path="/*" element={isLoggedIn ? <Dashboard /> : <Home />} />
        </Routes>
        <ToastContainer />
      </Router>
    </ContextProvider>
  );
}

export default App;
