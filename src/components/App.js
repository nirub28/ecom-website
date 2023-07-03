import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { addProducts } from "../actions";
import { connect } from "react-redux";
import { Home, Navbar, Cart, addProduct as Add } from "../pages";
import Products from '../pages/Products'
import { v4 as uuidv4 } from "uuid";
import {MyList} from '../data';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ dispatch }) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const storedProducts = localStorage.getItem("products");
        if (!storedProducts) {
          const productsWithId = MyList.map((product) => ({
            ...product,
            unId: uuidv4(),
          }));
          dispatch(addProducts(productsWithId));
          localStorage.setItem("products", JSON.stringify(productsWithId));
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchProducts();
  }, [dispatch]);


  return (
    <div className="App">
      <ToastContainer // for notifications
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar dispatch={dispatch} />
      <Routes>
        <Route
          exact path="/"
          element={<Home dispatch={dispatch} />}
        />
        <Route
          exact path="/Products"
          element={<Products />}
        />
        <Route
          exact path="/cart"
          element={<Cart dispatch={dispatch} />}
        />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </div>
  );
};

export default connect()(App);
