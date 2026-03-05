/**
 * Adds 'http://' if valid URL and 'http://' or 'https://' is missing.
 */
export declare function urlAddHttp(url: string): string | undefined;
/**
 * Adds 'https://' if valid URL and 'http://' or 'https://' is missing.
 */
export declare function urlAddHttps(url: string): string | undefined;
/**
 * Sends GET request to specified URL
 */
export declare function reqGet(url: string, signal?: AbortSignal | null): Promise<Response>;
/**
 * Collects JSON data from a given url
 */
export declare function reqGetJson(url: string, signal?: AbortSignal | null): Promise<any>;
/**
 * Collects text data from a given url
 */
export declare function reqGetText(url: string, signal?: AbortSignal | null): Promise<string>;
/**
 * Sends POST request to specified URL, which contains JSON data in the body.
 */
export declare function reqPostJson(url: string, data: object, signal?: AbortSignal | null): Promise<Response>;
/**
 * Sends POST request to specified URL, which contains FormData in the body.
 */
export declare function reqPostForm(url: string, data: FormData, signal?: AbortSignal | null): Promise<Response>;
//# sourceMappingURL=http.d.ts.map