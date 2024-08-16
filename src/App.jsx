import { ContextProvider } from "./context/contextProvider";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Home />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
