// App.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomQuoteAndColor } from "./components/quoteColorSlice";

function App() {
  //obtiene el esttado de randomQuote, randomBgColor y randomTxColor, seleccionandonos con selector
  const { randomQuote, randomBgColor, randomTxColor } = useSelector(
    (state) => state.quoteColor
  );
  //agregamos dispatch
  const dispatch = useDispatch();

  //Despacha a fetchrandom el cual nos carga un color y texto alteatorio al inicio de todo
  useEffect(() => {
    dispatch(fetchRandomQuoteAndColor());
  }, [dispatch]);

  //Despacha el fectahrandom cada que se actualiza el color de fondo
  useEffect(() => {
    document.body.style.backgroundColor = randomBgColor;
  }, [randomBgColor]);

  // Actualizar el color de fondo del body cuando cambie randomBgColor
  const handleRefresh = () => {
    dispatch(fetchRandomQuoteAndColor());
  };

  return (
    <div className="container" style={{ backgroundColor: randomBgColor }}>
      <div
        className="container-fluid w-50 h-auto d-flex flex-column justify-content-between border-2 position-absolute top-50 start-50 translate-middle text-center"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <h1 style={{ color: randomTxColor }}>
          <i
            className="iconoir-quote-solid"
            style={{ color: randomTxColor }}
          ></i>
          {randomQuote.text}
        </h1>
        <p
          className="position-relative text-end"
          style={{ color: randomTxColor }}
        >
          « {randomQuote.author?.trim() || "Sin nombre"} »
        </p>
        <div className="row justify-content-between px-2 py-2">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-danger me-1"
              onClick={() =>
                window.open(
                  "https://github.com/Torofms37?tab=repositories",
                  "_blank"
                )
              }
            >
              <i className="iconoir-github"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() =>
                window.open("https://www.instagram.com/ruhen_ar/", "_blank")
              }
            >
              <i className="iconoir-instagram"></i>
            </button>
          </div>

          <div className="col-auto">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleRefresh}
            >
              <i className="iconoir-refresh"></i>
            </button>
          </div>
        </div>
      </div>
      <p className="position-absolute bottom-0 start-50 translate-middle-x text-center fw-bold">
        Made by Torofms37 🐂
      </p>
    </div>
  );
}

export default App;
