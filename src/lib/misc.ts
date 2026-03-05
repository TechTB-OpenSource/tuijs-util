import { checkSubnetMask } from "./check.js";

export function addLeadZero(number: number | string): string | undefined {
    if (typeof number === 'string') {
        number = parseInt(number);
    }
    if (number === null || typeof number !== 'number' || number > 9) {
        throw new Error(`Invalid input.`);
    };
    return "0" + number;

}

export function generateUID(length: number = 16): string {
    if (typeof length !== 'number' || length <= 0) {
        throw new Error(`Invalid input. The 'length' parameter must be a positive number.`);
    }
    const timestampPart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).slice(2, 2 + length);
    return 'uid-' + timestampPart + '-' + randomPart;

}

/**
 * Loads all images and returns a promise when loading is complete
 */
export async function preloadImages(imageUrls: string[]): Promise<void> {
    const loadImage = (url: string) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
            img.src = url;
        });
    };
    await Promise.all(imageUrls.map(loadImage));
}

/**
 * Sleeps for a given number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * NEED TO ADD NAME AND JSDOC
 * MAY NEED REWORD
 */
export function scrollIntoView() {
    let allObservers: IntersectionObserver[] = [];

    function addObserver(targets: Element[], callback: (target: Element) => void, observerOptions: IntersectionObserverInit = { threshold: 0.5 }) {
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

    function removeNamedObserver(name: string) {
        for (let i = 0; i < allObservers.length; i++) {
            if ((allObservers[i] as any).name === name) { // REMOVE ANY?
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

export function convertBitsToMask(bits: number): string | undefined {
    if (bits < 0 || bits > 32) {
        throw new Error("Bit input must be between 0 and 32");
    }
    const mask: number = (0xffffffff << (32 - bits)) >>> 0;
    return [
        (mask >>> 24) & 0xff,
        (mask >>> 16) & 0xff,
        (mask >>> 8) & 0xff,
        mask & 0xff
    ].join('.');

}

export function convertMaskToBits(mask: string): number | undefined {
    if (!checkSubnetMask(mask)) {
        throw new Error("Invalid subnet mask.");
    }
    const maskArray = mask.split('.').map((num: string) => parseInt(num, 10));
    return maskArray
        .map((num: number) => num.toString(2).padStart(8, '0')) // ['11111111', '11111111', '11111111', '00000000']
        .join('')                                               // '11111111111111111111111100000000'
        .split('')                                              // ['1','1','1',...,'0','0']
        .filter((bit: string) => bit === '1')                   // Keep only the '1's
        .length;                                                // Count them
}
