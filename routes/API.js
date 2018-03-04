var express = require('express');

// Allows us to use the Express router
var router = express.Router();

// bring in mongoJS
var mongojs = require ('mongojs');

// get this from mlab
// mongodb://<dbuser>:<dbpassword>@ds255308.mlab.com:55308/thoughtpathcloud
// array has the collections we want to use
var db = mongojs('mongodb://Colin:Colin@ds255308.mlab.com:55308/thoughtpathcloud', ['therapists', 'clients']);


///////////////////// Therapists Collection API /////////////////////////////

// Set route for the website to get all therapists
router.get('/therapists', function(req, res, next) {

    // try and get the collection of therapists documents
    db.therapists.find(function(err, therapists) {
        if(err){
            res.send(err);
        }
        // if no err in getting the collection of therapists
        else {
            res.json(therapists);
        }
    });
});

// set route for the website to get a single therapist
router.get('/therapists/:id', function(req, res, next) {

    // try and get specific therapist documents
    db.therapists.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, therapist) {
        if(err){
            res.send(err);
        }
        // if no err in getting the client
        else {
            res.json(therapist);
        }
    });
});

// Save therapist data from form
router.post('/therapists', function(req, res, next){
    var therapist = req.body;
    
    if(!therapist.name){
        // returns error status
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    }
    else {
        db.therapists.save(therapist, function(err, therapist){
            if(err){
                res.send(err);
            }
            else{
                res.json(therapist);
            }
        });
    }
});

// Delete therapist data
router.delete('/therapists/:id', function(req, res, next) {

    // try and get specific therapist documents
    db.therapists.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, therapist) {
        if(err){
            res.send(err);
        }
        // if no err in getting the client
        else {
            res.json(therapist)
        }
    });
});

// Update therapist data
router.put('/therapists/:id', function(req, res, next) {
    // Get information from the form
    var therapist = req.body;
    var updateTherapist = {};

    // Copy form data to update therapist JSON object attributes
    if(therapist.name){
        updateTherapist.name = therapist.name
        updateTherapist.password = therapist.password;
        updateTherapist.hobby = therapist.hobby;
        updateTherapist.age = therapist.age;
    }

    // Check to see if therapist is actually updated
    if(!updateTherapist){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else {
        // try and get specific therapist documents
        db.therapists.update({_id: mongojs.ObjectId(req.params.id)}, updateTherapist, {}, function(err, therapist) {
            if(err){
                res.send(err);
            }
            // if no err in getting the therapist
            else {
                res.json(therapist)
            }
        });
    }
});

////////////////////// Clients Collection API /////////////////////////////

// Set route for the website to get all clients
router.get('/clients', function(req, res, next) {

    // try and get the collection of therapists documents
    db.clients.find(function(err, clients) {
        if(err){
            res.send(err);
        }
        // if no err in getting the collection of therapists
        else {
            res.json(clients)
        }
    });
});

// set route for the website to get a single client
router.get('/clients/:id', function(req, res, next) {

    // try and get specific therapist documents
    db.clients.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, client) {
        if(err){
            res.send(err);
        }
        // if no err in getting the client
        else {
            res.json(client)
        }
    });
});

// Save client data from form
router.post('/clients', function(req, res, next){
    var client = req.body;
    if(!client.name){
        // returns error status
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    }
    else {
        db.clients.save(client, function(err, client){
            if(err){
                res.send(err);
            }
            res.json(client);
        });
    }
});

// Delete client
router.delete('/clients/:id', function(req, res, next) {

    // try and get specific therapist documents
    db.clients.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, client) {
        if(err){
            res.send(err);
        }
        // if no err in getting the client
        res.json(client)
    });
});

// Update client data
router.put('/clients/:id', function(req, res, next) {
    // Get information from the form
    var client = req.body;
    var updateClient = {};

    // Copy form data to update client JSON object attributes
    if(client.name){
        updateClient.name = client.name
        updateClient.password = therapist.password;
        updateClient.hobby = therapist.hobby;
        updateClient.age = therapist.age;
    }

    // Check to see if clent is actually updated
    if(!updateClient){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else {
        // try and get specific  client documents
        db.clients.update({_id: mongojs.ObjectId(req.params.id)}, updateClient, {}, function(err, client) {
            if(err){
                res.send(err);
            }
            // if no err in getting the client
            res.json(client)
        });
    }
});


// Export this to access this from other files
module.exports = router;