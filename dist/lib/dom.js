/**
 * Takes an HTML template literal, parses it, then extracts it.
 */
export function parseTemplate(templateLiteral) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(templateLiteral, 'text/html');
    const element = parsedDocument.querySelector('template');
    if (!element) {
        const temporaryDiv = document.createElement('div');
        temporaryDiv.replaceChildren(...Array.from(parsedDocument.body.childNodes));
        const newFragment = document.createDocumentFragment();
        while (temporaryDiv.firstChild) {
            newFragment.appendChild(temporaryDiv.firstChild);
        }
        return newFragment;
    }
    const elementFragment = element.content;
    return elementFragment;
}
/**
 * Takes an HTML template literal, parses it, then extracts the element.
 * All elements in the template MUST be contained within a single parent element.
 */
export function parseElement(templateLiteral) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(templateLiteral, 'text/html');
    const element = parsedDocument.body.querySelectorAll("*");
    return element[0];
}
/**
 * Takes an HTML table row template literal, parses it, then extracts the element.
 */
export function parseTableRow(templateLiteral) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(templateLiteral, 'text/html');
    const element = parsedDocument.body.querySelectorAll("*");
    const temporaryTable = document.createElement('table');
    temporaryTable.replaceChildren(...Array.from(element));
    const tableRow = temporaryTable.querySelector("tr");
    temporaryTable.remove();
    return tableRow;
}
/**
 * Takes an HTML template literal, parses it with the DOM parser, then extracts the NodeList. The list is then returned as an array.
 */
export function listNodes(templateLiteral) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(templateLiteral, 'text/html');
    const elements = parsedDocument.body.querySelectorAll("*");
    return Array.from(elements);
}
//# sourceMappingURL=dom.js.map