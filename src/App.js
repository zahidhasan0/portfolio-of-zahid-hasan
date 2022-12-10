import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
