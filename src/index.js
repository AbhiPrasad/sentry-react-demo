import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/browser";
import { Integrations as ApmIntegrations } from "@sentry/apm";

Sentry.init({
  dsn:
    "https://b0ecf8c95816405cba66c200dfeb3b19@o19635.ingest.sentry.io/5260528",
  debug: true,
  // integrations: [
  //   new ApmIntegrations.Tracing(),
  // ],
  // tracesSampleRate: 1,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
