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
 * @typedef {string[]} ImageUrls - An array of URL strings
 */
/**
 * Loads all images and returns a promise when loading is complete
 * @param {ImageUrls} imageUrls - An Array of image url strings
 * @returns {Object}
 */
export async function preloadImages(imageUrls) {
    try {
        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(url);
                img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
                img.src = url;
            });
        };
        await Promise.all(imageUrls.map(loadImage));
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Sleeps for a given number of milliseconds
 * @param {number} ms - Provide number of milliseconds
 * @returns {Promise} - Returns Promise once timeout finishes
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Adds and intersectionObserver for a list of target elements, that calls a function when 
 * @param {Array} targets - An array of elements that will be attached to the observer.
 * @param {Function} callback - The callback function that will run when the observer is triggered.
 * @param {Object} observerOptions - An Object containing the observer options. By default only threshold is set.
 * @returns {Function} - Returns a cleanup function that will disconnect the observer. This is not required to use.
 */
export function scrollIntoView(targets, callback, observerOptions = { threshold: 0.5}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {  // Only trigger when the element is intersecting
                callback(entry.target);
            }
        });
    }, observerOptions);
    targets.forEach(target => {
        observer.observe(target);
    });
    // Return a cleanup function to disconnect the observer
    return () => {
        observer.disconnect();
    };
}
