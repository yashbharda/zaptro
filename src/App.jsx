import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import { useCart } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [location, setLocation] = useState(null);
  const [openDropDown, setOpenDropDown] = useState(false);

  const { cartItem, setCartItem } = useCart();

  const [cartLoaded, setCartLoaded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");

    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }

    setCartLoaded(true);
  }, [setCartItem]);

  // Save cart to localStorage
  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }
  }, [cartItem, cartLoaded]);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const response = await axios.get(url);

        const exactLocation = response.data.address;

        setLocation(exactLocation);

        setOpenDropDown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="/category/:category" element={<CategoryProduct />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart location={location} geolocation={getLocation} />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
