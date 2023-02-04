const notes = require('express').Router();
const fs = require('fs');
const fileUtil = require('../../lib/file'); 

const database = './db/db.json';

notes.get('/', (req, res) =>{
    //res.json(JSON.stringify("notes/GET request"));
    //implement the notes get route

    fs.readFile('./db/db.json', 'utf-8', (err,data)=>{
        console.log(data);
        res.json(JSON.parse(data))
    });

   // fileUtil.readFile

});

notes.post('/', (req, res) => {
    //implument the notes post route
    let data = /*JSON.parse(*/req.body/*)*/;
    console.log(data );
    fileUtil.readFromFileThenAppend(req.body,database);
    
    
    res.json(JSON.stringify("notes/POST request"));
    // fs.readFile('./db/db.json', (err,data)=>{

    //     res.json(data)
    // });
});

module.exports = notes;