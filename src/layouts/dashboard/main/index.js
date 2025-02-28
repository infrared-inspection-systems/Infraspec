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
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "examples/Cards/MasterCard";

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
    const {sales, tasks} = reportsLineChartData;

    // Action buttons for the BookingCard
    const actionButtons = (
        <>
            <Tooltip title="Refresh" placement="bottom">
                <MDTypography variant="body1" color="primary" lineHeight={1} sx={{cursor: "pointer", mx: 3}}>
                    <Icon color="inherit">refresh</Icon>
                </MDTypography>
            </Tooltip>
            <Tooltip title="Edit" placement="bottom">
                <MDTypography variant="body1" color="info" lineHeight={1} sx={{cursor: "pointer", mx: 3}}>
                    <Icon color="inherit">edit</Icon>
                </MDTypography>
            </Tooltip>
        </>
    );

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mb={3} ml={1}>
                <MDTypography variant="h4" fontWeight="bold">
                    Hardware Monitoring
                </MDTypography>
            </MDBox>
            <MDBox mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={3}>
                            <MiniStatisticsCard
                                title={{text: "CPU"}}
                                count="68 %"
                                icon={{color: "warning", component: "desktop_mac"}}
                                direction="left"
                            />
                        </MDBox>
                        <MiniStatisticsCard
                            title={{text: "Camera Temperature"}}
                            count="35°c"
                            icon={{color: "info", component: "camera"}}
                            direction="left"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} lg={5} display="flex" flexDirection={{xs: "column", sm: "row"}}>
                        <MDBox width="100%" mr={{xs: 0, sm: 3}} mb={{xs: 3, sm: 0}}>
                            <MiniStatisticsCard
                                title={{text: "memory"}}
                                count="80 %"
                                icon={{color: "error", component: "sd_card"}}
                                direction="left"
                            />
                        </MDBox>
                        <MDBox width="100%">
                            <MiniStatisticsCard
                                title={{text: "battery UPS"}}
                                count="99 %"
                                icon={{color: "success", component: "battery_charging_full"}}
                                direction="left"
                            />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox pb={3}>
                <MDBox mb={3} ml={1}>
                    <MDTypography variant="h4" fontWeight="bold">
                        Analytics
                    </MDTypography>
                    <MDTypography variant="button" fontWeight="regular" sx={{fontSize: "16px", color: "#737373"}}>
                        Trends on condition monitoring.
                    </MDTypography>
                </MDBox>
                <MDBox>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mb={3}>
                                <ReportsBarChart
                                    color="info"
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
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mt={3}>
                                <BookingCard
                                    image={booking1}
                                    title="Mile PTZ 50mm"
                                    description="Threshold Alarm"
                                    price="Preset 1/Area 3"
                                    location="site 1, city 1"
                                    action={actionButtons}
                                />
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mt={3}>
                                <BookingCard
                                    image={booking2}
                                    title="Mini Left PTZ 25mm"
                                    description="Fire Detected"
                                    price="Preset 2/Area 0"
                                    location="site 2, city 2"
                                    action={actionButtons}
                                />
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mt={3}>
                                <BookingCard
                                    image={booking3}
                                    title="Mini Right PTZ 25mm"
                                    description="Intrusion"
                                    price="Parking Lot/Area 0"
                                    location="site 3, city 3"
                                    action={actionButtons}
                                />
                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox>
            </MDBox>
            <Grid>
                <MDBox>
                    <MixedChart
                        icon={{color: "primary", component: "leaderboard"}}
                        title="Temperature Threshold"
                        description="Analytics Insights"
                        chart={{
                            labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
        <Footer />
    </DashboardLayout>
    );
}

export default Analytics;
