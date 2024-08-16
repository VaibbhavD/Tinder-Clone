import { ContextProvider } from "./context/contextProvider";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
