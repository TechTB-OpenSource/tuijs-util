/**
 * List of RegEx variables for different patterns.
*/
export const regExAllLetter = /^[a-zA-Z]+$/; // Matches strings containing only letters
export const regExAnyLetter = /[a-zA-Z]/g; // Finds/matches/replaces any letters in a string
export const regExNotLetter = /^[^a-zA-Z]+$/; // Matches strings containing no letters
export const regExNonLetter = /[^a-zA-Z]/g; // Finds/matches/replaces any non-letter characters in a string
export const regExAllLowercase = /^[a-z]+$/; // Matches strings containing only lowercase letters
export const regExAnyLowercase = /[a-z]/g; // Finds/matches/replaces any lowercase letters in a string
export const regExNotLowercase = /^[^a-z]+$/; // Matches strings containing no lowercase letters
export const regExNonLowercase = /[^a-z]/g; // Finds/matches/replaces any non-lowercase characters in a string
export const regExAllUppercase = /^[A-Z]+$/; // Matches strings containing only uppercase letters
export const regExAnyUppercase = /[A-Z]/g; // Finds/matches/replaces any uppercase letters in a string
export const regExNotUppercase = /^[^A-Z]+$/; // Matches strings containing no uppercase letters
export const regExNonUppercase = /[^A-Z]/g; // Finds/matches/replaces any non-uppercase characters in a string
export const regExAllNumber = /^[0-9]+$/; // Matches strings containing only numbers
export const regExAnyNumber = /[0-9]/g; // Finds/matches/replaces any numbers in a string
export const regExNotNumber = /^[^0-9]+$/; // Matches strings containing no numbers
export const regExNonNumber = /[^0-9]/g; // Finds/matches/replaces any non-number characters in a string
export const regExAllBin = /^[01]+$/; // Matches strings containing only binary characters
export const regExAnyBin = /[01]/g; // Finds/matches/replaces any binary characters in a string
export const regExNotBin = /^[^01]+$/; // Matches strings containing no binary characters
export const regExNonBin = /[^01]/g; // Finds/matches/replaces any non-binary characters in a string
export const regExAllOct = /^[0-7]+$/; // Matches strings containing only octal characters
export const regExAnyOct = /[0-7]/g; // Finds/matches/replaces any octal characters in a string
export const regExNotOct = /^[^0-7]+$/; // Matches strings containing no octal characters
export const regExNonOct = /[^0-7]/g; // Finds/matches/replaces any non-octal characters in a string
export const regExAllHex = /^[0-9A-Fa-f]+$/; // Matches strings containing only hexadecimal characters
export const regExAnyHex = /[0-9A-Fa-f]/g; // Finds/matches/replaces any hexadecimal characters in a string
export const regExNotHex = /^[^0-9A-Fa-f]+$/; // Matches strings containing no hexadecimal characters
export const regExNonHex = /[^0-9A-Fa-f]/g; // Finds/matches/replaces any non-hexadecimal characters in a string
export const regExAnySpecial = /[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?\`\\\~]/g; // Finds/matches/replaces any special characters in a string
export const regExNotSpecial = /^[^\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?\`\\\~]+$/; // Matches strings containing no special characters
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
