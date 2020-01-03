/**
 * The purpose of this class is to allow the ability to redirect
 * content to anywhere the user prefers.
 * ie. as logs are sent, they can be sent to screen, sent to file, sent to another syslog server
 */
module.exports = class Printer{

    constructor(config){
        config==null?this.config={logging:"default"}:this.config=config
    }
    write(data){
        if (this.config.logging==="default"){
            this.data = data;
            writeToScreen.bind(this)();
        }
    }
    
}

function writeToFile(){
    console.log("writeToFile", this.data)
}
function writeToScreen(data){
    console.log("writeToScreen", this.data)
}