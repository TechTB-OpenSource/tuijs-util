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

// Check for a list of text???
/**
 * IN WORK
 */
export function checkIsList(input) {
    try {
        // Check if the variable is a string
        if (typeof input !== 'string') {
            return false;
        }
        // Split the string by comma
        const items = input.split(',');
        // Check if all items are non-empty strings
        for (let item of items) {
            item = item.trim(); // Trim any leading or trailing whitespace
            if (item === '') {
                return false; // Empty item found
            }
        }
        return true;
    } catch (er) {
        throw new Error(`TUI Util Error: ${er.message}`);
    }
}
