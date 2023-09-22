import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <App />
    </SWRConfig>
  </React.StrictMode>
);
