/**
 * TTB-JS
 * TechTB JavaScript Utility Library
 * Conversion Utilities
 * Version 0.0.1
 */
import {
    checkIsArray,
    checkIsObject,
    checkIsList
} from './util.check.js';

export function convertToJson(input) {
    if (isArray(input) || isObject(input)) {
        return JSON.stringify(input);
    }
    if (isList(input)) {
        return JSON.stringify(convertListToJs(input));
    }
    return JSON.stringify(input);
}

export function convertToJs(input) {
    if (isJson(input)) {
        return JSON.parse(input);
    }
    if (isList(input)) {
        const items = convertListToJs(input);
        return items;
    }
    return JSON.stringify(input);
}

export function convertListToJs(input) {
    const items = input.split(',').map(item => item.trim());
    return items;
}
