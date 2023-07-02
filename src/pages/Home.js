import React, { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import { addToCart } from "../actions";
import { connect } from "react-redux";

const Home = (props) => {
  const { products, cart } = props;

  const sortedData = [...products].sort((a, b) => a.Price - b.Price); // sort data in ascending orer
  const [isSortView, setisSortView] = useState(false);

  const setNotSortView = () => {
    setisSortView(false);
  };

  const setSortView = () => {
    setisSortView(true);
  };

  const isInCart = (product) => {
    if (!cart) {
      return false;
    }
    var bool = cart.some((cartProduct) => cartProduct.Title === product.Title);

    return bool;
  };

  const sortStyle = {
    backgroundColor: isSortView ? "black" : "white",
    color: isSortView ? "white" : "black",
  };

  const handleAddToCart = (product) => {
    props.dispatch(addToCart(product));
  };

  useEffect(() => {
    console.log("rendering", products);
  }, [products]); // Empty dependency array to run the effect only once

  return (
    <div className={styles.mainDiv}>
      {" "}
      <div className={styles.sortDiv}>
        <div
          onClick={() => setSortView()}
          className={styles.sort}
          style={sortStyle}
        >
          Sort by price{" "}
        </div>{" "}
        {isSortView ? (
          <span onClick={() => setNotSortView()} className={styles.sortRemove}>
            <img
              className={styles.sortRemoveIcon}
              src="https://cdn-icons-png.flaticon.com/512/660/660252.png"
              alt="remove-sort"
            />
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
            <p className={styles.price}>
              <b>RS:</b> {product.Price}
            </p>
            <p className={styles.rating}>
              <b>Rating:</b> {product.Rating}
            </p>
          </div>
          <div className={styles.endDiv}>
            <p className={styles.info}>{product.Info}</p>
            {isInCart(product) ? (
              <a href="/cart">
                <button>Go To Cart</button>
              </a>
            ) : (
              <button
                className={styles.addToCart}
                type="submit"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
          ))
        : products.map((product, index) => (
            <div className={styles.prodDiv} key={index}>
              <img
                className={styles.pic}
                src={product.Img}
                alt={product.Title}
              />
              <div className={styles.innDiv}>
                <h2 className={styles.title}>{product.Title}</h2>
                <p className={styles.price}>
                  <b>RS:</b> {product.Price}
                </p>
                <p className={styles.rating}>
                  <b>Rating:</b> {product.Rating}
                </p>
              </div>
              <div className={styles.endDiv}>
                <p className={styles.info}>{product.Info}</p>
                {isInCart(product) ? (
                  <a href="/cart">
                    <button>Go To Cart</button>
                  </a>
                ) : (
                  <button
                    className={styles.addToCart}
                    type="submit"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.list,
  cart: state.products.cart,
});

export default connect(mapStateToProps)(Home);
