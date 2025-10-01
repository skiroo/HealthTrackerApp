const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Array to store events
let events = [];

app.use(cors());
app.use(express.json());

// Get all events
app.get('/events', (req, res) => {
  res.json(events);
});

// Add a new event
app.post('/events', (req, res) => {
  const { name, date, time, importance, description } = req.body;

  // Validation: Check if all fields are provided
  if (name && date && time && importance) {
    const event = { name, date, time, importance, description: description || '' };
    events.push(event);
    res.status(201).json({
      message: 'Event added successfully!',
      events,
    });
  } else {
    res.status(400).json({
      message: 'Please provide all required fields (name, date, time, importance).',
    });
  }
});

// Delete an event
app.delete('/events/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  if (events[index]) {
    events.splice(index, 1);
    res.json({
      message: 'Event deleted successfully!',
      events,
    });
  } else {
    res.status(404).json({
      message: 'Event not found!',
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Events API running at http://localhost:${port}`);
});
