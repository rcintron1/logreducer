/**
 * The purpose of this class is to allow the ability to redirect
 * content to anywhere the user prefers.
 * ie. as logs are sent, they can be sent to screen, sent to file, sent to another syslog server
 */
module.exports = class Printer{

    constructor(config){
        config.logging==null?this.config={logging:"default"}:this.config=config
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
    Array.isArray(this.data)?this.data.forEach(console.log):console.log(this.data)
}
function returnData(){
    return this.data
}