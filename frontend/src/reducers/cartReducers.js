import { CART_ADD_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const productId = item.product;
      const existItem =  state.cartItems.find((x) => x.product === productId);
      if (existItem) {
        console.log(true);
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? existItem : x
          ),
        };
      } else {
        console.log(productId);
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
