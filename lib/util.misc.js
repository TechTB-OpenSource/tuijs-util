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

/**
 * Takes an HTML template literal, parses it with the DOM parser, then extracts the element with querySelectorAll.
 */
export function utilElmCleaner(templateLit) {
    try {
        let parser = new DOMParser();
        let elmBody = parser.parseFromString(templateLit, 'text/html');
        let elm = elmBody.body.querySelectorAll("*");
        return elm[0];
    } catch (er) {
        console.error(er);
        return;
    }
}
/**
 * Takes an HTML table row template literal, parses it with the DOM parser, then extracts the element with querySelectorAll.
 */
export function utilElmCleanerTr(templateLit) {
    try {
        let elmTemp = document.createElement('table');
        elmTemp.innerHTML = templateLit;
        let elm = elmTemp.querySelector("tr");
        elmTemp.remove();
        return elm;
    } catch (er) {
        console.error(er);
        return;
    }
}
