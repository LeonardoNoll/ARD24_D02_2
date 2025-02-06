import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { ProductProvider } from "./context/ProductContext.tsx";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import EditPlant from "./pages/EditPlant.tsx";
import UserConfig from "./pages/UserConfig.tsx";
import Products from "./pages/products.tsx";
import RegisterPlant from "./pages/RegisterPlant.tsx";
import Login from "./pages/Login.tsx";
import { HomeLogoff } from "./pages/HomeLogoff.tsx";
import AboutUs from "./pages/AboutUs.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route index element={<HomeLogoff />} />
          <Route path="products/id/edit" element={<EditPlant />} />
          <Route path="about-me" element={<UserConfig />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products/new" element={<RegisterPlant />} />
          <Route
            path="products"
            element={
              <>
                <Header isLogin={true} />
                <Products />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="login"
            element={
              <>
                <Header isLogin={false} />
                <Login />
                <Footer />
              </>
            }
          />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
);
