import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state?.items?.findIndex(
        (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
      );
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
