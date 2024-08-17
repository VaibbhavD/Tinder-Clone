import { ContextProvider } from "./context/contextProvider";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
