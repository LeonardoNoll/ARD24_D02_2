import { Route, Routes } from "react-router";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import PrivateRoute from "./Components/PrivateRoute.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import EditPlant from "./pages/EditPlant.tsx";
import { HomeLogoff } from "./pages/HomeLogoff.tsx";
import Login from "./pages/Login.tsx";
import Products from "./pages/products.tsx";
import RegisterPlant from "./pages/RegisterPlant.tsx";
import RegisterUser from "./pages/RegisterUser.tsx";
import UserConfig from "./pages/UserConfig.tsx";
import { Error404 } from "./pages/Error404.tsx";
import {Error403} from "./pages/Error403.tsx";

function App() {
  return (
    <Routes>
      {/* entry page */}
      <Route index element={<HomeLogoff />} />
      <Route path="about-me" element={<UserConfig />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="register" element={<RegisterUser />} />

      <Route element={<PrivateRoute />}>
        <Route path="products/id/edit" element={<EditPlant />} />
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
        >
          {" "}
        </Route>
      </Route>
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
      <Route path="*" element={<Error404/>}/>
      <Route path="/403" element={<Error403/>}/>
    </Routes>
  );
}

export default App;
