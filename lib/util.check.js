/**
 * TTB-JS
 * TechTB JavaScript Utility Library
 * Checker Utilities
 * Version 0.0.1
 */

// Checks for a valid URL (uses regex)
export function urlIsValid(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str); // Returns false if the url is invalid
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for special characters (Returns true if it matches)
export function stringCheckSpec(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regSp = /[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\?]/;
        if (regSp.test(str) == true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for a valid Email (uses regex)
export function emailIsValid(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (str.match(validRegex)) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for a space in a string
export function spaceCheck(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        return str.indexOf(' ') >= 0;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

export function isList(input) {
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
}

export function isArray(input) {
    return input.constructor === Array;
}

export function isObject(input) {
    return input.constructor === Object;
}

export function isJson(input) {
    try {
        JSON.parse(input);
        return true;
    } catch (er) {
        return false;
    }
}


// Checks for number values in a string (Returns true if it matches)
export function stringCheckNum(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regNm = /[0-9]/;
        if (regNm.test(str) === true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for lowercase characters (Returns true if it matches)
export function stringCheckLow(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regLo = /[a-z]/;
        if (regLo.test(str) == true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for uppercase characters (Returns true if it matches)
export function stringCheckLowUpp(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regUp = /[A-Z]/;
        if (regUp.test(str) == true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}
