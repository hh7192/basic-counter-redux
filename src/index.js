import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
// import store from "./store/indexOld";
import storeNew from "./store/indexNew";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeNew}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

