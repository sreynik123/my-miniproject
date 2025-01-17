import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router";

import MainLayout from "./Layouts/MainLayout.jsx";
import People from "./page/People.jsx";
import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx"
import ContectUs from "./page/ContectUs.jsx";
import Register from "./page/Register.jsx";
import AboutUs from "./page/AboutUs.jsx";
import MovieDetail from "./page/MovieDetail.jsx";
import LogIns from "./page/LogIns.jsx";
import { Provider } from "react-redux";
import { store } from "./page/store.js";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/people",
        element: <People/>,
      },
      {
          path:"/Login",
          element:<Login/>
      },
      {
        path :"/ContectUs",
        element:<ContectUs/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Register",
        element:<Register/>
      },
      {
        path:"/AboutUs",
        element:<AboutUs/>
      },
      {
        path:"/MovieDetail",
        element:<MovieDetail/>
      },
      {
        path: "/logins",
        element: <LogIns/>
      }
      


    ],
  errorElement:<Error/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
