// quoteColorSlice.js
import { createSlice } from "@reduxjs/toolkit";
import quotes from "./quotes";
import darkerPastelColors from "./colors";

//Estado inicial del slice con quotes, colores y texto aleatorios.
const initialState = {
  randomQuote: {},
  randomBgColor: "#FAFAFA",
  randomTxColor: "#FAFAFA",
};

//Se crea el slice
const quoteColorSlice = createSlice({
  //Se nombran las acciones y el estado inicial
  name: "quoteColor",
  initialState,
  //Se definen los reducers
  reducers: {
    //Reducer para actualizar la cita y el color de fondo aleatoriamente.
    setRandomQuoteAndColor: (state, action) => {
      //Carga el texto y color y los actualiza al estado de cada uno de ellos
      state.randomQuote = action.payload.quote;
      state.randomBgColor = action.payload.color;
      state.randomTxColor = action.payload.color;
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
      text: darkerPastelColors[colorIndex],
    })
  );
};

//Se exporta el reducer y la acción
export const { setRandomQuoteAndColor } = quoteColorSlice.actions;
export default quoteColorSlice.reducer;
