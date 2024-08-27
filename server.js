/*
    Author: Happyuky7
    GitHub: https://github.com/Happyuky7/Basic-WebServer-NodeJS-V1
    Last Update: 2024/08/26 (YYYY/MM/DD)
    Description: A basic web server using Node.js, using the express module.
    License: Custom License
*/

// Import the express module and path module
const express = require('express');
const path = require('path');
const app = express();

// Define the port to run the server on
// You can set the port to any number that is not in use, 
// RECOMEDED: 3000, 8080, 5000, 8000, 4000, 7000, 6000
const PORT = 3000;

// Server static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Server the index.html file
app.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
