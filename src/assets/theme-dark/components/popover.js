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

// Material Dashboard 3 PRO React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

// Material Dashboard 3 PRO React base styles
import colors from "assets/theme-dark/base/colors";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";

const { transparent } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: md,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
