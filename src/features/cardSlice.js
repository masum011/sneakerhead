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
    getCardTotal: (state) => {
      let { totalQuentity, totalPrice } = state.card.reduce(
        (cardTotal, cardItem) => {
          const { price, quantity } = cardItem;
          const itemTotal = price * quantity;
          cardTotal.totalPrice += itemTotal;
          cardTotal.totalQuentity += quantity;
          return cardTotal;
        },
        {
          totalPrice: 0,
          totalQuentity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuentity = totalQuentity;
    },
    removeItem: (state, action) => {
      state.card = state.card.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.card = state.card.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.card = state.card.map((item) => {
        if (item.id === action.payload ) {
          // console.log('xxxxxxxxxxxx',item.quantity)
          if(item.quantity>=0){
            return { ...item, quantity: item.quantity - 1 };
          }else{
            return item.quantity;
          }
          }
        });
    },
  },
});

export const {
  addToCard,
  getCardTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cardSlice.actions;

export default cardSlice.reducer;
