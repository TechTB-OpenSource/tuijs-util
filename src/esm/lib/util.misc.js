// Adds zero in front of numbers less than 10
export function addLeadZero(num) {
    try {
        if (num === null || typeof num !== 'number' || num > 9) {
            throw `Invalid input.`;
        };
        num = "0" + num;
    } catch (er) {
        console.error(er);
        throw new Error(er);
    }
}

/**
 * Generates a unique ID
 */
export function generateUID() {
    return 'uid-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2);
}

/**
 * Preloads images. Requires an array of image URL strings.
 */
export function preloadImages(imgUrls) {
    imgUrls.forEach(url => {
        const img = new Image();
        img.src = url;
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
