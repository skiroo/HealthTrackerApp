# HealthSync

HealthSync is a full-stack health tracking demo built for the Advanced Web Programming course. The project pairs a set of static Vue 3 pages with lightweight Express services that simulate event scheduling, weather alerts, and progress reporting.

## Highlights
- Dashboard aggregates fitness goals, upcoming events, and weather alerts through live Express endpoints.
- Fitness view lets users manage exercises, step targets, and calorie goals with persistent `localStorage`.
- Events manager offers calendar-based CRUD operations backed by the events API.
- Reports page charts weight and calories burned trends with Chart.js.

## Project Structure
```text
HealthTrackerApp/
├── backend/                # Express microservices (events, weather, reports)
│   ├── events.js           # Event CRUD endpoints on :3000
│   ├── weather.js          # Weather lookup endpoint on :3002
│   ├── reports.js          # Progress reporting endpoints on :3003
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── public/             # Static assets served by Vite (css, html, images)
    │   └── html/           # Main application pages (Dashboard, Fitness, Events, Reports)
    ├── src/                # Vite scaffolding (placeholder App.vue)
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js 18+ (comes with npm)

### 1. Install dependencies
```
cd backend
npm install

cd ../frontend
npm install
```

### 2. Run the backend services
Start each service in its own terminal (or use any process manager you prefer):

| Service  | Port | Purpose                  | Start command            |
|----------|------|--------------------------|--------------------------|
| Events   | 3000 | CRUD for calendar items  | `node events.js`         |
| Weather  | 3002 | City-based weather feed  | `node weather.js`        |
| Reports  | 3003 | Weight & calories data   | `node reports.js`        |

All services enable CORS and keep data in memory, so restarting them clears stored events and report entries.

### 3. Run the frontend
```
cd frontend
npm run dev
```
The Vite dev server prints a local URL (default http://localhost:5173). Open the dashboard at http://localhost:5173/html/Dashboard.html. The navigation sidebar links to the Fitness, Events, and Reports pages.

Optional:
- `npm run build` to generate static assets in frontend/dist.
- `npm run preview` to run Vite's production preview server after a build.

## API Reference

### Events service (http://localhost:3000)
- GET /events – Return the current event list.
- POST /events – Add an event. Body: { name, date, time, importance, description? }.
- DELETE /events/:index – Remove an event by array index (matches UI ordering).

### Weather service (http://localhost:3002)
- GET /weather/:city – Return weather details for a predefined city (London, Paris, Tokyo, etc.). Responds with { city, temperature, condition, humidity, windSpeed, country }.

### Reports service (http://localhost:3003)
- GET /reports/weight-progress – Fetch weight entries.
- GET /reports/calories-burned – Fetch calorie entries.
- POST /reports/weight-progress – Append { date, weight }.
- POST /reports/calories-burned – Append { date, calories }.

## Frontend Pages

- `Dashboard.html` – Greets the user, shows goal summaries, lists upcoming events, and surfaces weather alerts for a selected city.
- `Fitness.html` – Manages workouts plus step/calorie goals; data persists via browser `localStorage`.
- `Events.html` – Provides a monthly calendar and CRUD form connected to the events API.
- `Reports.html` – Visualises weight and calorie history with Chart.js and allows adding entries that sync with the reports API.

## Development Notes
- The Express services are intentionally lightweight and do not persist data to disk; consider wiring a database if long-term storage is needed.
- The Vue 3 CDN builds are embedded directly in the HTML templates to keep the pages framework-agnostic. The Vite scaffolding can be expanded later if you want to migrate the UI into a single-page app.
- No automated tests ship with the repository. Add unit or integration tests as you evolve the codebase.

## Troubleshooting
- If API calls fail with CORS errors, verify the backend scripts are running and that you're using the Vite dev URL (not the file:// scheme).
- Ports 3000, 3002, and 3003 must be free. Stop any conflicting processes or update the port constants in the respective service files.

Enjoy exploring and extending HealthSync!
