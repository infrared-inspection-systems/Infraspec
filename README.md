#### User Dashboard

This will be a custom dashboard per user.  Each user will have to ability to add widgets from any of the other main dashboards to create a custom user experience.
This could include system health check, devices online, device/shortcut links, weather, time, notifications, logs, snapshots, graphs, ups battery, and any other widgets that are available in the below menus.  Drag and drop widgets would be great here.

#### Dashboard Main

Include: "live" dashboard with current health of all devices, latest notifcations, latest snapshots, recent detection, intrusion, temperature graphs (daily and weekly)  We can add long term data in the trends dashboard.  *Three buttons for confirmed alert, false alarm, and neutral.  This will be important for historical trends and future configuration.

#### Dashboard Trends

Include: "historical" trend data. We want this one to stand out. Colorful graphs to show how the system is running overtime.  So trends of intrusion, fire detection, AI. Temperature graphs will show temperature differences between areas and targets.  Temperature threshold graph will show how close each preset is getting to the set threshold.  Will can also have a mini thermal map with details on each "site" and avg. temperatures taken at each.

#### Notifications

Include: Notfications that can be searched or filtered.  We would also want to have positve, false, and neutral confirmations.  Calendar, Snapshot, Type, Date, Time, Device Name, Location, Preset.

# Infraspec Install #

Terminal Commands
1.Download and Install NodeJs LTS version from NodeJs Official Page.
2.Navigate to the root ./ directory of the product and run npm install to install our local dependencies.
2 Npm Start

# Infraspec V2 #

	├── Account (custom dashboard per user)
	├── Dashboard Main # Devices status, Hardware Status, Weather, Daily Notifcations, Links #, Daily/Weekly Graphs. 
    ├── Trends # YTD/Monthly Include Temperature Graphs, AI Detection Results, Positive/Neutral/False Alarms, Export, Links #
	├── Notications # Temperature Warnings, Notifcations, Human, Vehicle, Temperature Alarms, Fire, Object Left, Images, Color Coded, Links) #
	    └── Calendar  # Temperature Warnings, Notifcations, Human, Vehicle, Temperature Alarms, Fire, Object Left, Color Coded) #
    └── Reports
        ├── Patrol Calendar
        └── Inspection Record
    ├── Device
        ├── Live View
        ├── NVR 1 (Dashboard)
        ├── Camera 1 (Dashboard)
        ├── Recordings (NVR for now)
        └── Settings
    ├── Location
	    ── Map
            ├── Country
            ├── State
            └── Site
        └── Substation 1
            └── Bay 1
                ├── Arestors
                ├── Disconnects
                ├── Circuit Breakers
                ├── Insulators
                ├── CTs
                ├── VTs
                ├── Capacitors
                └── Transformers
    └── Settings
	    ├── Basic
	    ├── Users
	    ├── Logs

## File Structure

    ├── public
    │   ├── apple-icon.png
    │   ├── favicon.png
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── images
    │   │   ├── theme
    │   │   │   ├── base
    │   │   │   ├── components
    │   │   │   ├── functions
    │   │   │   ├── index.js
    │   │   │   └── theme-rtl.js
    │   │   └── theme-dark
    │   │       ├── base
    │   │       ├── components
    │   │       ├── functions
    │   │       ├── index.js
    │   │       └── theme-rtl.js
    │   ├── components
    │   │   ├── MDAlert
    │   │   ├── MDAvatar
    │   │   ├── MDBadge
    │   │   ├── MDBadgeDot
    │   │   ├── MDBox
    │   │   ├── MDButton
    │   │   ├── MDDatePicker
    │   │   ├── MDDropzone
    │   │   ├── MDEditor
    │   │   ├── MDInput
    │   │   ├── MDPagination
    │   │   ├── MDProgress
    │   │   ├── MDSnackbar
    │   │   ├── MDSocialButton
    │   │   └── MDTypography
    │   ├── context
    │   ├── examples
    │   │   ├── Breadcrumbs
    │   │   ├── Calendar
    │   │   ├── Cards
    │   │   ├── Charts
    │   │   ├── Configurator
    │   │   ├── Footer
    │   │   ├── Items
    │   │   ├── LayoutContainers
    │   │   ├── Lists
    │   │   ├── Navbars
    │   │   ├── Sidenav
    │   │   ├── Tables
    │   │   └── Timeline
    │   ├── layouts
    │   │   ├── applications
    │   │   │    ├── calendar
    │   │   │    ├── data-tables
    │   │   │    ├── kanban
    │   │   │    └── wizard
    │   │   ├── authentication
    │   │   │    ├── components
    │   │   │    ├── reset-password
    │   │   │    ├── sign-in
    │   │   │    └── sign-up
    │   │   ├── dashboards
    │   │   │    ├── analytics
    │   │   │    └── sales
    │   │   ├── ecommerce
    │   │   │    ├── orders
    │   │   │    └── products
    │   │   └── pages
    │   │        ├── account
    │   │        ├── charts
    │   │        ├── notifications
    │   │        ├── pricing-page
    │   │        ├── profile
    │   │        ├── projects
    │   │        ├── rtl
    │   │        ├── users
    │   │        └── widgets
    │   ├── App.js
    │   ├── index.js
    │   ├── page.routes.js
    │   └── routes.js
    ├── .eslintrc.json
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLATE.md
    ├── jsconfig.json
    ├── package.json
    └── README.md

npm install material-design-icons --save

Then add the following to styles.css:

@import '~material-design-icons/iconfont/material-icons.css';