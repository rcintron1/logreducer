const Printer = require('./printer')
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
    if (!(fs.existsSync(this.config.logfilename))) throw "missing"
}

async function readLines(){
    console.log("inside readlines")
}