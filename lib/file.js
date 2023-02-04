const fs = require('fs');
const util = require('util');

const database = './db/db.json';

const readFromFile = util.promisify(fs.readFile);

/*
 * this function takes a file path and a response object,
 * reads the data from the file, and outputs that data to
 * the http response
 */
readFromFileThenAppend = function(newdata, filepath = database) 
{
     fs.readFile(filepath, 'utf8', (err, data) => {
        if(err) console.log(err);
        else{
            const array = JSON.parse(data);
            array.push(newdata);
            writeToFile(array);
        }
    });
}

function writeToFile(data, filepath = database)
{
    fs.writeFile(filepath = database, JSON.stringify(data,null, 4),   (err) => {
        err? console.log(err):console.info(`\nData writen to ${filepath}`)
    });
}

module.exports = { readFromFile, readFromFileThenAppend, writeToFile };