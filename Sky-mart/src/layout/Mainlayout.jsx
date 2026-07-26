import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="p-3 px-5">
        <Navbar />
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Mainlayout;
