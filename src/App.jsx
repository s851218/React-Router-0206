import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}

export default App;
