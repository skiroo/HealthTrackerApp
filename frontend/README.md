# HealthSync - README

Welcome to **HealthSync**, your personalized health tracking application. This app allows users to track their fitness activities, manage events, monitor progress through reports, and stay motivated to achieve their health goals.

---

## File Structure

The root of the application is located at:

```
HealthTrackerApp/
```

### Key Files and Folders

1. **Node.js Files**
   - **API Endpoints**: 
     - `HealthTrackerApp/backend/events.js` - Handles API requests for event management.
     - `HealthTrackerApp/backend/reports.js` - Manages API requests for reports (weight and calories).
     - `HealthTrackerApp/backend/weather.js` - Provides weather data for the dashboard and weather alerts.
   - **How to Run**:
     1. Navigate to the backend directory:
        ```bash
        cd HealthTrackerApp/backend
        ```
     2. Install required dependencies:
        ```bash
        npm install
        ```
     3. Run the Node.js files (for example, `events.js`):
        ```bash
        node events.js
        ```
     4. Run `reports.js` in a separate terminal window:
        ```bash
        node reports.js
        ```
     5. Run `weather.js` in another terminal window:
        ```bash
        node weather.js
        ```

2. **Frontend Files**
   - **Dashboard File**:
     - `HealthTrackerApp/html/Dashboard.html` - The main dashboard page for users to access health data and features.
   - **Other Pages**:
     - `HealthTrackerApp/html/Fitness.html` - Track exercises and fitness goals.
     - `HealthTrackerApp/html/Events.html` - Manage events.
     - `HealthTrackerApp/html/Reports.html` - Monitor weight and calorie data.

---

## How to Run the Frontend

1. Open your web browser.
2. Navigate to the frontend directory.
3. Open the **Dashboard.html** file to start the application:
   ```bash
   HealthTrackerApp/html/Dashboard.html
   ```
4. All other pages (Fitness, Events, Reports) can be accessed from the sidebar navigation.

---

## Mounting Node.js APIs

To ensure the frontend interacts correctly with the backend APIs:

1. **Events API**:
   - Mounts on `http://localhost:3000`.
   - Used by `Events.html` for managing events.

2. **Reports API**:
   - Mounts on `http://localhost:3003`.
   - Used by `Reports.html` to manage weight and calorie data.

3. **Weather API**:
   - Mounts on `http://localhost:3002`.
   - Used by `Dashboard.html` for weather alerts and city-specific data.

---

## Important Notes

1. Make sure you have **Node.js** installed before running the backend files.
2. Ensure the backend APIs (`events.js`, `reports.js`, and `weather.js`) are running before using their respective frontend pages.
3. Always keep the project structure intact for seamless functionality.

---

Enjoy using HealthSync! Let us know if you encounter any issues.

