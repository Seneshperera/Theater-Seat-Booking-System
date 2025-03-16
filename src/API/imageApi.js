// File: src/api/imageApi.js

const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Serve actual image files from assets directory
router.get('/assets/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '../../assets', imageName);
  
  // Check if the file exists
  if (fs.existsSync(imagePath)) {
    return res.sendFile(imagePath);
  } else {
    // If image doesn't exist, return a default placeholder
    return res.redirect(`/api/placeholder/300/450?text=${imageName}`);
  }
});

// Generate placeholder images with specified dimensions
router.get('/placeholder/:width/:height', (req, res) => {
  const width = parseInt(req.params.width) || 300;
  const height = parseInt(req.params.height) || 450;
  const text = req.query.text || 'Movie Poster';
  const bgColor = req.query.bg || 'darkgray';
  const textColor = req.query.textColor || 'white';
  
  // Set content type for SVG
  res.setHeader('Content-Type', 'image/svg+xml');
  
  // Generate SVG placeholder
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial" font-size="16" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `;
  
  res.send(svg);
});

module.exports = router;