const notes = require('express').Router();
const fs = require('fs');

notes.get('/', (req, res) =>{
    //res.json(JSON.stringify("notes/GET request"));
    //implement the notes get route

    fs.readFile('./db/db.json', 'utf-8', (err,data)=>{
        console.log(data);
        res.json(JSON.parse(data))
    });

});

notes.post('/', (req, res) => {
    res.json(JSON.stringify("notes/POST request"));
    //implument the notes post route

    
    
    // fs.readFile('./db/db.json', (err,data)=>{

    //     res.json(data)
    // });
});

module.exports = notes;