import React from "react";
import styles from "../styles/cart.module.css";
import { removeFromCart } from "../actions";
import { connect } from "react-redux";


const Cart = (props) => {
  const { cart } = props;

  const isCartEmpty = () => {
    return cart.length === 0;        // to show empty cart
  };

  const totalPrice = cart.reduce((total, product) => {   // to calculate total price of products in cart
    const price = parseFloat(product.Price);             // as we have string type price, to mke it to numbers
    return total + price;
  }, 0);

  const handleRemoveProd = (product) => {
    props.dispatch(removeFromCart(product));
  };

  return (
    <div>
      {isCartEmpty() ? (                           // if cart is empty, show shop now button
        <div className={styles.emptyCartDiv}>
          <img
            className={styles.emptyCartImg}
            src="https://cdn-icons-png.flaticon.com/512/10967/10967115.png"
            alt="empty-cart"
          />
          
          <h3 className={styles.emptyCartInfo}>Your cart is empty!</h3>
          <button className={styles.emptyCartBtn}>
            <a href="/">Shop now </a>
          </button>
        </div>
      ) : (
        <React.Fragment>
          {cart.map((product, index) => {
            return (
              <div className={styles.prodDiv} key={index}>
                <img
                  className={styles.pic}
                  src={product.Img}
                  alt={product.Title}
                />
                <div className={styles.innDiv}>
                  <h2 className={styles.title}>{product.Title}</h2>
                  <p className={styles.price}>
                    <b>₹:</b> {product.Price}
                  </p>
                  <button
                    className={styles.removeProdBtn}
                    type="submit"
                    onClick={() => handleRemoveProd(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <p className={styles.totalPrice}>Total Amount(₹) = {totalPrice};</p>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({           // connect to store and get latest cart details
  cart: state.products.cart,
});

export default connect(mapStateToProps)(Cart);
