const printer = new (require('./printer'))
const reducedLog = []
const fs = require("fs")
const readline = require('readline');

module.exports = class LogReader{
    constructor(config) {
        // Check for all the necessary properties
        if ( typeof(config)!=="object") throw "missing options"
        if (!("file" in config)) throw "missing filename"
        this.config = config
    }
    async readFile(){
        checkFile.bind(this)()
        printer.write(await readLines.bind(this)())
        
    }
}

function checkFile(){
    if (!(fs.existsSync(this.config.file))) throw "file is missing or you don't have access"
}

function readLines(){
    return new Promise((res,rej) =>{
        printer.write("inside readlines")
        const readInterface = readline.createInterface({
            input: fs.createReadStream(this.config.file),
            // output: process.stdout,
            console: false
        });
        readInterface.on('line', function(line) {
            let objLine = line.split(/(\[.*?\]) ([A-Z]*) (.*)/).slice(1,4)
            pushToArray(reducedLog,{ date:objLine[0],type:objLine[1],msg:objLine[2]})
        })
        .on('close', ()=>{
            
            res(reducedLog.sort((a,b)=>a.count - b.count))
        })
    })    
}

function pushToArray(arr, obj) {
    const index = arr.findIndex((e) => e.msg === obj.msg);

    if (index === -1) {
        arr.push({count:1 ,...obj});
    } else {
        arr[index].count = arr[index].count+=1
    }
}