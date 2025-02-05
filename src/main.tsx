import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";

import RegisterPlant from "./pages/RegisterPlant.tsx";
import EditPlant from "./pages/EditPlant.tsx";
import UserConfig from "./pages/UserConfig.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
{/*        <Route path="register-plant" element={<RegisterPlant />} />
        <Route path="edit-plant" element={<EditPlant />} />
        <Route path="user-config" element={<UserConfig />} />*/}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
