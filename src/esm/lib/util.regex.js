/**
 * List of RegEx variables for different patterns.
*/
export const regExLetters = /^[a-zA-Z]+$/;
export const regExLettersLower = /^[a-z]+$/;
export const regExLettersUpper = /^[A-Z]+$/;
export const regExNumbers = /^\d+$/;
export const regExBin = /^[01]+$/; // Matches entire string for binary characters
export const regExBinChar = /[01]/g; // Matches individual binary characters.
export const regExBinNon = /[^01]/g; // Matches characters not in the binary range
export const regExHex = /^[0-9A-Fa-f]+$/; // Matches entire string for hexadecimal characters
export const regExHexChar = /[0-9A-Fa-f]/g // Matches individual hexadecimal characters.
export const regExHexNon = /[^0-9A-Fa-f]/g; // Matches characters not in the hexadecimal range
export const regExSpecial = /^[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?\`\\\~]+$/;
export const regExFqdn = /^(?=.{1,253}$)(([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+([a-zA-Z]{2,}|[a-zA-Z0-9-]{2,}))$/;
export const regExUrl = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
export const regExEmail = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,}$/;

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
