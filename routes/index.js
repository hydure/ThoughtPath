var express = require('express');

// Allows us to use the Express router
var router = express.Router();

// Set route for the homepage
router.get('/', function(request, response, next) {
    // Sends whatever we put here into the browser
    response.render('index.html');
});

// Export this to access this from other files
module.exports = router;