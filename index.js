//// IMPORTS ////
// Individual imports from './lib/util.misc.js'
import {
    addLeadZero,
    emailIsValid,
    isArray,
    isList,
    isObject,
    reqGetJson,
    reqPostForm,
    reqPostJSON,
    spaceCheck,
    stringCheckLow,
    stringCheckLowUpp,
    stringCheckNum,
    stringCheckSpec,
    urlAddHttp,
    urlAddHttps,
    urlIsValid
} from './lib/util.misc.js';
// Individual imports from './lib/util.convert.js'
import {
    convertListToJs,
    convertToJson
} from './lib/util.convert.js';
// Individual imports from './lib/util.test.js'
import {
} from './lib/util.test.js';
// Group imports
import * as utilMisc from './lib/util.misc.js';
import * as utilConvert from './lib/util.convert.js';
import * as utilTest from './lib/util.test.js';

//// EXPORTS ////
// Individual exports from all
export {
    addLeadZero,
    convertListToJs,
    convertToJson,
    emailIsValid,
    isArray,
    isList,
    isObject,
    reqGetJson,
    reqPostForm,
    reqPostJSON,
    spaceCheck,
    stringCheckLow,
    stringCheckLowUpp,
    stringCheckNum,
    stringCheckSpec,
    urlAddHttp,
    urlAddHttps,
    urlIsValid
}

// All exports
const allUtils = {
    utilMisc,
    utilConvert,
    utilTest
}
export default allUtils;
