/**
 * List of RegEx variables for different patterns.
*/
export const regExLetters = /^[a-zA-Z]+$/;
export const regExLettersLower = /^[a-z]+$/;
export const regExLettersUpper = /^[A-Z]+$/;
export const regExNumbers = /^\d+$/;
export const regExBinary = /^[01]+$/;
export const regExHexadecimal = /^[0-9A-Fa-f]+$/;
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
        throw new Error(er.message);
    }
}
