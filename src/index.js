/**
=========================================================
* Material Dashboard 3 PRO React - v2.3.0
=========================================================

* Product Page: sytis/product/material-dashboard-pro-react
* Copyright 2024 Infraspec (sytis)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 3 PRO React Context Provider
import { MaterialUIControllerProvider } from "context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <HashRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </HashRouter>
);
