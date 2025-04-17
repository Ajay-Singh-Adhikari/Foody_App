import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import foodStore from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {foodStore}>
      <App />
    </Provider>
  </StrictMode>
);
