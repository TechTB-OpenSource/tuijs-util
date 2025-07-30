/**
 * List of RegEx variables for different patterns.
*/
export const regExAllLetters = /^[a-zA-Z]+$/;
export const regExAnyLetter = /[a-zA-Z]/; // Matches if string contains any letter
export const regExAllLowercase = /^[a-z]+$/;
export const regExAnyLowercase = /[a-z]/; // Matches if string contains any lowercase letter
export const regExAllUppercase = /^[A-Z]+$/;
export const regExAnyUppercase = /[A-Z]/; // Matches if string contains any uppercase letter
export const regExAllNumbers = /^\d+$/;
export const regExAnyNumber = /\d/; // Matches if string contains any number
export const regExAllBin = /^[01]+$/; // Matches entire string for binary characters
export const regExAnyBin = /[01]/; // Matches if string contains any binary character
export const regExBinChar = /[01]/g; // Matches individual binary characters.
export const regExBinNon = /[^01]/g; // Matches characters not in the binary range
export const regExAllHex = /^[0-9A-Fa-f]+$/; // Matches entire string for hexadecimal characters
export const regExAnyHex = /[0-9A-Fa-f]/; // Matches if string contains any hexadecimal character
export const regExHexChar = /[0-9A-Fa-f]/g // Matches individual hexadecimal characters.
export const regExHexNon = /[^0-9A-Fa-f]/g; // Matches characters not in the hexadecimal range
export const regExAnySpecial = /[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?\`\\\~]/;
export const regExFqdn = /^(?=.{1,253}$)(([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+([a-zA-Z]{2,}|[a-zA-Z0-9-]{2,}))$/;
export const regExUrl = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
export const regExEmail = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,}$/;
export const regExIpv4 = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;
export const regExIpv6 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
export const regExMacNoSeparator = /^[0-9a-fA-F]{12}$/;
export const regExMacHyphenPairs = /^[0-9a-fA-F]{2}(-[0-9a-fA-F]{2}){5}$/;
export const regExMacHyphenQuads = /^[0-9a-fA-F]{4}(-[0-9a-fA-F]{4}){2}$/;
export const regExMacDotPairs = /^[0-9a-fA-F]{2}(\.[0-9a-fA-F]{2}){5}$/;
export const regExMacDotQuads = /^[0-9a-fA-F]{4}(\.[0-9a-fA-F]{4}){2}$/;
export const regExMacColonPairs = /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/;
export const regExMacColonQuads = /^[0-9a-fA-F]{4}(:[0-9a-fA-F]{4}){2}$/;

/**
 * Removes characters from a string based on a provided regex pattern.
 * @param {string} string The string to process.
 * @param {RegExp} regex The regex pattern of characters to remove from the string.
 * @return {string} The processed string with specified characters removed.
 * @throws {Error} Throws an error if the first parameter is not a string or if the second parameter is not a RegExp.
 */
export function removeChar(string, regEx) {
    try {
        if (typeof string !== 'string') {
            throw new Error(`First parameter must be a string.`);
        }
        if (!(regEx instanceof RegExp)) {
            throw new Error(`Second parameter must be a RegExp.`);
        }
        return string.replace(regEx, '');
    } catch (er) {
        console.error(er);
    }
}
