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

const defaultLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Area 1",
      color: "success",
      data: [40, 40, 38, 37, 40, 37, 40, 45, 38],
    },
    {
      label: "Area 2",
      color: "warning",
      data: [41, 42, 35, 39, 42, 39, 42, 40, 35],
    },
    {
      label: "Area 3",
      color: "primary",
      data: [43, 38, 37, 38, 44, 40, 41, 43, 37],
    },
    {
      label: "Threshold",
      color: "error",
      data: [50, 50, 50, 50, 50, 50, 50, 50, 50],
    },
  ],
};

export default defaultLineChartData;
