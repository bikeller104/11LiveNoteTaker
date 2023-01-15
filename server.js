const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = 3001;


//middleware to server static files from the public directory
//since this comes before public/notes and public/index
//this will probably get called instead of those other lines



//create a log of requests for debugging
// app.use((req, res, next) =>
// { 
//     console.log(req.originalUrl);
//     console.log('---------------');
//     next(); 
// } );

app.use(express.static('public'));


app.use(router);
// serve the html pages when the user requests them
app.get('/public/notes', (req, res) => res.sendFile(path.join(__dirname,'/public/notes.html')));


//this is the catch all path so if the user inputs any path not caught by the other path handlers
//it will by default serve up the index.html page.
app.get('*', (req, res) => res.sendFile(path.join(__dirname,'/public/index.html')));


//start the application
app.listen(PORT, () => {
    console.log(`App Listening on port ${PORT}`);
});


