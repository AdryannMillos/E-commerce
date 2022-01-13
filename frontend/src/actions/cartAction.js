import Axios from "axios";
import { CART_ADD_ITEM, REMOVE_FROM_CART } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({type: REMOVE_FROM_CART, payload: productId});
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
