import React, { useState } from "react";
import styles from "../styles/products.module.css";
import { connect } from "react-redux";
import { deleteProduct , updateProduct } from "../actions";

const Products = (props) => {
  const { products } = props;

  const sortedData = [...products].sort((a, b) => a.Price - b.Price); // sort data in ascending orer
  const [isSortView, setisSortView] = useState(false);
  const [ isUpdate , setUpdate] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(false);

  console.log("length of data is ", products.length);

  const setNotSortView = () => {
    setisSortView(false);
  };

  const setSortView = () => {
    setisSortView(true);
  };

  const handleEditProd = (product) => {
    console.log("editing is updated of", product);
    setEditedProduct(product);
    setUpdate(true);
  };



  const cancelDelete = () =>{
    setDeleteProduct(false);
  }

  const continueDelete = () => {
    if (deleteProduct) {
      props.deleteProduct(editedProduct);
      setDeleteProduct(false);
    }
  };

  const handleDeleteProd = (product) => {
    setEditedProduct(product);
    setDeleteProduct(true);
  };


  const handleSaveChanges = () => {
    // Find the index of the edited product in the products array
    const editedProductIndex = products.findIndex(
      (product) => product.Id === editedProduct.Id
    );

    if (editedProductIndex !== -1) {
      // Create a copy of the products array
      const updatedData = [...products];

      // Update the edited product in the copy
      updatedData[editedProductIndex] = editedProduct;

      // Dispatch the updateProduct action with the updated product
         console.log('edited product is :', editedProduct);
         props.updateProduct(editedProduct); 
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
    backgroundColor: isSortView ? "black" : "white",
    color: isSortView ? "white" : "black",
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
      {deleteProduct ? <div className={styles.deletePopup}> <h3>Delete Product?</h3>
       <div className={styles.actionDiv}>
        <button className={styles.actionCancel} onClick={() => cancelDelete()} type="submit">Cancel</button>
        <button className={styles.actionDel} onClick={() => continueDelete()} type="submit">Delete</button>
        </div>
      </div> :''}
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
              <b>Rs:</b> {product.Price}
            </p>
            <p className={styles.rating}>
              <b>Rating:</b> {product.Rating}/5
            </p>
          </div>
          <div className={styles.endDiv}>
            <div className={styles.info}>{product.Info}</div>
            <div className={styles.iconDiv}>
            <span>
              <img
                className={styles.editPic}
                src="https://cdn-icons-png.flaticon.com/512/505/505159.png"
                alt="edit-icon"
                onClick={() => handleEditProd(product)}
              />
            </span>{" "}
            <span>
              <img
                className={styles.delPic}
                src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                alt="delete-icon"
                onClick={() => handleDeleteProd(product)}
              />
            </span>
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
                  <b>Rs:</b> {product.Price}
                </p>
                <p className={styles.rating}>
                  <b>Rating:</b> {product.Rating}/5
                </p>
              </div>
              <div className={styles.endDiv}>
                
                <div className={styles.info}>{product.Info}</div>
                <div className={styles.iconDiv}>
                <span>
                  <img
                    className={styles.editPic}
                    src="https://cdn-icons-png.flaticon.com/512/505/505159.png"
                    alt="edit-icon"
                    onClick={() => handleEditProd(product)}
                  />
                </span>{" "}
                <span>
                  <img
                    className={styles.delPic}
                    src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                    alt="delete-icon"
                    onClick={() => handleDeleteProd(product)}
                  />
                </span>
              </div>
              </div>
            </div>
          ))}
      { isUpdate ? (
        <div className={styles.editPopup}>
          <h2>Edit Product</h2>
          <div className={styles.editTitle}>
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
          <div className={styles.editPrice}>
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
          <div className={styles.editRating}>
            <label htmlFor="rating">Rating:</label>
            <input
              type="text"
              id="rating"
              min="0"
              max="5"
              value={editedProduct.Rating}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, Rating: e.target.value })
              }
            />
          </div>
          <div className={styles.editInfo}>
            <label htmlFor="info">Info:</label>
            <textarea
              id="info"
              value={editedProduct.Info}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, Info: e.target.value })
              }
            />
          </div>
          <div className={styles.editBtns}>
            <button className={styles.editSaveBtn} onClick={() => handleSaveChanges()}>Save</button>
            <button className={styles.editCancelBtn} onClick={() => handleCancelEdit()}>Cancel</button>
          </div>
        </div>
      ) : ''}
    </div>
  );
};

// export default Products;

const mapStateToProps = (state) => ({
  products: state.products.list,
});

// export default connect(mapStateToProps)(Products);
export default connect(mapStateToProps, {deleteProduct , updateProduct })(Products);

