var assert = require('assert');
const { exec } = require('child_process');
noOptionExpectedResult='Options:\n  --help, -h     Show help                                             [boolean]\n  --version, -V  Show version number                                   [boolean]\n  --file, -f     <filename> Input file name of log                    [required]\n  --regex, -r    regex to parse through the logs\n  --output, -o   <filename> output file name\n\nMissing required argument: file\n'


    describe('Test Login Prompt', function() {
      it('should return instructions when no option is included', function(done) {
        exec('node index.js', (error, stdout, stderr) => {
            assert.equal(`${stderr}`,noOptionExpectedResult);
            done()
          });
      });
    });

  