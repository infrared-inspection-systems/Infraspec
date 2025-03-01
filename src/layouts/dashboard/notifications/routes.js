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

/** 
  All of the routes for the Material Dashboard 3 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 3 PRO React layouts
import Notifications from "layouts/dashboard/notifications";
import Trends from "layouts/dashboard/trends";
import Main from "layouts/dashboard/main";
import Invoice from "layouts/pages/account/invoice";
import Charts from "layouts/pages/charts";
import Calendar from "layouts/applications/calendar";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpCover from "layouts/authentication/sign-up/cover";
import ResetCover from "layouts/authentication/reset-password/cover";

// Material Dashboard 3 PRO React components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/team-3.jpg";

const routes = [
  {
    type: "collapse",
    name: "Dane Stephenson",
    key: "dane-stephenson",
    route: "/pages/profile/profile-overview",
    icon: <MDAvatar src={profilePicture} alt="Dane Stephenson" size="sm" />,
    component: <Charts />,
    noCollapse: true,
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard/",
    icon: <Icon fontSize="small">dashboard</Icon>,
    component: <Main />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Trends",
    key: "trends",
    route: "dashboard/trends",
    icon: <Icon fontSize="small">assessment</Icon>,
    component: <Trends />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    route: "dashboard/notifications",
    icon: <Icon fontSize="small">access_alarm</Icon>,
    component: <Notifications />,
    noCollapse: true,
  },  
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    route: "dashboard/notifications",
    icon: <Icon fontSize="small">access_alarm</Icon>,
    component: <Calendar />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    route: "dashboard/reports",
    icon: <Icon fontSize="small">assignment</Icon>,
    component: <Invoice />,
    noCollapse: true,
  },
  { type: "divider", key: "divider-0" },
  { type: "title", title: "Device", key: "title-pages" },
  {
    type: "collapse",
    name: "Add Device",
    key: "add-device",
    route: "add-device",
    icon: <Icon fontSize="small">add_a_photo</Icon>,
    component: <NewProduct />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "NVR",
    key: "nvr",
    icon: <Icon fontSize="small">devices</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "NVR 1",
        key: "nvr",
        href: "http://172.16.1.5",
        icon: <Icon fontSize="small">devices</Icon>,
        noCollapse: true,
      },
      {
        type: "collapse",
        name: "NVR 2",
        key: "nvr",
        href: "http://172.16.1.5",
        icon: <Icon fontSize="small">devices</Icon>,
        noCollapse: true,
      },
      {
        type: "collapse",
        name: "NVR 3",
        key: "nvr",
        href: "http://172.16.1.5",
        icon: <Icon fontSize="small">devices</Icon>,
        noCollapse: true,
      },
    ],
  },
  {
    type: "collapse",
    name: "Camera",
    key: "cameras",
    icon: <Icon fontSize="small">camera</Icon>,
    collapse: [
      {
        type: "collapse",
        name: "Camera 1",
        key: "camera",
        href: "http://172.16.1.151",
        icon: <Icon fontSize="small">camera</Icon>,
        noCollapse: true,
      },
      {
        name: "Camera 2",
        key: "camera",
        href: "http://172.16.1.154",
        icon: <Icon fontSize="small">camera</Icon>,
      },
      {
        name: "Camer 3",
        key: "camera",
        href: "http://172.16.1.158",
        icon: <Icon fontSize="small">camera</Icon>,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  { type: "title", title: "Location", key: "title-pages" },
  {
    type: "collapse",
    name: "Add Map",
    key: "map",
    route: "/site/site-1",
    icon: <Icon fontSize="small">map</Icon>,
    component: <EditProduct />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Site",
    key: "site",
    icon: <Icon fontSize="small">place</Icon>,
    collapse: [
      {
        name: "site 1",
        key: "site-1",
        route: "/site/site-1",
        component: <EditProduct />,
      },
      {
        name: "site 2",
        key: "site-2",
        route: "/site/site-2",
        component: <EditProduct />,
      },
      {
        name: "site 3",
        key: "site-3",
        route: "/site/site-3",
        component: <EditProduct />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  { type: "title", title: "Account", key: "title-pages" },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Icon fontSize="small">content_paste</Icon>,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCover />,
          },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
        ],
      },
    ],
  },
  /*{ type: "divider", key: "divider-1" },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "Basic",
    key: "basic",
    icon: <Icon fontSize="small">upcoming</Icon>,
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        collapse: [
          {
            name: "Overview",
            key: "overview",
            href: "https://www.creative-tim.com/learning-lab/react/overview/material-dashboard/",
          },
          {
            name: "License",
            key: "license",
            href: "https://www.creative-tim.com/learning-lab/react/license/material-dashboard/",
          },
          {
            name: "Quick Start",
            key: "quick-start",
            href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/",
          },
          {
            name: "Build Tools",
            key: "build-tools",
            href: "https://www.creative-tim.com/learning-lab/react/build-tools/material-dashboard/",
          },
        ],
      },
      {
        name: "Foundation",
        key: "foundation",
        collapse: [
          {
            name: "Colors",
            key: "colors",
            href: "https://www.creative-tim.com/learning-lab/react/colors/material-dashboard/",
          },
          {
            name: "Grid",
            key: "grid",
            href: "https://www.creative-tim.com/learning-lab/react/grid/material-dashboard/",
          },
          {
            name: "Typography",
            key: "base-typography",
            href: "https://www.creative-tim.com/learning-lab/react/base-typography/material-dashboard/",
          },
          {
            name: "Borders",
            key: "borders",
            href: "https://www.creative-tim.com/learning-lab/react/borders/material-dashboard/",
          },
          {
            name: "Box Shadows",
            key: "box-shadows",
            href: "https://www.creative-tim.com/learning-lab/react/box-shadows/material-dashboard/",
          },
          {
            name: "Functions",
            key: "functions",
            href: "https://www.creative-tim.com/learning-lab/react/functions/material-dashboard/",
          },
          {
            name: "Routing System",
            key: "routing-system",
            href: "https://www.creative-tim.com/learning-lab/react/routing-system/material-dashboard/",
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Components",
    key: "components",
    icon: <Icon fontSize="small">view_in_ar</Icon>,
    collapse: [
      {
        name: "Alerts",
        key: "alerts",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-dashboard/",
      },
      {
        name: "Avatar",
        key: "avatar",
        href: "https://www.creative-tim.com/learning-lab/react/avatar/material-dashboard/",
      },
      {
        name: "Badge",
        key: "badge",
        href: "https://www.creative-tim.com/learning-lab/react/badge/material-dashboard/",
      },
      {
        name: "Badge Dot",
        key: "badge-dot",
        href: "https://www.creative-tim.com/learning-lab/react/badge-dot/material-dashboard/",
      },
      {
        name: "Box",
        key: "box",
        href: "https://www.creative-tim.com/learning-lab/react/box/material-dashboard/",
      },
      {
        name: "Buttons",
        key: "buttons",
        href: "https://www.creative-tim.com/learning-lab/react/buttons/material-dashboard/",
      },
      {
        name: "Date Picker",
        key: "date-picker",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-dashboard/",
      },
      {
        name: "Dropzone",
        key: "dropzone",
        href: "https://www.creative-tim.com/learning-lab/react/dropzone/material-dashboard/",
      },
      {
        name: "Editor",
        key: "editor",
        href: "https://www.creative-tim.com/learning-lab/react/quill/material-dashboard/",
      },
      {
        name: "Input",
        key: "input",
        href: "https://www.creative-tim.com/learning-lab/react/input/material-dashboard/",
      },
      {
        name: "Pagination",
        key: "pagination",
        href: "https://www.creative-tim.com/learning-lab/react/pagination/material-dashboard/",
      },
      {
        name: "Progress",
        key: "progress",
        href: "https://www.creative-tim.com/learning-lab/react/progress/material-dashboard/",
      },
      {
        name: "Snackbar",
        key: "snackbar",
        href: "https://www.creative-tim.com/learning-lab/react/snackbar/material-dashboard/",
      },
      {
        name: "Social Button",
        key: "social-button",
        href: "https://www.creative-tim.com/learning-lab/react/social-buttons/material-dashboard/",
      },
      {
        name: "Typography",
        key: "typography",
        href: "https://www.creative-tim.com/learning-lab/react/typography/material-dashboard/",
      },
    ],
  },
  {
    type: "collapse",
    name: "Change Log",
    key: "changelog",
    href: "https://github.com/creativetimofficial/ct-material-dashboard-pro-react/blob/main/CHANGELOG.md",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    noCollapse: true,
  },*/
];

export default routes;
