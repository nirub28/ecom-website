import React, { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import { addToCart } from "../actions";
import { connect } from "react-redux";     

const Home = (props) => {
  const { products, cart } = props;

  // sort data in ascending order when clicked on Sort by price, will have that data in sortedData
  const sortedData = [...products].sort((a, b) => a.Price - b.Price); 
  const [isSortView, setisSortView] = useState(false);

  const setNotSortView = () => {
    setisSortView(false);    // to show unsorted data
  };

  const setSortView = () => {
    setisSortView(true);    // to show sorted data
  };

  // to show Go to cart button, if product already in cart
  const isInCart = (product) => {
    if (!cart) {
      return false;
    }
    var bool = cart.some((cartProduct) => cartProduct.Title === product.Title);
    return bool;
  };

  // colors for sort button
  const sortStyle = {
    backgroundColor: isSortView ? "black" : "white",
    color: isSortView ? "white" : "black",
  };

  const handleAddToCart = (product) => {
    props.dispatch(addToCart(product));  // adding product to cart
  };

  useEffect(() => {
    // console.log("rendering", products);
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
              <div className={styles.picDiv}>
                <img
                  className={styles.pic}
                  src={product.Img}
                  alt={product.Title}
                />
              </div>
              <div className={styles.innDiv}>
                <h2 className={styles.title}>{product.Title}</h2>
                <p className={styles.price}>
                  <b>₹:</b> {product.Price}
                </p>
                <p className={styles.rating}>
                  <b>Rating:</b>{" "}
                  <span className={styles.ratingValue}>{product.Rating}</span>
                  <img
                    className={styles.starPic}
                    src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
                    alt="star-pic"
                  ></img>
                  /5
                </p>
              </div>
              <div className={styles.endDiv}>
                <p className={styles.info}>{product.Info}</p>
                <div className={styles.iconDiv}>
                  {isInCart(product) ? (
                    <a href="/cart">
                      <button className={styles.goToCart}>Go To Cart</button>
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
            </div>
          ))
        : products.map((product, index) => (
            <div className={styles.prodDiv} key={index}>
              <div className={styles.picDiv}>
                <img
                  className={styles.pic}
                  src={product.Img}
                  alt={product.Title}
                />
              </div>
              <div className={styles.innDiv}>
                <h2 className={styles.title}>{product.Title}</h2>
                <p className={styles.price}>
                  <b>₹:</b> {product.Price}
                </p>
                <p className={styles.rating}>
                  <b>Rating:</b>{" "}
                  <span className={styles.ratingValue}>{product.Rating}</span>
                  <img
                    className={styles.starPic}
                    src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
                    alt="star-pic"
                  ></img>
                  /5
                </p>
              </div>
              <div className={styles.endDiv}>
                <p className={styles.info}>{product.Info}</p>
                <div className={styles.iconDiv}>
                  {isInCart(product) ? (
                    <a href="/cart">
                      <button className={styles.goToCart}>Go to cart</button>
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
            </div>
          ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.list,             // to get store data
  cart: state.products.cart,
});

export default connect(mapStateToProps)(Home);
