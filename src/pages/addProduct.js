import styles from '../styles/add.module.css';

const addProduct = () => {
    return (
      <div >
        <div>
            
            <form className={styles.form}>
            <span className={styles.name}><b>Add a Product</b></span>
                <p>Name</p>
                <input className={styles.inputBox} type="text"></input>
                <p>Description</p>
                <input  className={styles.inputBox} type="text"></input>
                <p>Rating</p>
                <input className={styles.inputBox} type="text"></input>
                <p>Price</p>
                <input className={styles.inputBox} type="text"></input>
                <p>Image Add</p>
                <input className={styles.inputBox} type="text"></input>
                  <br/>
                <button className={styles.add} type="submit">Add</button>
            </form>
        </div>
        
      </div>
    );
  }
  
  
  export default addProduct;