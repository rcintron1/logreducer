#!/usr/bin/env node
/**
 * Main code runs here
 * I have exported all the "features" to separate files
 * in order to keep maintainabilty easy.
 */

const LogReader= require('./logreader')
var pjson = require('./package.json');

// CLI options
const yargs = require('yargs');

const argv = yargs
  // .usage('This is Logreducer\n\nUsage: $0 [options]')
  .help('help').alias('help', 'h')
  .version('version', pjson.version).alias('version', 'V')
  .options({
    file: {
      alias: 'f',
      description: "<filename> Input file name of log",
      requiresArg: true,
      required: true
    },
    output: {
      alias: 'o',
      description: "<filename> output file name",
      requiresArg: true,
      required: false
    }
  })
  .argv;


// GUI options 


// Main functions


if (argv.file){
    try{
        const lr = new LogReader({logfilename:argv.file});
        lr.readFile()
    }catch(e){
      yargs.usage(`Error on logreducer:\n${e}\n\nUsage: $0 [options]`)
      yargs.showHelp()
    }

}

