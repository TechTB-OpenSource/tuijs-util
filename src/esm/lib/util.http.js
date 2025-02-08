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
        console.error(er);
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
        console.error(er);
    }
}

/**

 */
export function createReqInstance() {
    let controllers = new Map()
    function createController(id) {
        if (controllers.has(id)) {
            abortRequest(id); // Ensure previous request is aborted
        }
        const controller = new AbortController();
        controllers.set(id, controller);
        return controller.signal;
    }

    function abortRequest(id) {
        if (controllers.has(id)) {
            controllers.get(id).abort();
            controllers.delete(id);
        }
    }

    function abortAll() {
        controllers.forEach(controller => controller.abort());
        controllers.clear();
    }

    async function reqGet(url, id) {
        try {
            const signal = createController(id);
            const res = await fetch(url, { method: 'GET', signal });
            return res;
        } catch (er) {
            if (er.name === 'AbortError') {
                console.warn('Fetch aborted:', url);
            } else {
                console.error(er);
            }
        }
    }

    async function reqGetJson(url, id) {
        try {
            const signal = createController(id);
            const res = await fetch(url, { method: 'GET', signal });
            return await res.json();
        } catch (er) {
            if (er.name === 'AbortError') {
                console.warn('Fetch aborted:', url);
            } else {
                console.error(er);
            }
        }
    }

    async function reqGetText(url, id) {
        try {
            const signal = createController(id);
            const res = await fetch(url, { method: 'GET', signal });
            return await res.text();
        } catch (er) {
            if (er.name === 'AbortError') {
                console.warn('Fetch aborted:', url);
            } else {
                console.error(er);
            }
        }
    }

    async function reqPostJson(url, dataJson, id) {
        try {
            const signal = createController(id);
            if (!dataJson || typeof dataJson !== 'object') {
                throw new Error(`Invalid JSON data`);
            }
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataJson),
                signal
            });
            return res;
        } catch (er) {
            if (er.name === 'AbortError') {
                console.warn('Fetch aborted:', url);
            } else {
                console.error(er);
            }
        }
    }

    async function reqPostForm(url, dataForm, id) {
        try {
            const signal = createController(id);
            if (!(dataForm instanceof FormData)) {
                throw new Error(`Provided data is not FormData`);
            }
            const res = await fetch(url, {
                method: 'POST',
                body: dataForm,
                signal
            });
            return res;
        } catch (er) {
            if (er.name === 'AbortError') {
                console.warn('Fetch aborted:', url);
            } else {
                console.error(er);
            }
        }
    }

    return {
        createController,
        abortRequest,
        abortAll,
        reqGet,
        reqGetJson,
        reqGetText,
        reqPostJson,
        reqPostForm
    };
}

/**
 * Sends GET request to specified URL
 * @async
 * @param {string} url
 * @param {  }
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqGet(url, signal = null) {
    try {
        const res = await fetch(url, { method: 'GET', signal });
        return res;
    } catch (er) {
        if (er.name === 'AbortError') {
            console.warn('Fetch aborted:', url);
        } else {
            console.error(er);
        }
    }
}

/**
 * Collects JSON data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqGetJson(url, signal = null) {
    try {
        const res = await fetch(url, { method: 'GET', signal });
        return await res.json();
    } catch (er) {
        if (er.name === 'AbortError') {
            console.warn('Fetch aborted:', url);
        } else {
            console.error(er);
        }
    }
}

/**
 * Collects text data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqGetText(url, signal = null) {
    try {
        const res = await fetch(url, { method: 'GET', signal });
        return await res.text();
    } catch (er) {
        if (er.name === 'AbortError') {
            console.warn('Fetch aborted:', url);
        } else {
            console.error(er);
        }
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
export async function reqPostJson(url, dataJson, signal = null) {
    try {
        if (!dataJson || typeof dataJson !== 'object') {
            throw new Error(`Invalid JSON data`);
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataJson),
            signal
        });
        return res;
    } catch (er) {
        if (er.name === 'AbortError') {
            console.warn('Fetch aborted:', url);
        } else {
            console.error(er);
        }
    }
}

/**
 * Sends POST request to specified URL, which contains FormData in the body.
 * @param {string} url 
 * @param {FormData} dataForm 
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
export async function reqPostForm(url, dataForm, signal = null) {
    try {
        if (!(dataForm instanceof FormData)) {
            throw new Error(`Provided data is not FormData`);
        }
        const res = await fetch(url, {
            method: 'POST',
            body: dataForm,
            signal
        });
        return res;
    } catch (er) {
        if (er.name === 'AbortError') {
            console.warn('Fetch aborted:', url);
        } else {
            console.error(er);
        }
    }
}
