import { regExNumbers, regExLettersLower, regExLettersUpper, regExSpecial, regExFqdn, regExUrl, regExEmail } from "./util.regex.js";

/**
 * Checks for a valid FQDN (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkFqdn(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        }
        return regExFqdn.test(string);
    } catch (er) {
        throw new Error(er.message);
    }
}


/**
 * Checks for a valid URL (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkUrl(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExUrl.test(string); // Returns false if the url is invalid
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Checks for special characters (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if a special character is found and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkSpecialChar(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExSpecial.test(string);
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Checks for a valid email address. (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if email pattern test is successful and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkEmail(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExEmail.test(string);
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Checks for a space in a string
 * @param {string} string 
 * @returns {boolean} - Returns true if space is found and false if the string is not validated or if a space is not found.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkSpaces(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return str.indexOf(' ') >= 0;
    } catch (er) {
        throw new Error(er.message);
    }
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
        throw new Error(er.message);
    }
}

/**
 * Checks an input to determine if it is an Array.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is an Array and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkIsArray(input) {
    try {
        return Array.isArray(input);
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Checks an input to determine if it is an Object.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is an Object and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkIsObject(input) {
    try {
        return input !== null && typeof input === 'object' && input.constructor === Object;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Checks an input to determine if it is valid JSON.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is valid JSON and false if not.
 */
export function checkIsJson(input) {
    try {
        JSON.parse(input);
        return true;
    } catch (er) {
        return false;
    }
}

/**
 * Checks for number values in a string (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a number is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkNum(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExNumbers.test(string);
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Checks for lowercase characters (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a lowercase character is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkLowercase(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExLettersLower.test(string);
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Checks for uppercase characters (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a uppercase character is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkUppercase(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExLettersUpper.test(string);
    } catch (er) {
        throw new Error(er.message);
    }
}
