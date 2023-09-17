import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import OurMenuPage from "../pages/OurMenuPage/OurMenuPage";
import OurShop from "../pages/OurShop/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "ourMenuPage", element: <OurMenuPage></OurMenuPage> },
      { path: "ourShop/categoryName/:foodName", element: <OurShop></OurShop> }
    ],
  },
]);
