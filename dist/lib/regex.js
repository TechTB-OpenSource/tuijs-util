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
export const regExFqdn = /^(?=.{1,253}$)(([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+([a-zA-Z]{2,}|[a-zA-Z0-9-]{2,}))$/; // Matches valid FQDNs (Fully Qualified Domain Names)
export const regExUrl = new RegExp(// Matches valid URLs (HTTP/HTTPS)
'^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
export const regExEmail = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,}$/; // Matches valid email addresses
export const regExIpv4 = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/; // Matches valid IPv4 addresses
export const regExIpv6 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/; // Matches valid IPv6 addresses
export const regExMacNoSeparator = /^[0-9a-fA-F]{12}$/; // Matches valid MAC addresses with no separators (e.g., "001A2B3C4D5E")
export const regExMacHyphenPairs = /^[0-9a-fA-F]{2}(-[0-9a-fA-F]{2}){5}$/; // Matches valid MAC addresses with hyphen separators in pairs (e.g., "00-1A-2B-3C-4D-5E")
export const regExMacHyphenQuads = /^[0-9a-fA-F]{4}(-[0-9a-fA-F]{4}){2}$/; // Matches valid MAC addresses with hyphen separators in quads (e.g., "001A-2B3C-4D5E")
export const regExMacDotPairs = /^[0-9a-fA-F]{2}(\.[0-9a-fA-F]{2}){5}$/; // Matches valid MAC addresses with dot separators in pairs (e.g., "00.1A.2B.3C.4D.5E")
export const regExMacDotQuads = /^[0-9a-fA-F]{4}(\.[0-9a-fA-F]{4}){2}$/; // Matches valid MAC addresses with dot separators in quads (e.g., "001A.2B3C.4D5E")
export const regExMacColonPairs = /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/; // Matches valid MAC addresses with colon separators in pairs (e.g., "00:1A:2B:3C:4D:5E")
export const regExMacColonQuads = /^[0-9a-fA-F]{4}(:[0-9a-fA-F]{4}){2}$/; // Matches valid MAC addresses with colon separators in quads (e.g., "001A:2B3C:4D5E")
//# sourceMappingURL=regex.js.map