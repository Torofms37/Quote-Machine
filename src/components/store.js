// store.js
import { configureStore } from "@reduxjs/toolkit";
import quoteColorReducer from "./quoteColorSlice";

const store = configureStore({
  reducer: {
    quoteColor: quoteColorReducer,
  },
});

export default store;
