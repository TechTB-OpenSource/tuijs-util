//// IMPORTS ////
// Individual imports from './lib/util.misc.js'
import {
    addLeadZero
} from './lib/util.misc.js';
// Individual imports from './lib/util.convert.js'
import {
    convertListToJs,
    convertToJs,
    convertToJson
} from './lib/util.convert.js';
// Individual imports from './lib/util.test.js'
import {
    emailIsValid,
    isArray,
    isJson,
    isList,
    isObject,
    spaceCheck,
    stringCheckLow,
    stringCheckLowUpp,
    stringCheckNum,
    stringCheckSpec,
    urlIsValid
} from './lib/util.check.js';
// Individual imports from './lib/util.test.js'
import {
    reqGetJson,
    reqPostForm,
    reqPostJSON,
    urlAddHttp,
    urlAddHttps
} from './lib/util.http.js';
// Group imports
import * as utilMisc from '../lib/util.misc.js';
import * as utilConvert from '../lib/util.convert.js';
import * as utilCheck from '../lib/util.check.js';
import * as utilHttp from '../lib/util.http.js';

//// EXPORTS ////
// Individual exports from all
export {
    addLeadZero,
    convertListToJs,
    convertToJs,
    convertToJson,
    emailIsValid,
    isArray,
    isJson,
    isList,
    isObject,
    spaceCheck,
    stringCheckLow,
    stringCheckLowUpp,
    stringCheckNum,
    stringCheckSpec,
    urlIsValid,
    reqGetJson,
    reqPostForm,
    reqPostJSON,
    urlAddHttp,
    urlAddHttps
}

// All exports
const allUtils = {
    utilMisc,
    utilConvert,
    utilCheck,
    utilHttp
}
export default allUtils;
