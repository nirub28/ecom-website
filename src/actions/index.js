
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST";
export const DELETE_PRODUCT_FROM_LIST = "DELETE_PRODUCT_FROM_LIST";



export function addProducts(products) {
  return {
    type: ADD_PRODUCT,
    products,
  };
}

export function deleteProduct(product) {
  return {
    type: DELETE_PRODUCT_FROM_LIST,
    product,
  };
}

export function addProductToList(product){
  return{
    type:ADD_PRODUCT_TO_LIST,
    product,
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}


export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
}

