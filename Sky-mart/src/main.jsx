import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes/AppRoutes.jsx";
import { Authprovider } from "./context/authContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Authprovider>
    <CartProvider>
      <AppRoutes />
      <ToastContainer />
    </CartProvider>
  </Authprovider>,
);
