class LogReader{
    constructor(config) {
        this.config = config
    }
    get checkLogLocation(){
        return "location" in this.config? this.config.location:"NoFile"
    }
}

module.exports = {LogReader}