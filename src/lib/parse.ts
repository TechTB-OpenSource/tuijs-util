
/**
 * Parses a function and its parameters when it is in the form of a string.
 * This can be used to embed function strings into custom HTML elements.
 * The Function MUST exist in the window object.
 */
export function parseFunctionString(string: string): Function | undefined {
    const match: RegExpMatchArray | null = string.match(/^(\w+)\((.*)\)$/); // Match "functionName(args)"
    if (!match) {
        throw new Error('Input does not match the expected pattern "functionName(args)".');
    }
    const _: string = match[0]; // Full match (not used)
    const funcName: string = match[1]; // Function name
    const args: string = match[2]; // Arguments as a single string
    const func = window[funcName as keyof Window];
    if (typeof func !== 'function') {
        throw new Error(`"${funcName}" is not a valid function.`);
    }
    const parsedArgs: string[] = args
        .split(',')
        .map(arg => arg.trim().replace(/^['"]|['"]$/g, '')) // Trim and remove quotes
        .filter(arg => arg !== ''); // Remove empty strings from args
    return () => func(...parsedArgs);
}
