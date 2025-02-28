# Infraspec-Material3-React Install #
```mermaid
flowchart LR

  %% Web Application
  A[Web Domain (Admin) <br> (Next.js Web App)] -->|User Access| B[ECS Task <br> Web App]
  B -->|API Calls| C[ECS Task <br> API (Nest.js)]
  C -->|Handles Requests| D[API Domain <br> (Nest.js API)]

  %% VPN Connection
  C -->|Initiates VPN| E[ECS Task <br> VPN Client]
  E -->|Manages Multiple VPNs| F[Power Stations]
  F -->|VPN Tunnel| G[Station 1]
  F -->|VPN Tunnel| H[Station 2]
  F -->|VPN Tunnel| I[Station N]

  %% Video Streaming
  C -->|Creates Stream URL| J[go2rtc API]
  J -->|Streams Camera Feed| K[Front-End Web App]

  %% Database and Logging
  C -->|Stores Data| L[(PostgreSQL DB)]
  E -->|Logs VPN Events| M[(VPN Logs <br> S3/CloudWatch)]

  %% AWS Infrastructure
  subgraph AWS Infrastructure
    B
    C
    E
    J
    L
    M
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

