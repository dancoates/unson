import execute from './execute';
import initRepl from './initRepl';
import yargs from 'yargs';

const argv = yargs
  .usage('Usage: $0 [options] <pipeline>')
  .boolean('i')
  .alias('i', 'interactive')
  .describe('i', 'show interactive repl to write and edit pipeline')
  .number('n')
  .alias('n', 'indent')
  .describe('n', 'indent level for output json')
  .help('h')
  .alias('h', 'help')
  .strict()
  .argv;


const pipeline = ['identity()'].concat(argv._);
const interactive = argv.interactive;
const indent = argv.indent || 2;

let rawData = '';
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        rawData += chunk;
    }
});

process.stdin.on('end', () => {
    const data = JSON.parse(rawData);

    if(interactive) {
        process.stdin.end();
        initRepl({pipeline, indent, data});
    } else {
        const result = execute({data, pipeline});
        process.stdout.write(JSON.stringify(result, null, indent) + '\n');
    }
});