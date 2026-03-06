/**
 * Takes an HTML template literal, parses it, then extracts it.
 */
export function parseTemplate(templateLiteral: string): DocumentFragment {
    const parser: DOMParser = new DOMParser();
    const parsedDocument: Document = parser.parseFromString(templateLiteral, 'text/html');
    const element: HTMLTemplateElement | null = parsedDocument.querySelector('template');
    if (!element) {
        const temporaryDiv: HTMLDivElement = document.createElement('div');
        temporaryDiv.replaceChildren(...Array.from(parsedDocument.body.childNodes));
        const newFragment: DocumentFragment = document.createDocumentFragment();
        while (temporaryDiv.firstChild) {
            newFragment.appendChild(temporaryDiv.firstChild);
        }
        return newFragment;
    }
    const elementFragment: DocumentFragment = element.content;
    return elementFragment;
}

/**
 * Takes an HTML template literal, parses it, then extracts the element.
 * All elements in the template MUST be contained within a single parent element.
 */
export function parseElement(templateLiteral: string): Element | undefined {
    const parser: DOMParser = new DOMParser();
    const parsedDocument: Document = parser.parseFromString(templateLiteral, 'text/html');
    const element: NodeListOf<Element> = parsedDocument.body.querySelectorAll("*");
    return element[0];
}

/**
 * Takes an HTML table row template literal, parses it, then extracts the element.
 */
export function parseTableRow(templateLiteral: string): Element | null {
    const parser: DOMParser = new DOMParser();
    const parsedDocument: Document = parser.parseFromString(templateLiteral, 'text/html');
    const element: NodeListOf<Element> = parsedDocument.body.querySelectorAll("*");
    const temporaryTable = document.createElement('table');
    temporaryTable.replaceChildren(...Array.from(element));
    const tableRow: HTMLTableRowElement | null = temporaryTable.querySelector("tr");
    temporaryTable.remove();
    return tableRow;
}

/**
 * Takes an HTML template literal, parses it with the DOM parser, then extracts the NodeList. The list is then returned as an array.
 */
export function listNodes(templateLiteral: string): Element[] {
    const parser: DOMParser = new DOMParser();
    const parsedDocument: Document = parser.parseFromString(templateLiteral, 'text/html');
    const elements: NodeListOf<Element> = parsedDocument.body.querySelectorAll("*");
    return Array.from(elements);
}
