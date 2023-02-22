import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";
const initialState = {
  card: [],
  items: productData,
  totalQuentity: 0,
  totalPrice: 0,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, actions) => {
      let find = state.card.findIndex((item) => item.id === actions.payload.id);
      if (find >= 0) {
        state.card[find].quantity += 1;
      } else {
        state.card.push(actions.payload);
      }
    },
  },
});

export const { addToCard } = cardSlice.actions;

export default cardSlice.reducer;
