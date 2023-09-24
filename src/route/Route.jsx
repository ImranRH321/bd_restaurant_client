import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import OurMenuPage from "../pages/OurMenuPage/OurMenuPage";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import MyCarts from "../pages/Dashboard/UsersDashboard/MyCarts/MyCarts";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AdminDashboard/AddItems/AddItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "ourMenuPage", element: <OurMenuPage></OurMenuPage> },
      { path: "ourShop/categoryName/:foodName", element: <OurShop></OurShop> }
      , { path: "login", element: <Login></Login> }
      , { path: "register", element: <Register></Register> }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    , children: [
      { path: "myCart", element: <MyCarts></MyCarts> },
      // Admin
      { path: "allUsers", element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute> },
      { path: "addItem", element: <AdminRoute> <AddItems></AddItems> </AdminRoute> }
    ]
  }
]);
