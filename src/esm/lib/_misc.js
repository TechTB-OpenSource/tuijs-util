import { checkSubnetMask } from "./_check.js";

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
        console.error(er);
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
        console.error(er);
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
        console.error(er);
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
 * NEED TO ADD NAME AND JSDOC
 */
export function scrollIntoView() {
    let allObservers = [];

    function addObserver(targets, callback, observerOptions = { threshold: 0.5 }) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {  // Only trigger when the element is intersecting
                    callback(entry.target);
                }
            });
        }, observerOptions);
        for (let i = 0; i < targets.length; i++) {
            observer.observe(targets[i])

        }
        allObservers.push(observer);
    }

    function removeNamedObserver(name) {
        for (let i = 0; i < allObservers.length; i++) {
            if (allObservers[i].name === name) {
                allObservers[i].disconnect();
                allObservers.splice(i, 1);
                i--;
            }
        }
    }

    function removeAllObservers() {
        for (let i = 0; i < allObservers.length; i++) {
            allObservers[i].disconnect();
        }
        allObservers = [];
    }

    return {
        addObserver,
        removeNamedObserver,
        removeAllObservers
    }
}

export function convertBitsToMask(bits) {
    try {
        if (bits < 0 || bits > 32) {
            throw new Error("Bits must be between 0 and 32");
        }
        const mask = (0xffffffff << (32 - bits)) >>> 0;
        return [
            (mask >>> 24) & 0xff,
            (mask >>> 16) & 0xff,
            (mask >>> 8) & 0xff,
            mask & 0xff
        ].join('.');
    } catch (er) {
        console.error(er);
        return;
    }
}

export function convertMaskToBits(mask) {
    try {
        if (!checkSubnetMask(mask)) {
            throw new Error("Invalid subnet mask.");
        }
        return maskArray
            .map(num => num.toString(2).padStart(8, '0')) // ['11111111', '11111111', '11111111', '00000000']
            .join('')                         // '11111111111111111111111100000000'
            .split('')                        // ['1','1','1',...,'0','0']
            .filter(bit => bit === '1')       // Keep only the '1's
            .length;                          // Count them
    } catch (er) {
        console.error(er);
        return;
    }
}


