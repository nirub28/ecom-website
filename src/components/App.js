import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { addProducts } from "../actions";
import { connect } from "react-redux";
import { Home, Navbar, Cart, Products, addProduct as Add } from "../pages";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ dispatch, products }) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/"); //api call
        const data = await response.json();

        const updatedProducts = data.map((product) => ({
          ...product,
          unId: uuidv4(),
        }));
        dispatch(addProducts(updatedProducts));
      } catch (error) {
        //  error handle
      }
    };

    fetchProducts();
  }, [dispatch]);

  const { list = [], cart = [] } = products || {};

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

      <Navbar dispatch={dispatch} cart={cart} />
      <Routes>
        <Route
          exact path="/"
          element={<Home products={list} cart={cart} dispatch={dispatch} />}
        />
        <Route 
        exact path="/products" 
        element={<Products products={list} />} 
      />
        <Route
          exact
          path="/cart"
          element={<Cart dispatch={dispatch} cart={cart} />}
        />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </div>
  );
};

export default connect()(App);
