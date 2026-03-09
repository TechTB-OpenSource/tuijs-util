import { checkIsList, checkIsArray, checkIsObject, checkIsJson } from "./check";
export function convertToJson(input: Array<any> | Object | string): string {
    if (!checkIsArray(input) || !checkIsObject(input) || !checkIsList(input)) {
        throw new Error(`Input must be a List, an Array, or an Object.`);
    }
    if (checkIsList(input) && typeof input === 'string') {
        return JSON.stringify(convertListToArray(input));
    }
    return JSON.stringify(input);
}

export function convertJsonToJs(input: string): string | Array<any> | Object {
    if (!checkIsJson(input)) {
        throw new Error(`Input must be valid JSON.`);
    }
    return JSON.parse(input);
}

export function convertListToArray(input: string): string[] {
    return input.split(',').map(item => item.trim());
}
