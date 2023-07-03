import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { addProducts } from "../actions";
import { connect } from "react-redux";
import { Home, Navbar, Cart,Products, addProduct as Add } from "../pages";
import { v4 as uuidv4 } from "uuid";
import {MyList} from '../data';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page404 = () => {
  return <div> <h1>404 Error </h1> <h4>Please check if URL entered is correct</h4></div>
};


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
        position="top-center"
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
          exact path="/products"
          element={<Products />}
        />
        <Route
          exact path="/cart"
          element={<Cart dispatch={dispatch} />}
        />
        <Route exact path="/add" element={<Add />} />

        <Route  path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default connect()(App);
