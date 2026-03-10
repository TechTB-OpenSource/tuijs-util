import { regExAnyNumber, regExAnyLowercase, regExAnyUppercase, regExAnySpecial, regExFqdn, regExUrl, regExEmail, regExIpv4, regExIpv6, regExMacNoSeparator, regExMacColonPairs, regExMacColonQuads, regExMacHyphenPairs, regExMacHyphenQuads, regExMacDotPairs, regExMacDotQuads } from "./regex.js";
/**
 * Checks for a valid FQDN (Uses RegEx).
 */
export function checkFqdn(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    return regExFqdn.test(string);
}
/**
 * Checks for a valid URL (Uses RegEx).
 */
export function checkUrl(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    ;
    return regExUrl.test(string);
}
/**
 * Checks for a valid Mac Address (Uses RegEx).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkMac(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    if (regExMacNoSeparator.test(string) ||
        regExMacColonPairs.test(string) ||
        regExMacColonQuads.test(string) ||
        regExMacHyphenPairs.test(string) ||
        regExMacHyphenQuads.test(string) ||
        regExMacDotPairs.test(string) ||
        regExMacDotQuads.test(string)) {
        return true;
    }
    return false;
}
/**
 * Checks for a valid IP (Uses checkIpv4 and checkIpv6).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkIp(string) {
    return checkIpv4(string) || checkIpv6(string);
}
/**
 * Checks for a valid IPv4 (Uses RegEx).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkIpv4(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    return regExIpv4.test(string);
}
/**
 * Checks for a valid IPv6 (Uses RegEx).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkIpv6(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    return regExIpv6.test(string);
}
/**
 * Checks for special characters (Uses RegEx).
 * Returns true if any special character is found and false if the string is not validated or the RegEx test fails.
 */
export function checkAnySpecialChar(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    ;
    return regExAnySpecial.test(string);
}
/**
 * Checks for number values in a string (Uses RegEx)
 * Returns true if a number is found and false if not.
 */
export function checkAnyNum(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    ;
    return regExAnyNumber.test(string);
}
/**
 * Checks for lowercase characters (Uses RegEx)
 * Returns true if a lowercase character is found and false if not.
 */
export function checkAnyLowercase(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    ;
    return regExAnyLowercase.test(string);
}
/**
 * Checks for uppercase characters (Uses RegEx)
 * Returns true if a uppercase character is found and false if not.
 */
export function checkAnyUppercase(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    ;
    return regExAnyUppercase.test(string);
}
/**
 * Checks for a space in a string
 * Returns true if space is found and false if the string is not validated or if a space is not found.
 */
export function checkAnySpaces(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    ;
    return string.indexOf(' ') >= 0;
}
/**
 * Checks for a valid email address. (Uses RegEx).
 * Returns true if email pattern test is successful and false if the string is not validated or the RegEx test fails.
 */
export function checkEmail(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return false;
    }
    ;
    return regExEmail.test(string);
}
/**
 * Checks if a string is a newline-separated list.
 * Returns true if the input is a string containing at least one newline character and false if not.
 */
export function checkIsList(input) {
    if (typeof input !== 'string' || input.length === 0) {
        return false;
    }
    if (input.includes('{') || input.includes('[') || input.includes(']') || input.includes('}')) {
        return false;
    }
    return input.includes('\n') || input.includes('\r') || input.includes(',');
}
/**
 * Checks an input to determine if it is an Array.
 * Returns true if the input is an Array and false if not.
 * NOTE - This probably doesn't need to exist but it is here for consistency with the other check functions.
 */
export function checkIsArray(input) {
    return Array.isArray(input);
}
/**
 * Checks an input to determine if it is an Object.
 * Returns true if the input is an Object and false if not.
 */
export function checkIsObject(input) {
    return input !== null && typeof input === 'object' && !Array.isArray(input);
}
/**
 * Checks an input to determine if it is valid JSON.
 * Returns true if the input is valid JSON and false if not.
 * Try catch is needed to prevent errors from being thrown while checker is working as expected.
 */
export function checkIsJson(input) {
    if (typeof input !== 'string') {
        return false;
    }
    try {
        JSON.parse(input);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Checks an input to determine if it is a DOM object.
 * Returns true if the input is a DOM object and false if not.
 */
export function checkIsDomObject(input) {
    return (input instanceof Element ||
        input instanceof Document ||
        input instanceof Window ||
        input instanceof DocumentFragment ||
        input instanceof ShadowRoot);
}
/**
 * Checks an input to determine if it is a Function.
 * Returns true if the input is a Function and false if not.
 * NOTE - This probably doesn't need to exist but it is here for consistency with the other check functions.
 */
export function checkIsFunction(input) {
    return typeof input === 'function';
}
/**
 * Checks an input to determine if it is a valid subnet mask.
 * Returns true if the input is a valid subnet mask and false if not.
 */
export function checkSubnetMask(mask) {
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
}
//# sourceMappingURL=check.js.map