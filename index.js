const LogReader= require('./logreader').LogReader
const lr = new LogReader({location:"./kafkaServer.out"});

console.log(lr)
