import { checkUrl, checkIsJson } from './util.check.js';

/**
 * Adds 'http://' if valid URL and 'http://' or 'https://' is missing.
 * @param {string} url 
 * @returns {string} - Returns an updated url string if necessary or returns the same string if url already starts with 'http://' or 'https://'.
 * @throws {Error} - Throws Error if an error is detected.
 */
export function urlAddHttp(url) {
    try {
        if (url === null || !checkUrl(url)) {
            throw new Error(`Invalid input.`);
        };
        if (url.startsWith("http://") === false && url.startsWith("https://") === false) {
            url = "http://" + url
        }
        return url;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Adds 'https://' if valid URL and 'http://' or 'https://' is missing.
 * @param {string} url 
 * @returns {string} - Returns an updated url string if necessary or returns the same string if url already starts with 'http://' or 'https://'.
 * @throws {Error} - Throws Error if an error is detected.
 */
export function urlAddHttps(url) {
    try {
        if (url === null || !checkUrl(url)) {
            throw new Error(`Invalid input.`);
        };
        if (url.startsWith("http://") === false && url.startsWith("https://") === false) {
            url = "https://" + url
        }
        return url;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Sends GET request to specified URL
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqGet(url) {
    try {
        const res = await fetch(url, { method: 'GET' });
        if (!res.ok) {
            throw new Error(res);
        }
        return res;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Collects JSON data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqGetJson(url) {
    try {
        const res = await fetch(url, { method: 'GET' });
        if (!res.ok) {
            throw new Error(res);
        }
        const data = await res.json();
        return data;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Collects text data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqGetText(url) {
    try {
        const res = await fetch(url, { method: 'GET' });
        if (!res.ok) {
            throw new Error(res);
        }
        const data = await res.text();
        return data;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Sends POST request to specified URL, which contains JSON data in the body.
 * @async
 * @param {string} url
 * @param {JSON} dataJson
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqPostJson(url, dataJson) {
    try {
        if (dataJson === null || dataJson === undefined) {
            throw new Error(`No data provided.`);
        }
        if (!checkIsJson(dataJson)) {
            throw new Error(`Provided data is not JSON.`);
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataJson
        });
        if (!res.ok) {
            throw new Error(res);
        }
        return res;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Sends POST request to specified URL, which contains FormData in the body.
 * @param {string} url 
 * @param {FormData} dataForm 
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqPostForm(url, dataForm) {
    try {
        if (!(dataForm instanceof FormData)) {
            throw new Error(`The data provided was not form data`);
        }
        const res = await fetch(url, {
            method: 'POST',
            body: dataForm
        });
        if (!res.ok) {
            return res;
        }
        return res;
    } catch (er) {
        throw new Error(er.message);
    }
}
