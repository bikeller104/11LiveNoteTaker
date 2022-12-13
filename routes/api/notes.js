const notes = require('express').Router();

notes.get('/', (req, res) =>{
    res.json(JSON.stringify("notes/GET request"));
    //implement the notes get route
});

notes.post('/', (req, res) => {
    res.json(JSON.stringify("notes/POST request"));
    //implument the notes post route
});

module.exports = notes;