/**
=========================================================
* Material Dashboard 3 PRO React - v2.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Infraspec (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sales dashboard components
import ProductCell from "layouts/dashboards/sales/components/ProductCell";
import RefundsCell from "layouts/dashboards/sales/components/RefundsCell";
import DefaultCell from "layouts/dashboards/sales/components/DefaultCell";

// Images
import blackChair from "assets/images/ecommerce/black-chair.jpeg";

const dataTableData = {
  columns: [
    { Header: "product", accessor: "product", width: "55%" },
    { Header: "value", accessor: "value" },
    { Header: "ads spent", accessor: "adsSpent", align: "center" },
    { Header: "refunds", accessor: "refunds", align: "center" },
  ],

  rows: [
    {
      product: <ProductCell image={blackChair} name="Black Chair" orders={2.421} />,
      value: <DefaultCell>$40.600</DefaultCell>,
      adsSpent: <DefaultCell>$9.430</DefaultCell>,
      refunds: <RefundsCell value={54} icon={{ color: "success", name: "keyboard_arrow_up" }} />,
    },
  ],
};

export default dataTableData;
