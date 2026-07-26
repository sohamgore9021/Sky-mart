import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mainlayout from '../layout/Mainlayout';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Shop from '../pages/Shop';
import CartPage from '../pages/CartPage';

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "", element: <Login /> },
        { path: "Register", element: <Register /> },
      ],
    },
    {
      path:"/main",
      element:<Mainlayout />,
      children:[
        {
          path:"",
          element:<HomePage />
        },
        {
          path:"shop",
          element:<Shop />
        },
        {
          path:"about",
          element:<About />
        },
        {
          path:"cart",
          element:<CartPage />
        }
      ]

    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
