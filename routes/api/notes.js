const notes = require('express').Router();

notes.get('/', (req, res) =>{
    console.log('get notes/ route called');
    //implement the notes get route
});

notes.post('/', (req, res) => {
    console.log('post notes/ route called');
    //implument the notes post route
});

module.exports = notes;