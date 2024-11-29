// -----------------------------------------------
// Personal Portfolio
// Made with EJS and Bulma CSS
// -----------------------------------------------
// Made by Edward Deakin
// Credit appreciated but not enforced
// https://edwarddeakin.uk
// -----------------------------------------------

// Get all required modules
const express = require('express');
const app = express();
// Define the view engine to EJS
app.set('view engine', 'ejs');
// Define the static directory
app.use(express.static('public'));
// Render the pages
app.get('/', (req, res) => {
    res.render('index');
});
app.get('*', (req, res) => {
    res.render('index');
});
// Log and listen to port
app.listen(3200)
console.log('[🔌] Listening on Port 3200');
