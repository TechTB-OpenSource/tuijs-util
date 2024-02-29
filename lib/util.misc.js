/**
 * TTB-JS
 * TechTB JavaScript Utility Library
 * Miscellaneous  Utilities
 * Version 0.0.1
 */

// Adds zero in front of numbers less than 10
export function addLeadZero(num) {
    try {
        if (num === null || typeof num !== 'number' || num > 9) {
            throw `Invalid input.`;
        };
        num = "0" + num;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}
