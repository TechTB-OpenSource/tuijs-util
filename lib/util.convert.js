/**
 * TTB-JS
 * TechTB JavaScript Utility Library
 * Conversion Utilities
 * Version 0.0.1
 */
import {
    isArray,
    isObject,
    isList
} from './util.misc.js';

export function convertToJson(input) {
    if (isArray(input)) {
        console.log('array')
        return JSON.stringify(input);
    }
    if (isObject(input)) {
        console.log('object')
        return JSON.stringify(input);
    }
    if (isList(input)) {
        return JSON.stringify(convertListToJs(input));
    }
    return JSON.stringify(input);
}

export function convertListToJs(input) {
    const items = input.split(',').map(item => item.trim());
    return items;
}