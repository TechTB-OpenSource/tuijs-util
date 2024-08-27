import * as check from './lib/util.check.js';
import * as dom from './lib/util.dom.js';
import * as http from './lib/util.http.js';
import * as lists from './lib/util.lists.js';
import * as misc from './lib/util.misc.js';
import * as regex from './lib/util.regex.js';

export { check };
export const {
    checkEmail,
    checkFqdn,
    checkIsArray,
    checkIsJson,
    checkIsList,
    checkIsObject,
    checkLowercase,
    checkNum,
    checkSpaces,
    checkSpecialChar,
    checkUppercase,
    checkUrl
} = check;

export { dom };
export const {
    elmCleaner,
    elmCleanerArray,
    elmCleanerTr,
    parseTemplate
} = dom;

export { http };
export const {
    reqFileJson,
    reqGet,
    reqPostForm,
    reqPostJson,
    urlAddHttp,
    urlAddHttps
} = http;

export { lists };
export const {
    htmlTags
} = lists;

export { misc };
export const {
    addLeadZero,
    generateUID,
    preloadImages,
    sleep
} = misc;

export { regex };
export const {
    binary,
    hexadecimal,
    letters,
    lettersLower,
    lettersUpper,
    numbers,
    removeChar,
    special
} = regex;
