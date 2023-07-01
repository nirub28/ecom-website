import { combineReducers  } from "redux";


import {
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
  ADD_PRODUCT_TO_LIST,
} from "../actions";

const initialProductStore = {
  list: [],
  cart: [],
};

export function products(state = initialProductStore, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        list: action.products,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product !== action.product
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,

      };
    case ADD_PRODUCT_TO_LIST:
      return {
        ...state,
        list:[action.product , ...state.list]
      };

    default:
      return state;
  }
}



export default combineReducers({
  products,
});
