/**
 * Takes an HTML template literal, parses it, then extracts it.
 */
export declare function parseTemplate(templateLiteral: string): DocumentFragment | undefined;
/**
 * Takes an HTML template literal, parses it, then extracts the element.
 * All elements in the template MUST be contained within a single parent element.
 */
export declare function parseElement(templateLiteral: string): Element | undefined;
/**
 * Takes an HTML table row template literal, parses it, then extracts the element.
 */
export declare function parseTableRow(templateLiteral: string): Element | null;
/**
 * Takes an HTML template literal, parses it with the DOM parser, then extracts the NodeList. The list is then returned as an array.
 */
export declare function listNodes(templateLiteral: string): Element[];
//# sourceMappingURL=dom.d.ts.map