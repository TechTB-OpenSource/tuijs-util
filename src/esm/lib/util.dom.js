/**
 * Takes an HTML template literal, parses it, then extracts it.
 * All elements in the template MUST be contained within a single set of template tags.
 * THIS IS THE RECOMMENDED PARSER TO USE.
 * @param {string} templateLit - An HTML string containing a <template> tag.
 * @returns {DocumentFragment} - Returns a DocumentFragment which has been parsed and queried.
 * @throws {Error} - Throws error message if error occurs.
 */
export function parseTemplate(templateLit) {
    try {
        let parser = new DOMParser();
        let doc = parser.parseFromString(templateLit, 'text/html');
        let template = doc.querySelector('template');
        if (!template) {
            throw new Error('No template tag found in the provided string.');
        }
        return template.content;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Takes an HTML template literal, parses it, then extracts the element.
 * All elements in the template MUST be contained within a single parent element.
 * @param {string} templateLit 
 * @returns {Element} - Returns a element Object which has been parsed and queried.
 * @throws {Error} - Throws error message if error occurs.
 */
export function elmCleaner(templateLit) {
    try {
        let parser = new DOMParser();
        let elmBody = parser.parseFromString(templateLit, 'text/html');
        let elms = elmBody.body.querySelectorAll("*");
        return elms[0];
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Takes an HTML table row template literal, parses it, then extracts the element.
 * @param {string} templateLit 
 * @returns {Element} - Returns a element Object which has been parsed and queried.
 * @throws {Error} - Throws error message if error occurs.
 */
/**
 * IN WORK
 */
export function elmCleanerTr(templateLit) {
    try {
        let elmTemp = document.createElement('table');
        elmTemp.innerHTML = templateLit;
        let elms = elmTemp.querySelector("tr");
        elmTemp.remove();
        return elms;
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * Takes an HTML template literal, parses it with the DOM parser, then extracts the NodeList. The list is then returned as an array.
 * @param {string} templateLit 
 * @returns {Element} - Returns a element Object which has been parsed and queried.
 * @throws {Error} - Throws error message if error occurs.
 */
/**
 * IN WORK
 */
export function elmCleanerArray(templateLit) {
    try {
        let parser = new DOMParser();
        let elmBody = parser.parseFromString(templateLit, 'text/html');
        let elms = elmBody.body.querySelectorAll("*");
        return Array.from(elms);
    } catch (er) {
        throw new Error(er.message);
    }
}

/**
 * @typedef {Array} ImageUrls - A list of image urls
 * @property {string} imageUrl - The url of the desired image
 * @property {Array<string>} imageUrlStrings - An Array of image url strings
 */
