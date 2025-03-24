// quoteColorSlice.js
import { createSlice } from "@reduxjs/toolkit";
import quotes from "./quotes";
import darkerPastelColors from "./colors";

const initialState = {
  randomQuote: {},
  randomBgColor: "#FAFAFA",
};

const quoteColorSlice = createSlice({
  name: "quoteColor",
  initialState,
  reducers: {
    setRandomQuoteAndColor: (state, action) => {
      state.randomQuote = action.payload.quote;
      state.randomBgColor = action.payload.color;
    },
  },
});

// Acción para actualizar la cita y el color de fondo aleatoriamente.
export const fetchRandomQuoteAndColor = () => (dispatch) => {
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
  const quoteIndex = getRandomIndex(quotes);
  const colorIndex = getRandomIndex(darkerPastelColors);
  dispatch(
    setRandomQuoteAndColor({
      quote: quotes[quoteIndex],
      color: darkerPastelColors[colorIndex],
    })
  );
};

export const { setRandomQuoteAndColor } = quoteColorSlice.actions;
export default quoteColorSlice.reducer;
