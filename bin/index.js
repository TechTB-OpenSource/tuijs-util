#! /usr/bin/env node
import * as utilCheck from '../lib/util.check.js';
import * as utilConvert from '../lib/util.convert.js';
import * as utilHttp from '../lib/util.http.js';
import * as utilMisc from '../lib/util.misc.js';
import * as utilRegex from '../lib/util.regex.js';
//import * as utilTest from '../lib/util.test.js';

const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

/**
 * UPDATE THIS TO JUST CREATE A NEW INDEX.HTML!!!!!
 */
ex(process.argv.slice(2));

function ex(arg) {
    console.log(`${colors.blue}utilCheck:${colors.reset}`)
    console.log(`${logExports(utilCheck)}
`);
    console.log(`${colors.blue}utilConvert:${colors.reset}`)
    console.log(`${logExports(utilConvert)}
`);
    console.log(`${colors.blue}utilHttp:${colors.reset}`)
    console.log(`${logExports(utilHttp)}
`);
    console.log(`${colors.blue}utilMisc:${colors.reset}`)
    console.log(`${logExports(utilMisc)}
`);
    console.log(`${colors.blue}utilRegex:${colors.reset}`)
    console.log(`${logExports(utilRegex)}
`);
    console.log(`${colors.blue}All:${colors.reset}`)
    console.log(`${logExports(utilMisc)},`);
    console.log(`${logExports(utilConvert)},`);
    console.log(`${logExports(utilCheck)},`);
    console.log(`${logExports(utilHttp)},`);
    console.log(`${logExports(utilRegex)},`);
}

function logExports(exports) {
    let arr = []
    Object.keys(exports).forEach(exportKey => {
        arr.push(exportKey);
    });
    const stringWithNewLines = arr.join(',\n');
    return stringWithNewLines;
}
