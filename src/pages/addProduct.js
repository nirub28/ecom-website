import React, { useState } from 'react';
import styles from '../styles/add.module.css';
import { addProductToList } from '../actions';
import { connect } from 'react-redux';

const AddProduct = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    const product = {
      Title: title,
      Info: description,
      Rating: rating,
      Price: price,
      Img: imageUrl,
    };

    props.dispatch(addProductToList(product));

    // Reset input values after adding the product
    setTitle('');
    setDescription('');
    setRating('');
    setPrice('');
    setImageUrl('');
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
            type="number"
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

















// import styles from '../styles/add.module.css';
// import {addProductToList} from '../actions';
// import { connect } from "react-redux";


// const addProduct = (props) => {

//   // const {dispatch}=  props;

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     const product = {
//       Title: e.target[0].value,
//       Info: e.target[1].value,
//       Rating: e.target[2].value,
//       Price: e.target[3].value,
//       Img: e.target[4].value,
//     };
//     // console.log('Form values:', product);

//     props.dispatch(addProductToList(product));
//     console.log('Form values:', product);
//   }


//     return (
//       <div >
//         <div>
            
//             <form className={styles.form} onSubmit={handleAddProduct}>
//             <span className={styles.name}><b>Add a Product</b></span>
//                 <p>Name </p>
//                 <input className={styles.inputBox}  type="text"></input>
//                 <p>Description</p>
//                 <input  className={styles.inputBox} type="text"></input>
//                 <p>Rating</p>
//                 <input className={styles.inputBox} type="number"></input>
//                 <p>Price</p>
//                 <input className={styles.inputBox} type="number"></input>
//                 <p>Image URL</p>
//                 <input className={styles.inputBox} type="text"></input>
//                   <br/>
//                 <button className={styles.add} type="submit">Add</button>
//             </form>
//         </div>
        
//       </div>
//     );
//   }
  
  
//   // export default addProduct;
//   export default connect()(addProduct);
