const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

const weatherData = {
    London: { temperature: 15, condition: 'Cloudy', humidity: 80, windSpeed: 10, country: 'UK' },
    Paris: { temperature: 18, condition: 'Sunny', humidity: 65, windSpeed: 8, country: 'France' },
    NewYork: { temperature: 12, condition: 'Rainy', humidity: 90, windSpeed: 15, country: 'USA' },
    Tokyo: { temperature: 20, condition: 'Clear', humidity: 70, windSpeed: 12, country: 'Japan' },
    Sydney: { temperature: 25, condition: 'Sunny', humidity: 50, windSpeed: 5, country: 'Australia' },
    Berlin: { temperature: 10, condition: 'Windy', humidity: 85, windSpeed: 20, country: 'Germany' },
    LosAngeles: { temperature: 22, condition: 'Sunny', humidity: 60, windSpeed: 7, country: 'USA' },
    Madrid: { temperature: 19, condition: 'Partly Cloudy', humidity: 55, windSpeed: 6, country: 'Spain' },
    Rome: { temperature: 17, condition: 'Clear', humidity: 75, windSpeed: 4, country: 'Italy' },
    CapeTown: { temperature: 16, condition: 'Cloudy', humidity: 80, windSpeed: 11, country: 'South Africa' },
    Moscow: { temperature: 5, condition: 'Snowy', humidity: 70, windSpeed: 20, country: 'Russia' },
    RioDeJaneiro: { temperature: 28, condition: 'Sunny', humidity: 65, windSpeed: 9, country: 'Brazil' },
    Cairo: { temperature: 30, condition: 'Sunny', humidity: 40, windSpeed: 13, country: 'Egypt' },
    Dubai: { temperature: 35, condition: 'Clear', humidity: 45, windSpeed: 5, country: 'UAE' },
    Beijing: { temperature: 13, condition: 'Foggy', humidity: 65, windSpeed: 10, country: 'China' },
    Toronto: { temperature: 10, condition: 'Rainy', humidity: 85, windSpeed: 15, country: 'Canada' },
    BuenosAires: { temperature: 23, condition: 'Partly Cloudy', humidity: 60, windSpeed: 8, country: 'Argentina' },
    MexicoCity: { temperature: 18, condition: 'Clear', humidity: 55, windSpeed: 7, country: 'Mexico' },
    Jakarta: { temperature: 27, condition: 'Cloudy', humidity: 80, windSpeed: 6, country: 'Indonesia' },
    Bangkok: { temperature: 29, condition: 'Sunny', humidity: 70, windSpeed: 10, country: 'Thailand' },
};

// Get all weather
app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    const weather = weatherData[city];

    if (weather) {
        res.json({ city, ...weather });
    } else {
        res.status(404).json({ error: 'City not found' });
    }
});

app.listen(port, () => {
    console.log(`Weather API running at http://localhost:${port}`);
});