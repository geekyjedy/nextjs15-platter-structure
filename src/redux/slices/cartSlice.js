import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const product = payload;

      // Find if the product with the same ID, color, and size exists in the cart
      const existingProduct = state.cart.find(
        (item) =>
          item.id === product.id &&
          item.colorId === product.colorId &&
          item.sizeId === product.sizeId
      );

      if (!existingProduct) {
        // If the product with the specific color and size doesn't exist, add it to the cart
        state.cart = [
          { ...product, quantity: 1, originalPrice: product.price },
          ...state.cart,
        ];
      } else {
        // If it exists, increment the quantity and update the price
        existingProduct.quantity++;
        existingProduct.price = product.price * existingProduct.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const { id, colorId, sizeId } = action.payload;

      // Find the product by ID, colorId, and sizeId
      const existingProduct = state.cart.find(
        (item) =>
          item.id === id && item.colorId === colorId && item.sizeId === sizeId
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity--;
          existingProduct.price =
            existingProduct.price - existingProduct.originalPrice;
        } else {
          state.cart = state.cart.filter(
            (item) =>
              !(
                item.id === id &&
                item.colorId === colorId &&
                item.sizeId === sizeId
              )
          );
        }
      }
    },
    // The new updateCart reducer
    updateCart: (state, { payload }) => {
      const { id, colorId, sizeId, quantity } = payload;

      // Find the product in the cart based on id, color, and size
      const existingProduct = state.cart.find(
        (item) =>
          item.id === id && item.colorId === colorId && item.sizeId === sizeId
      );

      if (existingProduct) {
        // Update the quantity and recalculate the price
        existingProduct.quantity = quantity;
        // existingProduct.price = existingProduct.originalPrice * quantity;

        // If the quantity is zero, remove the item from the cart
        if (quantity === 0) {
          state.cart = state.cart.filter(
            (item) =>
              !(
                item.id === id &&
                item.colorId === colorId &&
                item.sizeId === sizeId
              )
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
