import { checkUrl } from './check.js';
/**
 * Adds 'http://' if valid URL and 'http://' or 'https://' is missing.
 */
export function urlAddHttp(url) {
    if (url === null || !checkUrl(url)) {
        throw new Error(`Invalid input.`);
    }
    ;
    if (url.startsWith("http://") === false && url.startsWith("https://") === false) {
        url = "http://" + url;
    }
    return url;
}
/**
 * Adds 'https://' if valid URL and 'http://' or 'https://' is missing.
 */
export function urlAddHttps(url) {
    if (url === null || !checkUrl(url)) {
        throw new Error(`Invalid input.`);
    }
    ;
    if (url.startsWith("http://") === false && url.startsWith("https://") === false) {
        url = "https://" + url;
    }
    return url;
}
/**
 * Sends GET request to specified URL
 */
export async function reqGet(url, signal = null) {
    if (!checkUrl(url)) {
        throw new Error(`Invalid URL`);
    }
    const options = signal ? { method: 'GET', signal } : { method: 'GET' };
    return await fetch(url, options);
}
/**
 * Collects JSON data from a given url
 */
export async function reqGetJson(url, signal = null) {
    const options = signal ? { method: 'GET', signal } : { method: 'GET' };
    const res = await fetch(url, options);
    return await res.json();
}
/**
 * Collects text data from a given url
 */
export async function reqGetText(url, signal = null) {
    const options = signal ? { method: 'GET', signal } : { method: 'GET' };
    const res = await fetch(url, options);
    return await res.text();
}
/**
 * Sends POST request to specified URL, which contains JSON data in the body.
 */
export async function reqPostJson(url, data, signal = null) {
    const options = signal ? {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal
    } : {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const res = await fetch(url, options);
    return res;
}
/**
 * Sends POST request to specified URL, which contains FormData in the body.
 */
export async function reqPostForm(url, data, signal = null) {
    const options = signal ? {
        method: 'POST',
        body: data,
        signal
    } : {
        method: 'POST',
        body: data
    };
    const res = await fetch(url, options);
    return res;
}
//# sourceMappingURL=http.js.map