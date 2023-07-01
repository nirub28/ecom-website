
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST";


export function addProducts(products) {
  return {
    type: ADD_PRODUCT,
    products,
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

// export function handleMovieSearch(movie) {
//   const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

//   return function (dispatch) {
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         console.log("movie", movie);

//         //dispatch an action
//         dispatch(addMovieSearchResult(movie));
//       });
//   };
// }

