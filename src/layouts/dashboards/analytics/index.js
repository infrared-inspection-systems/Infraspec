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
import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 3 PRO React helper functions
import gradientChartLine from "assets/theme/functions/gradientChartLine";

// MixedChart configurations
import configs from "examples/Charts/MixedChart/configs";

// Material Dashboard 3 PRO React base styles
import colors from "assets/theme/base/colors";

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {} from "@mui/material";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 3 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "examples/Cards/BookingCard";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import MixedChart from "examples/Charts/MixedChart";

// Anaytics dashboard components
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";

// Data
import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

// Images
import booking1 from "assets/images/products/product-1-min.jpg";
import booking2 from "assets/images/products/product-2-min.jpg";
import booking3 from "assets/images/products/product-3-min.jpg";

function Analytics() {
  const { sales, tasks } = reportsLineChartData;

  // Action buttons for the BookingCard
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography
          variant="body1"
          color="info"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pb={3}>
        <MDBox mb={3} ml={1}>
          <MDTypography variant="h4" fontWeight="bold">
            Analytics
          </MDTypography>
          <MDTypography
            variant="button"
            fontWeight="regular"
            sx={{ fontSize: "16px", color: "#737373" }}
          >
            Trends on condition monitoring.
          </MDTypography>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="success"
                  title="people"
                  description="detected"
                  date="30 sec ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="vehicles"
                  description="detected"
                  date="just updated"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="temperature"
                  description="alarms"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Positive Alerts"
                  count={55}
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="False Alerts"
                  count="46"
                  percentage={{
                    color: "error",
                    amount: "+3%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Neutral Alerts"
                  count="123"
                  percentage={{
                    color: "info",
                    amount: "+1%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Total Alerts"
                  count="315"
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "Just updated",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking1}
                  title="Mile PTZ 50mm"
                  description='Threshold Alarm'
                  price="Reactor/Area 3"
                  location="Falcon Ridge, Fontana"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking2}
                  title="Mini Left PTZ 25mm"
                  description='Fire Detected'
                  price="Preset 1/Area 0"
                  location="Daisy, Merced"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking3}
                  title="Mini Right PTZ 25mm"
                  description='Intrusion'
                  price="Parking Lot/Area 0"
                  location="Ordway, Long Beach"
                  action={actionButtons}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container mt={3}>
          <SalesByCountry />
        </Grid>
        </MDBox>
        <MDBox>
       </MDBox>
      <Grid>
      <MDBox>
        <MixedChart
          icon={{ color: "primary", component: "leaderboard" }}
          title="Temperature Threshold"
          description="Analytics Insights"
          chart={{
            labels: [
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                chartType: "thin-bar",
                label: "Organic Search",
                color: "success",
                data: [40, 42, 45, 44, 40, 38, 38, 42, 45],
              },
              {
                chartType: "gradient-line",
                label: "Referral",
                color: "error",
                data: [60, 60, 60, 60, 60, 60, 60, 60, 60],
              },
            ],
          }}
        />
      </MDBox>
      </Grid>
    </DashboardLayout>
  );
}

export default Analytics;
