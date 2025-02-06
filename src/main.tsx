import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App/>{/*
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route index element={<HomeLogoff />} />
          <Route path="edit-plant" element={<EditPlant />} />
          <Route path="user-config" element={<UserConfig />} />
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
          />
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
    </BrowserRouter>*/}
  </StrictMode>,
);
