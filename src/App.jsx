import { ContextProvider } from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import UserForm from "./component/UserForm/UserForm";
import { ToastContainer } from "react-toastify";
import Dashboard from "./component/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedin);

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="/onboard" element={<UserForm />} />
          {isLoggedIn && <Route path="/*" element={<Dashboard />} />}
        </Routes>
        <ToastContainer />
      </Router>
    </ContextProvider>
  );
}

export default App;
