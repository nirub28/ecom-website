import React, { useState } from "react";
import { data } from "../data";
import styles from "../styles/products.module.css";

const Products = () => {
  const sortedData = [...data].sort((a, b) => a.Price - b.Price); // sort data in ascending orer
  const [isSortView, setisSortView] = useState(false);

  const setNotSortView = () => {
    setisSortView(false);
  };

  const setSortView = () => {
    setisSortView(true);
  };

  const sortStyle = {
    backgroundColor: isSortView ? "gray" : "white",
  };

  return (
    <div className={styles.mainDiv}>
      {" "}
      <div className={styles.sortDiv}>
        <div onClick={() => setSortView()} className={styles.sort} style={sortStyle} >
          Sort by price{" "}
        </div>{" "}
        {isSortView ? (
          <span onClick={() => setNotSortView()} className={styles.sortRemove}>
            <img className={styles.sortRemoveIcon} src="https://cdn-icons-png.flaticon.com/512/660/660252.png" alt="remove-sort" />
          </span>
        ) : (
          ""
        )}
      </div>{" "}
      {isSortView
        ? sortedData.map((product, index) => (
            <div className={styles.prodDiv} key={index}>
              <img
                className={styles.pic}
                src={product.Img}
                alt={product.Title}
              />
              <div className={styles.innDiv}>
                <h2 className={styles.title}>{product.Title}</h2>
                <p className={styles.price}><b>RS:</b> {product.Price}</p>
                <p className={styles.rating}><b>Rating:</b> {product.Rating}</p>
              </div>
              <p className={styles.info}>{product.Info}</p>
            </div>
          ))
        : data.map((product, index) => (
            <div className={styles.prodDiv} key={index}>
              <img
                className={styles.pic}
                src={product.Img}
                alt={product.Title}
              />
              <div className={styles.innDiv}>
                <h2 className={styles.title}>{product.Title}</h2>
                <p className={styles.price}><b>RS:</b> {product.Price}</p>
                <p className={styles.rating}><b>Rating:</b> {product.Rating}</p>
              </div>
              <p className={styles.info}>{product.Info}</p>
            </div>
          ))}
    </div>
  );
};

export default Products;
