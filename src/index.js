import React from "react";
import ReactDOM from "react-dom";
import App from "./component/app";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./component/layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
  document.getElementById("root")
);
