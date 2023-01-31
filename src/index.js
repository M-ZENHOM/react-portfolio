import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Config from "./StyledComponents/config";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// From react 18 we should use createRoot instead of ReactDOM
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={Config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

serviceWorkerRegistration.register();
