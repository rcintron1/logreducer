var assert = require('assert');
const { exec } = require('child_process');
noOptionExpectedResult='Options:\n  --help, -h     Show help                                             [boolean]\n  --version, -V  Show version number                                   [boolean]\n  --file, -f     <filename> Input file name of log                    [required]\n  --regex, -r    regex to parse through the logs\n  --output, -o   <filename output file name\n\nMissing required argument: file\n'



describe('Array', function() {
    describe('Test Login Prompt', function() {
      it('should return instructions when no option is included', function() {
        exec('node ../index.js', (error, stdout, stderr) => {
            if (error) {
              console.log(`${stderr}`);
            //   console.log(noOptionExpectedResult)
              // return;
            }
            assert.equal(`${stderr}`,noOptionExpectedResult);            
          //   console.log({stdout: `${stdout}`});
          //   console.log({stderr: `${stderr}`});
          //   console.log({error: `${error}`})
          });
      });
    });
  });

  