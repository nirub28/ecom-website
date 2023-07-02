import React from 'react';
import styles from '../styles/cart.module.css';
import { removeFromCart } from '../actions';
import { connect } from 'react-redux';

const Cart = (props) => {
  const { cart } = props;

  const isCartEmpty = () => {
    return cart.length === 0;
  };

  const totalPrice = cart.reduce((total, product) => {
    const price = parseFloat(product.Price);
    return total + price;
  }, 0);

  const handleRemoveProd = (product) => {
    console.log("Product removed is:", product);
    props.dispatch(removeFromCart(product));
  };

  return (
    <div>
      {isCartEmpty() ? (
        <div className={styles.emptyCartDiv}>
          <img className={styles.emptyCartImg} src='https://cdn-icons-png.flaticon.com/512/10967/10967115.png' alt='empty-cart'/>
          <h3 className={styles.emptyCartInfo} >Your cart is empty!</h3>
        <button className={styles.emptyCartBtn} ><a href='/'>Shop now </a></button>
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
                  <button className={styles.removeProdBtn} type="submit" onClick={() => handleRemoveProd(product)}>
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

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps)(Cart);
