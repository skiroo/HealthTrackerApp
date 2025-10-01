const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

const reportData = {
    weightProgress: [
        { date: '2024-12-01', weight: 70 },
        { date: '2024-12-02', weight: 69.8 },
        { date: '2024-12-03', weight: 69.5 },
        { date: '2024-12-04', weight: 69.3 },
        { date: '2024-12-05', weight: 69 },
    ],
    calorieBurned: [
        { date: '2024-12-01', calories: 400 },
        { date: '2024-12-02', calories: 450 },
        { date: '2024-12-03', calories: 500 },
        { date: '2024-12-04', calories: 480 },
        { date: '2024-12-05', calories: 510 },
    ],
};

// Endpoint to get weight progress
app.get('/reports/weight-progress', (req, res) => {
    res.json(reportData.weightProgress);
});

// Endpoint to get calories burned
app.get('/reports/calories-burned', (req, res) => {
    res.json(reportData.calorieBurned);
});

// Endpoint to add new weight entry
app.post('/reports/weight-progress', (req, res) => {
    const { date, weight } = req.body;
    if (date && weight) {
        reportData.weightProgress.push({ date, weight });
        res.status(201).json({ message: 'Weight data added successfully!', weightProgress: reportData.weightProgress });
    } else {
        res.status(400).json({ message: 'Invalid data. Please provide a valid date and weight.' });
    }
});

// Endpoint to add new calorie entry
app.post('/reports/calories-burned', (req, res) => {
    const { date, calories } = req.body;
    if (date && calories) {
        reportData.calorieBurned.push({ date, calories });
        res.status(201).json({ message: 'Calorie data added successfully!', calorieBurned: reportData.calorieBurned });
    } else {
        res.status(400).json({ message: 'Invalid data. Please provide a valid date and calories.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Reports API running at http://localhost:${port}`);
});