#! /usr/bin/env node
import * as utilCheck from '../src/esm/lib/util.check.js';
import * as utilDom from '../src/esm/lib/util.dom.js';
import * as utilHttp from '../src/esm/lib/util.http.js';
import * as utilLists from '../src/esm/lib/util.lists.js';
import * as utilMisc from '../src/esm/lib/util.misc.js';
import * as utilRegex from '../src/esm/lib/util.regex.js';

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
 * UPDATE THIS TO CREATE A NEW INDEX.HTML!!!!!
 */
ex(process.argv.slice(2));

function ex(arg) {
    console.log(`${colors.blue}utilCheck:${colors.reset}`)
    console.log(`${logExports(utilCheck)}`);
    console.log(`${colors.blue}utilDom:${colors.reset}`)
    console.log(`${logExports(utilDom)}`);
    console.log(`${colors.blue}utilHttp:${colors.reset}`)
    console.log(`${logExports(utilHttp)}`);
    console.log(`${colors.blue}utilLists:${colors.reset}`)
    console.log(`${logExports(utilLists)}`);
    console.log(`${colors.blue}utilMisc:${colors.reset}`)
    console.log(`${logExports(utilMisc)}`);
    console.log(`${colors.blue}utilRegex:${colors.reset}`)
    console.log(`${logExports(utilRegex)}`);
    console.log(`${colors.blue}All:${colors.reset}`)
    console.log(`${logExports(utilCheck)},`);
    console.log(`${logExports(utilDom)},`);
    console.log(`${logExports(utilHttp)},`);
    console.log(`${logExports(utilLists)},`);
    console.log(`${logExports(utilMisc)},`);
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
