import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import RegisterPlant from './pages/register-plant.tsx'
import Products from './pages/Products.tsx'
import { ProductProvider } from './context/ProductContext.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
      <Routes>
        <Route index element={<App />} />
{/*        <Route path="register-plant" element={<RegisterPlant />} />
        <Route path="edit-plant" element={<EditPlant />} />
        <Route path="user-config" element={<UserConfig />} />*/}
      <Route path='register-plant' element={<RegisterPlant/>}/>
      <Route path='products' element={
        <><Header isLogin={false} /><Products /><Footer/></>
        }/>
      </Routes>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
);
