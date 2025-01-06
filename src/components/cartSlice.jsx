import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          quantity: 1,
          totalPrice: price,
        });
      }
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.totalItems -= item.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantityChange, price } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.totalItems += quantityChange;
        item.quantity += quantityChange;
        item.totalPrice += quantityChange * price;
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
