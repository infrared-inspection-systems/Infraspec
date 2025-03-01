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

// Material Dashboard 3 PRO React Base Styles
import colors from "assets/theme-dark/base/colors";

const { transparent, white } = colors;

const textField = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,

      "& .MuiFormHelperText-root": {
        color: `${white.main} !important`,
      },
    },
  },
};

export default textField;
