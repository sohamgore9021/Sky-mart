import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { getCartCount } = useContext(CartContext);
  const cartCount = getCartCount();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    sessionStorage.clear();

    toast.success("Logged out successfully!", {
      autoClose: 2000,
    });

    // Redirect to login page after a short delay
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="flex flex-col sm:flex-row flex-items-center gap-3 sm:gap-6 justify-between p-2 sm:p-3 px-4 sm:px-7 border border-white rounded-2xl overflow-x-auto">
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center text-black font-bold text-xl">
          <i className="ri-flashlight-fill text-2xl"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>
      <div className="flex items-center gap-8">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#C8F400] scale-100" : "text-white"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#C8F400] scale-100" : "text-white"
          }
          to={"/main/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#C8F400] scale-100" : "text-white"
          }
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex items-center gap-8">
        <button
          onClick={() => navigate("/main/cart")}
          type="button"
          className="text-white hover:text-lime-400 transition-colors relative"
        >
          <i className="ri-shopping-cart-2-line text-2xl"></i>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button
          onClick={handleLogout}
          type="button"
          className="text-white hover:text-lime-400 transition-colors"
        >
          <i className="ri-logout-box-r-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
