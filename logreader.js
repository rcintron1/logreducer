const printer = new (require('./printer'))

const fs = require("fs"),
    readline = require('readline');

module.exports = class LogReader{
    constructor(config) {
        // Check for all the necessary properties
        if ( typeof(config)!=="object") throw "missing options"
        if (!("logfilename" in config)) throw "missing filename"
        this.config = config
    }
    readFile(){
        checkFile.bind(this)()
        readLines.bind(this)()
    }
}

function checkFile(){
    if (!(fs.existsSync(this.config.logfilename))) throw "file is missing or you don't have access"
}

async function readLines(){
    printer.write("inside readlines")
    const readInterface = readline.createInterface({
        input: fs.createReadStream(this.config.logfilename),
        output: process.stdout,
        console: false
    });
    readInterface.on('line', function(line) {
        console.log(line);
    });
}