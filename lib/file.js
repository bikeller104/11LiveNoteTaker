const fs = require('fs');
const util = require('util');

const database = '../db/db.json';

const readFromFile = util.promisify(fs.readFile);

/**
 * this function takes a file path and a response object,
 * reads the data from the file, and outputs that data to
 * the http response
 */
readFromFileThenAppend(newData, filepath = database) 
{
     fs.readFile(filepath, 'utf8', (err, data) => {
        if(err) console.err(err);
        else{
            const array = JSON.parse(data);
            array.push(newdata);
            writeToFile(array);
        }
    });
}

writeToFile(data, filepath = database)
{
    fs.writeFile(JSON.stringify(data,null, 4),  filepath = database, (err) => {
        err? console.err(err):console.info(`\nData writen to ${filepath}`)
    });
}

module.exports = { readFromFile, readFromFileThenAppend, writeToFile };