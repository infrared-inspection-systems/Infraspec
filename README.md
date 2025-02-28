# Infraspec-Material3-React Install #
```mermaid
graph TD
  %% Web Application
  A[Web Domain (Admin)] -->|Next.js Web App| B[ECS Task - Web App]
  B -->|API Calls| C[ECS Task - API]
  C -->|Handles Requests| D[API Domain (Nest.js API)]

  %% VPN Connection
  C -->|Triggers VPN Connection| E[ECS Task - VPN Client]
  E -->|OpenVPN Client| F[Power Stations (Multiple Locations)]

  %% Database and Logging
  C -->|Stores Data| G[(PostgreSQL DB)]
  E -->|Logs Connection Events| H[(VPN Access Logs - S3/CloudWatch)]

  %% Additional Details
  subgraph AWS Infrastructure
    B
    C
    E
    G
    H
  end
```


npm install
npm start

# Infraspec V2 #

	├── Account (custom dashboard per user)
|
	├── Dashboard Main # Devices status, Hardware Status, Weather, Daily Notifcations, Links #, Monthly/YTD Graphs. 
    ├── Trends # Include Temperature Graphs, AI Detection Results, Positive/Neutral/False Alarms, Export, Links #
	├── Notications # Temperature Warnings, Notifcations, Human, Vehicle, Temperature Alarms, Fire, Object Left, Images, Color Coded, Links) #
	    └── Calendar  # Temperature Warnings, Notifcations, Human, Vehicle, Temperature Alarms, Fire, Object Left, Color Coded) #
    └── Reports
        ├── Patrol Calendar
        └── Inspection Record
|
    ├── Device
        ├── Live View
        ├── NVR 1 (Dashboard)
        ├── Camera 1 (Dashboard)
        ├── Recordings (NVR for now)
        └── Settings
|
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
|
|
    └── Settings
	    ├── Basic
	    ├── Users
	    ├── Logs

        

I'm building for Angular 4/5 and often working offline and so the following worked for me. First install the NPM:

npm install material-design-icons --save

Then add the following to styles.css:

@import '~material-design-icons/iconfont/material-icons.css';

