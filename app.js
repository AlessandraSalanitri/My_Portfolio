const express = require('express');
const path = require('path');

const app = express();

// Set up middleware to serve static files from the public folder
app.use(express.static(path.join(__dirname)));

// Serve the boot page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the main page (main.html)
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// Define the route for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Serve the loading page (loading.html) for the unlock animation
app.get('/loading', (req, res) => {
    res.sendFile(path.join(__dirname, 'loading.html')); // Serve the loading animation page
});

// Define the route for about page
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

// Define the route for about page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
