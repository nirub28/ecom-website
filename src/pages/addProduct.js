import styles from '../styles/add.module.css';
import {addProductToList} from '../actions';
import { connect } from "react-redux";


const addProduct = (props) => {

  // const {dispatch}=  props;

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      Title: e.target[0].value,
      Info: e.target[1].value,
      Rating: e.target[2].value,
      Price: e.target[3].value,
      Img: e.target[4].value,
    };
    // console.log('Form values:', product);

    props.dispatch(addProductToList(product));
    console.log('Form values:', product);
  }


    return (
      <div >
        <div>
            
            <form className={styles.form} onSubmit={handleAddProduct}>
            <span className={styles.name}><b>Add a Product</b></span>
                <p>Name </p>
                <input className={styles.inputBox}  type="text"></input>
                <p>Description</p>
                <input  className={styles.inputBox} type="text"></input>
                <p>Rating</p>
                <input className={styles.inputBox} type="number"></input>
                <p>Price</p>
                <input className={styles.inputBox} type="number"></input>
                <p>Image Add</p>
                <input className={styles.inputBox} type="text"></input>
                  <br/>
                <button className={styles.add} type="submit">Add</button>
            </form>
        </div>
        
      </div>
    );
  }
  
  
  // export default addProduct;
  export default connect()(addProduct);
