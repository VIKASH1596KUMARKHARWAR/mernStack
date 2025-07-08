const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

/*
// Sample statistics data
const stats = {
    network: 15,
    jobs: 8,
    messaging: 7,
    notifications: 5,
};
// Stats endpoint
app.get('/notifications', (req, res) => {
    res.json(stats);
});
*/

function getRandomStats() {
    return {
        network: Math.floor(Math.random() * 100), // Random value between 0-99
        jobs: Math.floor(Math.random() * 100),
        messaging: Math.floor(Math.random() * 100),
        notifications: Math.floor(Math.random() * 100),
    };
}

app.get('/notifications', (req, res) => {
    res.json(getRandomStats());
});

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the stats server!',
        endpoint: '/stats',
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
