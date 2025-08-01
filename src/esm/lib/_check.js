import {
    regExAnyNumber,
    regExAnyLowercase,
    regExAnyUppercase,
    regExAnySpecial,
    regExFqdn,
    regExUrl,
    regExEmail,
    regExIpv4,
    regExIpv6,
    regExMacNoSeparator,
    regExMacColonPairs,
    regExMacColonQuads,
    regExMacHyphenPairs,
    regExMacHyphenQuads,
    regExMacDotPairs,
    regExMacDotQuads
} from "./_regex.js";

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
        console.error(er);
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
        return regExUrl.test(string);
    } catch (er) {
        console.error(er);
    }
}

/**
 * Checks for a valid Mac Address (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkMac(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    if (
        regExMacNoSeparator.test(string) ||
        regExMacColonPairs.test(string) ||
        regExMacColonQuads.test(string) ||
        regExMacHyphenPairs.test(string) ||
        regExMacHyphenQuads.test(string) ||
        regExMacDotPairs.test(string) ||
        regExMacDotQuads.test(string)
    ) {
        return true;
    }
    return false;
}

/**
 * Checks for a valid IP (Uses checkIpv4 and checkIpv6).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkIp(string) {
    return checkIpv4(string) || checkIpv6(string);
}

/**
 * Checks for a valid IPv4 (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkIpv4(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    return regExIpv4.test(string);
}

/**
 * Checks for a valid IPv6 (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkIpv6(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    return regExIpv6.test(string);
}

/**
 * Checks for special characters (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if any special character is found and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkAnySpecialChar(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExAnySpecial.test(string);
    } catch (er) {
        console.error(er);
    }
}

/**
 * Checks for number values in a string (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a number is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkAnyNum(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExAnyNumber.test(string);
    } catch (er) {
        console.error(er);
    }
}

/**
 * Checks for lowercase characters (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a lowercase character is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkAnyLowercase(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExAnyLowercase.test(string);
    } catch (er) {
        console.error(er);
    }
}

/**
 * Checks for uppercase characters (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a uppercase character is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkAnyUppercase(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return regExAnyUppercase.test(string);
    } catch (er) {
        console.error(er);
    }
}

/**
 * Checks for a space in a string
 * @param {string} string 
 * @returns {boolean} - Returns true if space is found and false if the string is not validated or if a space is not found.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkAnySpaces(string) {
    try {
        if (typeof string !== 'string' || string.length === 0) {
            return false;
        };
        return string.indexOf(' ') >= 0;
    } catch (er) {
        console.error(er);
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
        console.error(er);
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
        console.error(er);
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
        console.error(er);
    }
}

/**
 * Checks an input to determine if it is valid JSON.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is valid JSON and false if not.
 */
export function checkIsJson(input) {
    try {
        const parsed = JSON.parse(input);
        return (typeof parsed === 'object' || typeof parsed === 'number' || typeof parsed === 'boolean' || typeof parsed === 'string') && parsed !== null;
    } catch (er) {
        return false;
    }
}

/**
 * Checks an input to determine if it is an Element.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is an Element and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkIsElement(input) {
    try {
        return (
            input instanceof Element ||
            input instanceof Document ||
            input instanceof Window ||
            input instanceof DocumentFragment ||
            input instanceof ShadowRoot
        );
    } catch (er) {
        console.error(er);
    }
}

/**
 * Checks an input to determine if it is a Function.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is a Function and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkIsFunction(input) {
    try {
        return typeof input === 'function';
    } catch (er) {
        console.error(er);
    }
}

/**
 * Checks an input to determine if it is a valid subnet mask.
 * @param {string} mask 
 * @returns {boolean} - Returns true if the input is a Function and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
export function checkSubnetMask(mask) {
    try {
        if (typeof mask != 'string') {
            return false;
        }
        const maskArray = mask.split('.').map(octet => parseInt(octet, 10));
        if (maskArray.length !== 4) {
            return false;
        }
        if (maskArray.some(num => Number.isNaN(num))) {
            return false;
        }
        const binaryMask = maskArray
            .map(num => num.toString(2).padStart(8, '0'))
            .join('');
        if (/01.*10/.test(binaryMask)) {
            return false;
        }
        for (let i = 0; i < maskArray.length; i++) {
            if (maskArray[i] > 255 || maskArray[i] < 0) {
                return false;
            }
        }
        return true;
    } catch (er) {
        console.error(er);
    }
}
