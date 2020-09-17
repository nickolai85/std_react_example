import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import { Auth0Provider } from "@auth0/auth0-react";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
            <Auth0Provider
    domain="dev-a8njpv51.eu.auth0.com"
    clientId="MscuAsCEuYM31OjY4TrFmas8ZAjNI2Pq"
    redirectUri={window.location.origin}
  >
      <BrowserRouter>

    <App />
  
      </BrowserRouter>
      </Auth0Provider>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
