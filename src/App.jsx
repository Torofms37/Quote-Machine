// App.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomQuoteAndColor } from "./components/quoteColorSlice";

function App() {
  const { randomQuote, randomBgColor } = useSelector(
    (state) => state.quoteColor
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomQuoteAndColor());
  }, [dispatch]);

  // Actualizar el color de fondo del body cuando cambie randomBgColor
  useEffect(() => {
    document.body.style.backgroundColor = randomBgColor;
  }, [randomBgColor]);

  return (
    <div className="container" style={{ backgroundColor: randomBgColor }}>
      <div
        className="container-fluid w-50 h-auto d-flex flex-column justify-content-between border position-absolute top-50 start-50 translate-middle text-center"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <h1>{randomQuote.text}</h1>
        <p>{randomQuote.author}</p>

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
              onClick={() => window.location.reload()}
            >
              <i className="iconoir-refresh"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
