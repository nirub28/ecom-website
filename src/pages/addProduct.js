import React, { useState } from "react";
import styles from "../styles/add.module.css";
import { addProductToList } from "../actions";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify"; // to add notifications
import "react-toastify/dist/ReactToastify.css";

const AddProduct = (props) => {
  const [title, setTitle] = useState("");   // to store new product
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();

    const product = {
      Title: title,
      Info: description,
      Rating: rating,
      Price: price,
      Img: imageUrl,
      Id: uuidv4(),
    };

    props.dispatch(addProductToList(product));
    toast.success("Product Added Successfully");

    // Reset input values after adding the product
    setTitle("");
    setDescription("");
    setRating("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <div>
      <div>
        <form className={styles.form} onSubmit={handleAddProduct}>
          <span className={styles.name}>
            <b>Add a Product</b>
          </span>
          <p>Name</p>
          <input
            className={styles.inputBox}
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>Description</p>
          <input
            className={styles.inputBox}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>Rating</p>
          <input
            className={styles.inputBox}
            type="text"
            min="0"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <p>Price</p>
          <input
            className={styles.inputBox}
            required
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>Image URL</p>
          <input
            className={styles.inputBox}
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <br />
          <button className={styles.add} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect()(AddProduct);

