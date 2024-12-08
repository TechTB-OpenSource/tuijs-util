
/**
 * Parses a function and its parameters when it is in the form of a string.
 * This can be used to embed function strings into custom HTML elements.
 * The Function MUST exist in the window object.
 * @param {string} string 
 * @returns {Function} - Returns an executable function with its parameters
 * @throws {Error} - Throws error message if error occurs.
 */
export function parseFunctionString(string) {
    try {
        if (typeof string !== 'string' || string.trim() === '') {
            throw new Error('Input must be a non-empty string.');
        }
        const match = string.match(/^(\w+)\((.*)\)$/); // Match "functionName(args)"
        if (!match) {
            throw new Error('Input does not match the expected pattern "functionName(args)".');
        }
        const [_, funcName, args] = match;
        const func = window[funcName];
        if (typeof func !== 'function') {
            throw new Error(`"${funcName}" is not a valid function.`);
        }
        const parsedArgs = args
            .split(',')
            .map(arg => arg.trim().replace(/^['"]|['"]$/g, '')) // Trim and remove quotes
            .filter(arg => arg !== ''); // Remove empty strings from args
        return () => func(...parsedArgs);
    } catch (er) {
        console.error(er);
    }
}
