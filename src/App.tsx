import { Route, Routes } from "react-router";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import PrivateRoute from "./Components/PrivateRoute.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import EditPlant from "./pages/EditPlant.tsx";
import { HomeLogoff } from "./pages/HomeLogoff.tsx";
import Login from "./pages/Login.tsx";
import Products from "./pages/Products.tsx";
import RegisterPlant from "./pages/RegisterPlant.tsx";
import RegisterUser from "./pages/RegisterUser.tsx";
import UserConfig from "./pages/UserConfig.tsx";
import AboutProduct from "./pages/AboutProduct.tsx";
import { Error404 } from "./pages/Error404.tsx";
import {Error403} from "./pages/Error403.tsx";

function App() {
  return (
    <>
    <Login/>
    </>
  );
}

export default App;
