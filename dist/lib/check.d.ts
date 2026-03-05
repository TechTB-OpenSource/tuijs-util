/**
 * Checks for a valid FQDN (Uses RegEx).
 */
export declare function checkFqdn(string: string): boolean;
/**
 * Checks for a valid URL (Uses RegEx).
 */
export declare function checkUrl(string: string): boolean;
/**
 * Checks for a valid Mac Address (Uses RegEx).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export declare function checkMac(string: string): boolean;
/**
 * Checks for a valid IP (Uses checkIpv4 and checkIpv6).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export declare function checkIp(string: string): boolean;
/**
 * Checks for a valid IPv4 (Uses RegEx).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export declare function checkIpv4(string: string): boolean;
/**
 * Checks for a valid IPv6 (Uses RegEx).
 * Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 */
export declare function checkIpv6(string: string): boolean;
/**
 * Checks for special characters (Uses RegEx).
 * Returns true if any special character is found and false if the string is not validated or the RegEx test fails.
 */
export declare function checkAnySpecialChar(string: string): boolean;
/**
 * Checks for number values in a string (Uses RegEx)
 * Returns true if a number is found and false if not.
 */
export declare function checkAnyNum(string: string): boolean;
/**
 * Checks for lowercase characters (Uses RegEx)
 * Returns true if a lowercase character is found and false if not.
 */
export declare function checkAnyLowercase(string: string): boolean;
/**
 * Checks for uppercase characters (Uses RegEx)
 * Returns true if a uppercase character is found and false if not.
 */
export declare function checkAnyUppercase(string: string): boolean;
/**
 * Checks for a space in a string
 * Returns true if space is found and false if the string is not validated or if a space is not found.
 */
export declare function checkAnySpaces(string: string): boolean;
/**
 * Checks for a valid email address. (Uses RegEx).
 * Returns true if email pattern test is successful and false if the string is not validated or the RegEx test fails.
 */
export declare function checkEmail(string: string): boolean;
/**
 * Checks an input to determine if it is an Array.
 * Returns true if the input is an Array and false if not.
 * NOTE - This probably doesn't need to exist but it is here for consistency with the other check functions.
 */
export declare function checkIsArray(input: any): boolean;
/**
 * Checks an input to determine if it is an Object.
 * Returns true if the input is an Object and false if not.
 */
export declare function checkIsObject(input: any): boolean;
/**
 * Checks an input to determine if it is valid JSON.
 * Returns true if the input is valid JSON and false if not.
 * Try catch is needed to prevent errors from being thrown while checker is working as expected.
 */
export declare function checkIsJson(input: any): boolean;
/**
 * Checks an input to determine if it is a DOM object.
 * Returns true if the input is a DOM object and false if not.
 */
export declare function checkIsDomObject(input: any): boolean;
/**
 * Checks an input to determine if it is a Function.
 * Returns true if the input is a Function and false if not.
 * NOTE - This probably doesn't need to exist but it is here for consistency with the other check functions.
 */
export declare function checkIsFunction(input: any): boolean;
/**
 * Checks an input to determine if it is a valid subnet mask.
 * Returns true if the input is a valid subnet mask and false if not.
 */
export declare function checkSubnetMask(mask: string): boolean;
//# sourceMappingURL=check.d.ts.map