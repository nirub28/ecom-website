import React, { useState } from "react";
import { data } from "../data";
import styles from "../styles/products.module.css";

const Products = (props) => {
  const [myData, setMyData] = useState(data);
  const sortedData = [...myData].sort((a, b) => a.Price - b.Price); // sort data in ascending orer
  const [isSortView, setisSortView] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

   console.log('length of data is ', myData.length);

  const setNotSortView = () => {
    setisSortView(false);
  };

  const setSortView = () => {
    setisSortView(true);
  };

  const handleEditProd = (product) => {
    console.log('editing is updated of', product);
    setEditedProduct(product);
    setUpdate(true);
  };

  const handleDeleteProd = () => {
    alert('Product deleted');
  };

  const handleSaveChanges = () => {
    // Find the index of the edited product in the myData array
    const editedProductIndex = myData.findIndex((product) => product.Id === editedProduct.Id);
    
    if (editedProductIndex !== -1) {
      // Create a copy of the myData array
      const updatedData = [...myData];
      
      // Update the edited product in the copy
      updatedData[editedProductIndex] = editedProduct;
      
      // Update the myData state with the updated array
      setMyData(updatedData);
    }
    
    // Reset the edit state and close the edit popup
    setEditedProduct(null);
    setUpdate(false);
  };
  
  
  const handleCancelEdit = () => {
    // Reset the edit state and close the edit popup
    setEditedProduct(null);
    setUpdate(false);
  };
  
  

  const sortStyle = {
    backgroundColor: isSortView ? "gray" : "white",
  };

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
              <p className={styles.info}>{product.Info}</p>
            </div>
          ))
        : myData.map((product, index) => (
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
                <span>
                  <img
                    className={styles.editPic}
                    src="https://cdn-icons-png.flaticon.com/512/505/505159.png"
                    alt="edit-icon"
                    onClick={()=>handleEditProd(product)}
                  />
                </span>{" "}
                <span>
                  <img
                    className={styles.delPic}
                    src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                    alt="delete-icon"
                    onClick={()=>handleDeleteProd()}
                  />
                </span>
                
              </div>
            </div>
          ))}

{isUpdate && editedProduct && (
  <div className={styles.editPopup}>
    <h2>Edit Product</h2>
    <div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={editedProduct.Title}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, Title: e.target.value })
        }
      />
    </div>
    <div>
      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        value={editedProduct.Price}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, Price: e.target.value })
        }
      />
    </div>
    <div>
      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={editedProduct.Rating}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, Rating: e.target.value })
        }
      />
    </div>
    <div>
      <label htmlFor="info">Info:</label>
      <textarea
        id="info"
        value={editedProduct.Info}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, Info: e.target.value })
        }
      />
    </div>
    <div>
      <button onClick={()=> handleSaveChanges}>Save</button>
      <button onClick={() => handleCancelEdit}>Cancel</button>
    </div>
  </div>
)}


    </div>
  );
};

export default Products;
