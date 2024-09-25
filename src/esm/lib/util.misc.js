/**
 * Adds zero in front of numbers less than 10 and returns as a string.
 * @param {number} num 
 * @returns {string}
 * @throws {Error} - Throws Error if an error is detected.
 */
export function addLeadZero(num) {
    try {
        if (num === null || typeof num !== 'number' || num > 9) {
            throw new Error(`Invalid input.`);
        };
        return "0" + num;;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Generates a unique ID
 * @param {number} [length=16] - The number of characters for the random part of the ID.
 * @returns {string}
 * @throws {Error} - Throws Error if input is invalid or another error is detected.
 */
export function generateUID(length = 16) {
    try {
        if (typeof length !== 'number' || length <= 0) {
            throw new Error(`Invalid input. The 'length' parameter must be a positive number.`);
        }
        const timestampPart = Date.now().toString(36);
        const randomPart = Math.random().toString(36).slice(2, 2 + length);
        return 'uid-' + timestampPart + '-' + randomPart;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * @typedef {string[]} ImgUrls - An array of URL strings
 */
/**
 * Preloads images in cache.
 * @param {ImgUrls} imgUrls - An array of URL strings
 * @returns {void}
 * @throws {Error} - Throws an Error if loading an image fails.
 */
export function preloadImages(imgUrls) {
    imgUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onerror = () => {
            throw new Error(`Failed to load image: ${url}`);
        };
    });
}

/**
 * Sleeps for a given number of milliseconds
 * @param {number} ms - Provide number of milliseconds
 * @returns {Promise} - Returns Promise once timeout finishes
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
