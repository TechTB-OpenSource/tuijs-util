import * as utilMisc from '../lib/util.misc.js';
import * as utilConvert from '../lib/util.convert.js';
import * as utilTest from '../lib/util.test.js';

const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

console.log(`${colors.blue}utilMisc:${colors.reset}`)
console.log(`${logExports(utilMisc)}
`);
console.log(`${colors.blue}utilConvert:${colors.reset}`)
console.log(`${logExports(utilConvert)}
`);
//console.log(logExports(utilTest))

function logExports(exports) {
    let arr = []
    Object.keys(exports).forEach(exportKey => {
        arr.push(exportKey);
    });
    const stringWithNewLines = arr.join(',\n');
    console.log(stringWithNewLines);
}
