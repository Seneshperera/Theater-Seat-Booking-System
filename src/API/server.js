// File: server.js or app.js (your main server file)

const express = require('express');
const path = require('path');
const imageApi = require('./src/api/imageApi');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the image API router
app.use('/api', imageApi);

// For any other routes, serve the index.html (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});