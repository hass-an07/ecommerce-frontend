import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Single_product from "./Pages/Single_product";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import UserRegister from "./Pages/UserRegister";
import UserLogin from "./Pages/UserLogin";
import { useSelector } from "react-redux";

const App = () => {
  const [ISuserToken, setUserToken] = useState(null);
  const { userToken } = useSelector((state) => state.userToken);

  useEffect(() => {
    setUserToken(userToken);
    console.log(ISuserToken);
  }, [userToken]); // Add userToken to the dependency array

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Single_product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={ISuserToken ? <CheckOut /> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
