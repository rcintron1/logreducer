/**
 * The purpose of this class is to allow the ability to redirect
 * content to anywhere the user prefers.
 * ie. as logs are sent, they can be sent to screen, sent to file, sent to another syslog server
 */
module.exports = class Printer{

    constructor(config){
        this.config=config
        this.config.logging= this.config.logging || "default"
        this.config.count= this.config.count || 1
    }
    write(data){
        if (this.config.logging==="default"){
            this.data = data;
            writeToScreen.bind(this)();
        }
        if (this.config.logging==="mocha"){
            returnData.bind(this)();
        }
    }
    warn(msg){
        
    }
}

function writeToFile(){
    console.log("writeToFile", this.data)
}
function writeToScreen(){
    Array.isArray(this.data)?this.data
        .forEach((row)=>row.count>=this.config.count && console.log(row))
        :console.log(this.data)
}
function returnData(){
    return this.data
}