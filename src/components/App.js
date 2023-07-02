import { Routes, Route } from "react-router-dom";
// import { data as productsList } from "../data";
import React, { useEffect } from "react";
import { addProducts } from "../actions";
import { connect } from "react-redux";
import {Home , Navbar , Cart , Products , addProduct as Add} from '../pages';



const App = ({ dispatch , products }) => {


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://my-json-server.typicode.com/");
        const data = await response.json();
        dispatch(addProducts(data));
      } catch (error) {
        // Handle error
      }
    };

    fetchProducts();
  }, [dispatch]);

  const { list = [], cart = [] } = products|| {};

  console.log('The list rnedering', products)

  return (
    <div className="App">
      <Navbar  dispatch={dispatch} cart={cart} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home products={list} cart={cart} dispatch={dispatch} />}
        />
        <Route exact path="/products" element={<Products products={list} />} />
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