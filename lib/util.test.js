/**
 * TTB-JS
 * TechTB JavaScript Utility Library
 * Test Utilities
 * Version 0.0.1
 */
function compareArrays(arrA, arrB) {
    const noMatch = [];
    for (let item of arrA) {
        if (!arrB.includes(item)) {
            noMatch.push(item);
        }
    }
    return noMatch;
}

function valuesNotInArrayA(arrA, arrB) {
    return arrB.filter(value => !arrA.includes(value));
}

function removeDup(arr) {
    return Array.from(new Set(arr));
}
