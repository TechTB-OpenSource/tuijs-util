export declare function addLeadZero(number: number | string): string | undefined;
export declare function generateUID(length?: number): string;
/**
 * Loads all images and returns a promise when loading is complete
 */
export declare function preloadImages(imageUrls: string[]): Promise<void>;
/**
 * Sleeps for a given number of milliseconds
 */
export declare function sleep(ms: number): Promise<void>;
/**
 * NEED TO ADD NAME AND JSDOC
 * MAY NEED REWORD
 */
export declare function scrollIntoView(): {
    addObserver: (targets: Element[], callback: (target: Element) => void, observerOptions?: IntersectionObserverInit) => void;
    removeNamedObserver: (name: string) => void;
    removeAllObservers: () => void;
};
export declare function convertBitsToMask(bits: number): string | undefined;
export declare function convertMaskToBits(mask: string): number | undefined;
//# sourceMappingURL=misc.d.ts.map