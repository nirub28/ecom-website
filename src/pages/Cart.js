import React from 'react';
import styles from '../styles/cart.module.css';
import {removeFromCart} from '../actions';


const Cart = (props) => {
  const { cart } = props;

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
                <b>RS:</b> {product.Price}
              </p>
              <button type="submit" onClick={()=>handleRemoveProd(product)}>Remove</button>
            </div>
          </div>
        );
      })}
      Total Amount(Rs) = {totalPrice};
    </div>
  );
  
};



export default Cart;
