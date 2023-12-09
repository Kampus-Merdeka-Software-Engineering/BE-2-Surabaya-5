const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serves static files from another folder
app.use('/css', express.static(path.join(__dirname, '..', 'css')));
app.use('/asset', express.static(path.join(__dirname, '..', 'asset')));
app.use('/js', express.static(path.join(__dirname, '..', 'js')));

app.get('/schedule', (req, res) => {
    res.sendFile(path.join(__dirname, 'backend', 'schedule.json'));
  });
  
  app.get('/trips', (req, res) => {
    res.sendFile(path.join(__dirname, 'backend', 'trips.json'));
  });  

// Handles all routes by sending HTML files from the root
app.get('*', (req, res) => {
    const fileName = req.url.endsWith('.html') ? req.url.slice(1) : 'index.html';
    res.sendFile(path.join(__dirname, '..', fileName));
});

// Start the server on a specific port
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
