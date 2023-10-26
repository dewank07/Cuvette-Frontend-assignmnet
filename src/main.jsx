import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ModalState from "./context/modal/modalState.jsx";
import StatsDataState from "./context/StatsData/StatsDataState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StatsDataState>
      <ModalState>
        <App />
      </ModalState>
    </StatsDataState>
  </React.StrictMode>
);
