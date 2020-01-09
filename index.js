#!/usr/bin/env node
/**
 * Main code runs here
 * I have exported all the "features" to separate files
 * in order to keep maintainabilty easy.
 */

const LogReader= require('./logreader')
const Printer = require('./printer')
var pjson = require('./package.json');

// CLI options
const yargs = require('yargs');

const argv = yargs
  // .usage('This is Logreducer\n\nUsage: $0 [options]')
  .help('help').alias('help', 'h')
  .version('version', pjson.version).alias('version', 'v')
  .options({
    file: {
      alias: 'f',
      description: "<filename> Input file name of log",
      requiresArg: true,
      required: true
    },
    regex: {
      alias: 'r',
      description: "regex to parse through the logs",
      requiresArg: true,
      required: false
    },
    output: {
      alias: 'o',
      description: "<filename> output file name",
      requiresArg: true,
      required: false
    },
    count: {
      alias: 'c',
      description: "Displays records who's count is equal or greater than the value provided",
      requiresArg: true

    }
  })
  .argv;


// GUI options 


// Main functions


if (argv.file){
    try{
        const lr = new LogReader(argv);
        const printer = new Printer(argv);
        lr.readFile().then(data=>{
          printer.write(data)
        })
    }catch(e){
      yargs.usage(`Error on logreducer:\n${e}\n\nUsage: $0 [options]`)
      yargs.showHelp()
    }

}

