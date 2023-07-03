import React, { useState } from "react";
import styles from "../styles/products.module.css";
import { connect } from "react-redux";
import { deleteProduct, updateProduct } from "../actions";

import { toast } from "react-toastify"; // to add notifications
import "react-toastify/dist/ReactToastify.css";

const Products = (props) => {
  const { products } = props;

  const sortedData = [...products].sort((a, b) => a.Price - b.Price); // sort data in ascending order
  const [isSortView, setisSortView] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);  // for product update
  const [deleteProduct, setDeleteProduct] = useState(false);

  const setNotSortView = () => {
    setisSortView(false);   // unsort view
  };

  const setSortView = () => {
    setisSortView(true);    // sort view
  };

  const handleEditProd = (product) => {
    setEditedProduct(product);    //when editing is clicked, then the product data is stored
    setUpdate(true);
  };

  const cancelDelete = () => {
    setDeleteProduct(false);       // when clicked on cancelling the product to stop from deleting
  };

  const continueDelete = () => { 
    if (deleteProduct) {           // when clicked confirm, it will proceed with delete
      props.deleteProduct(editedProduct);
      toast.success("Product Deleted Successfully");
      setDeleteProduct(false);
    }
  };

  const handleDeleteProd = (product) => {
    setEditedProduct(product);
    setDeleteProduct(true);
  };

  //To work on saved changes of a product
  const handleSaveChanges = () => {            
    // Find the Id of the edited product in the products array
    const editedProductIndex = products.findIndex(
      (product) => product.unId === editedProduct.unId
    );

    if (editedProductIndex !== -1) {
      // Create a copy of the products array
      const updatedData = [...products];

      // Update the edited product in the copy
      updatedData[editedProductIndex] = editedProduct;

      // Dispatch the updateProduct action with the updated product
      props.updateProduct(editedProduct);
      toast.success("Product Updated");
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
      {deleteProduct ? (
        <div className={styles.deletePopup}>
          {" "}
          <h3>Delete Product?</h3>
          <div className={styles.actionDiv}>
            <button
              className={styles.actionCancel}
              onClick={() => cancelDelete()}
              type="submit"
            >
              Cancel
            </button>
            <button
              className={styles.actionDel}
              onClick={() => continueDelete()}
              type="submit"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
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
      {isUpdate ? (
        <div className={styles.editPopup}>
          <h3>Edit Product</h3>
          <div className={styles.editTitle}>
            <label className={styles.lableTitle} htmlFor="title">
              <b>Title :</b>
            </label>
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
            <label className={styles.lableTitle} htmlFor="price">
              <b>Price:</b>
            </label>
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
            <label className={styles.lableTitle} htmlFor="rating">
              <b>Rating:</b>
            </label>
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
            <label className={styles.lableTitle} htmlFor="info">
              <b>Info :</b>
            </label>

            <textarea
              id="info"
              value={editedProduct.Info}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, Info: e.target.value })
              }
            />
          </div>
          <div className={styles.editBtns}>
            <button
              className={styles.editSaveBtn}
              onClick={() => handleSaveChanges()}
            >
              Save
            </button>
            <button
              className={styles.editCancelBtn}
              onClick={() => handleCancelEdit()}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};


const mapStateToProps = (state) => ({
  products: state.products.list,
});

export default connect(mapStateToProps, { deleteProduct, updateProduct })(
  Products
);
