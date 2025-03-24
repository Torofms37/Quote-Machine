// store.js
import { configureStore } from "@reduxjs/toolkit";
import quoteColorReducer from "./quoteColorSlice";

//Crea el reducer de manera global para pasarlo a la app
const store = configureStore({
  reducer: {
    quoteColor: quoteColorReducer,
  },
});

export default store;
