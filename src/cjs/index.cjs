'use strict';

/**
 * List of RegEx variables for different patterns.
*/
const regExLetters = /^[a-zA-Z]+$/;
const regExLettersLower = /^[a-z]+$/;
const regExLettersUpper = /^[A-Z]+$/;
const regExNumbers = /^\d+$/;
const regExBin = /^[01]+$/; // Matches entire string for binary characters
const regExBinChar = /[01]/g; // Matches individual binary characters.
const regExBinNon = /[^01]/g; // Matches characters not in the binary range
const regExHex = /^[0-9A-Fa-f]+$/; // Matches entire string for hexadecimal characters
const regExHexChar = /[0-9A-Fa-f]/g; // Matches individual hexadecimal characters.
const regExHexNon = /[^0-9A-Fa-f]/g; // Matches characters not in the hexadecimal range
const regExSpecial = /^[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?\`\\\~]+$/;
const regExFqdn = /^(?=.{1,253}$)(([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+([a-zA-Z]{2,}|[a-zA-Z0-9-]{2,}))$/;
const regExUrl = new RegExp('^(https?:\\/\\/)?' +
// protocol
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
// domain name
'((\\d{1,3}\\.){3}\\d{1,3}))' +
// OR ip (v4) address
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
// port and path
'(\\?[;&a-z\\d%_.~+=-]*)?' +
// query string
'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
const regExEmail = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,}$/;

/**
 * Removes characters from a string based on a provided regex pattern.
 * @param {string} string The string to process.
 * @param {RegExp} regex The regex pattern of characters to remove from the string.
 * @return {string} The processed string with specified characters removed.
 * @throws {Error} Throws an error if the first parameter is not a string or if the second parameter is not a RegExp.
 */
function removeChar(string, regEx) {
  try {
    if (typeof string !== 'string') {
      throw new Error(`First parameter must be a string.`);
    }
    if (!(regEx instanceof RegExp)) {
      throw new Error(`Second parameter must be a RegExp.`);
    }
    return string.replace(regEx, '');
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for a valid FQDN (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkFqdn(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    return regExFqdn.test(string);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for a valid URL (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if test is successful and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkUrl(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    ;
    return regExUrl.test(string); // Returns false if the url is invalid
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for special characters (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if a special character is found and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkSpecialChar(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    ;
    return regExSpecial.test(string);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for number values in a string (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a number is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkNum(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    ;
    return regExNumbers.test(string);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for lowercase characters (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a lowercase character is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkLowercase(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    ;
    return regExLettersLower.test(string);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for uppercase characters (Uses RegEx)
 * @param {string} string 
 * @returns {boolean} - Returns true if a uppercase character is found and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkUppercase(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    ;
    return regExLettersUpper.test(string);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for a valid email address. (Uses RegEx).
 * @param {string} string 
 * @returns {boolean} - Returns true if email pattern test is successful and false if the string is not validated or the RegEx test fails.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkEmail(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    ;
    return regExEmail.test(string);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks for a space in a string
 * @param {string} string 
 * @returns {boolean} - Returns true if space is found and false if the string is not validated or if a space is not found.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkSpaces(string) {
  try {
    if (typeof string !== 'string' || string.length === 0) {
      return false;
    }
    ;
    return str.indexOf(' ') >= 0;
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks an input to determine if it is an Array.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is an Array and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkIsArray(input) {
  try {
    return Array.isArray(input);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks an input to determine if it is an Object.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is an Object and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkIsObject(input) {
  try {
    return input !== null && typeof input === 'object' && input.constructor === Object;
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks an input to determine if it is valid JSON.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is valid JSON and false if not.
 */
function checkIsJson(input) {
  try {
    const parsed = JSON.parse(input);
    return (typeof parsed === 'object' || typeof parsed === 'number' || typeof parsed === 'boolean' || typeof parsed === 'string') && parsed !== null;
  } catch (er) {
    return false;
  }
}

/**
 * Checks an input to determine if it is an Element.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is an Element and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkIsElement(input) {
  try {
    return input instanceof Element || input instanceof Document || input instanceof Window || input instanceof DocumentFragment || input instanceof ShadowRoot;
  } catch (er) {
    console.error(er);
  }
}

/**
 * Checks an input to determine if it is a Function.
 * @param {*} input 
 * @returns {boolean} - Returns true if the input is a Function and false if not.
 * @throws {Error} - Throws error message if error occurs.
 */
function checkIsFunction(input) {
  try {
    return typeof input === 'function';
  } catch (er) {
    console.error(er);
  }
}

/**
 * Takes an HTML template literal, parses it, then extracts it.
 * All elements in the template MUST be contained within a single set of template tags.
 * THIS IS THE RECOMMENDED PARSER TO USE.
 * @param {string} templateLit - An HTML string containing a <template> tag.
 * @returns {DocumentFragment} - Returns a DocumentFragment which has been parsed and queried.
 * @throws {Error} - Throws error message if error occurs.
 */
function parseTemplate(templateLit) {
  try {
    let parser = new DOMParser();
    let doc = parser.parseFromString(templateLit, 'text/html');
    let template = doc.querySelector('template');
    if (!template) {
      throw new Error('No template tag found in the provided string.');
    }
    return template.content;
  } catch (er) {
    console.error(er);
  }
}

/**
 * Takes an HTML template literal, parses it, then extracts the element.
 * All elements in the template MUST be contained within a single parent element.
 * @param {string} templateLit 
 * @returns {Element} - Returns a element Object which has been parsed and queried.
 * @throws {Error} - Throws error message if error occurs.
 */
function elmCleaner(templateLit) {
  try {
    let parser = new DOMParser();
    let elmBody = parser.parseFromString(templateLit, 'text/html');
    let elms = elmBody.body.querySelectorAll("*");
    return elms[0];
  } catch (er) {
    console.error(er);
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
function elmCleanerTr(templateLit) {
  try {
    let elmTemp = document.createElement('table');
    elmTemp.innerHTML = templateLit;
    let elms = elmTemp.querySelector("tr");
    elmTemp.remove();
    return elms;
  } catch (er) {
    console.error(er);
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
function elmCleanerArray(templateLit) {
  try {
    let parser = new DOMParser();
    let elmBody = parser.parseFromString(templateLit, 'text/html');
    let elms = elmBody.body.querySelectorAll("*");
    return Array.from(elms);
  } catch (er) {
    console.error(er);
  }
}

/**
 * Adds 'http://' if valid URL and 'http://' or 'https://' is missing.
 * @param {string} url 
 * @returns {string} - Returns an updated url string if necessary or returns the same string if url already starts with 'http://' or 'https://'.
 * @throws {Error} - Throws Error if an error is detected.
 */
function urlAddHttp(url) {
  try {
    if (url === null || !checkUrl(url)) {
      throw new Error(`Invalid input.`);
    }
    ;
    if (url.startsWith("http://") === false && url.startsWith("https://") === false) {
      url = "http://" + url;
    }
    return url;
  } catch (er) {
    console.error(er);
  }
}

/**
 * Adds 'https://' if valid URL and 'http://' or 'https://' is missing.
 * @param {string} url 
 * @returns {string} - Returns an updated url string if necessary or returns the same string if url already starts with 'http://' or 'https://'.
 * @throws {Error} - Throws Error if an error is detected.
 */
function urlAddHttps(url) {
  try {
    if (url === null || !checkUrl(url)) {
      throw new Error(`Invalid input.`);
    }
    ;
    if (url.startsWith("http://") === false && url.startsWith("https://") === false) {
      url = "https://" + url;
    }
    return url;
  } catch (er) {
    console.error(er);
  }
}

/**

 */
async function createReqInstance() {
  let controllers = new Map();
  function createController(id) {
    if (controllers.has(id)) {
      abortRequest(id); // Ensure previous request is aborted
    }
    const controller = new AbortController();
    controllers.set(id, controller);
    return controller.signal;
  }
  function abortRequest(id) {
    if (controllers.has(id)) {
      controllers.get(id).abort();
      controllers.delete(id);
    }
  }
  function abortAll() {
    controllers.forEach(controller => controller.abort());
    controllers.clear();
  }
  async function reqGet(url, id) {
    try {
      const signal = createController(id);
      const res = await fetch(url, {
        method: 'GET',
        signal
      });
      return res;
    } catch (er) {
      if (er.name === 'AbortError') {
        console.warn('Fetch aborted:', url);
      } else {
        console.error(er);
      }
    }
  }
  async function reqGetJson(url, id) {
    try {
      const signal = createController(id);
      const res = await fetch(url, {
        method: 'GET',
        signal
      });
      return await res.json();
    } catch (er) {
      if (er.name === 'AbortError') {
        console.warn('Fetch aborted:', url);
      } else {
        console.error(er);
      }
    }
  }
  async function reqGetText(url, id) {
    try {
      const signal = createController(id);
      const res = await fetch(url, {
        method: 'GET',
        signal
      });
      return await res.text();
    } catch (er) {
      if (er.name === 'AbortError') {
        console.warn('Fetch aborted:', url);
      } else {
        console.error(er);
      }
    }
  }
  async function reqPostJson(url, dataJson, id) {
    try {
      const signal = createController(id);
      if (!dataJson || typeof dataJson !== 'object') {
        throw new Error(`Invalid JSON data`);
      }
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataJson),
        signal
      });
      return res;
    } catch (er) {
      if (er.name === 'AbortError') {
        console.warn('Fetch aborted:', url);
      } else {
        console.error(er);
      }
    }
  }
  async function reqPostForm(url, dataForm, id) {
    try {
      const signal = createController(id);
      if (!(dataForm instanceof FormData)) {
        throw new Error(`Provided data is not FormData`);
      }
      const res = await fetch(url, {
        method: 'POST',
        body: dataForm,
        signal
      });
      return res;
    } catch (er) {
      if (er.name === 'AbortError') {
        console.warn('Fetch aborted:', url);
      } else {
        console.error(er);
      }
    }
  }
  return {
    createController,
    abortRequest,
    abortAll,
    reqGet: url => reqGet(url, id),
    reqGetJson: url => reqGetJson(url, id),
    reqGetText: url => reqGetText(url, id),
    reqPostJson: (url, dataJson) => reqPostJson(url, dataJson, id),
    reqPostForm: (url, dataForm) => reqPostForm(url, dataForm, id)
  };
}

/**
 * Sends GET request to specified URL
 * @async
 * @param {string} url
 * @param {  }
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqGet(url, signal = null) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      signal
    });
    return res;
  } catch (er) {
    if (er.name === 'AbortError') {
      console.warn('Fetch aborted:', url);
    } else {
      console.error(er);
    }
  }
}

/**
 * Collects JSON data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqGetJson(url, signal = null) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      signal
    });
    return await res.json();
  } catch (er) {
    if (er.name === 'AbortError') {
      console.warn('Fetch aborted:', url);
    } else {
      console.error(er);
    }
  }
}

/**
 * Collects text data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqGetText(url, signal = null) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      signal
    });
    return await res.text();
  } catch (er) {
    if (er.name === 'AbortError') {
      console.warn('Fetch aborted:', url);
    } else {
      console.error(er);
    }
  }
}

/**
 * Sends POST request to specified URL, which contains JSON data in the body.
 * @async
 * @param {string} url
 * @param {JSON} dataJson
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqPostJson(url, dataJson, signal = null) {
  try {
    if (!dataJson || typeof dataJson !== 'object') {
      throw new Error(`Invalid JSON data`);
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataJson),
      signal
    });
    return res;
  } catch (er) {
    if (er.name === 'AbortError') {
      console.warn('Fetch aborted:', url);
    } else {
      console.error(er);
    }
  }
}

/**
 * Sends POST request to specified URL, which contains FormData in the body.
 * @param {string} url 
 * @param {FormData} dataForm 
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqPostForm(url, dataForm, signal = null) {
  try {
    if (!(dataForm instanceof FormData)) {
      throw new Error(`Provided data is not FormData`);
    }
    const res = await fetch(url, {
      method: 'POST',
      body: dataForm,
      signal
    });
    return res;
  } catch (er) {
    if (er.name === 'AbortError') {
      console.warn('Fetch aborted:', url);
    } else {
      console.error(er);
    }
  }
}

const listNumChar = '1234567890';
const listUpChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const listLowChar = 'abcdefghijklmnopqrstuvwxyz';
const listSpecChar = '!@#$%^&*()';
const listHtmlTags = ["html", "body", "div", "span", "applet", "object", "iframe", "h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote", "pre", "a", "abbr", "acronym", "address", "big", "cite", "code", "del", "dfn", "em", "img", "ins", "kbd", "q", "s", "samp", "small", "strike", "strong", "sub", "sup", "tt", "var", "b", "u", "i", "center", "dl", "dt", "dd", "ol", "ul", "li", "fieldset", "form", "label", "legend", "table", "caption", "tbody", "tfoot", "thead", "tr", "th", "td", "article", "aside", "canvas", "details", "embed", "figure", "figcaption", "footer", "header", "hgroup", "menu", "nav", "output", "ruby", "section", "summary", "time", "mark", "audio", "video"];

/**
 * Adds zero in front of numbers less than 10 and returns as a string.
 * @param {number} num 
 * @returns {string}
 * @throws {Error} - Throws Error if an error is detected.
 */
function addLeadZero(num) {
  try {
    if (num === null || typeof num !== 'number' || num > 9) {
      throw new Error(`Invalid input.`);
    }
    ;
    return "0" + num;
    ;
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
function generateUID(length = 16) {
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
async function preloadImages(imageUrls) {
  try {
    const loadImage = url => {
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
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * NEED TO ADD NAME AND JSDOC
 */
function scrollIntoView() {
  let allObservers = [];
  function addObserver(targets, callback, observerOptions = {
    threshold: 0.5
  }) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Only trigger when the element is intersecting
          callback(entry.target);
        }
      });
    }, observerOptions);
    for (let i = 0; i < targets.length; i++) {
      observer.observe(targets[i]);
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
  };
}

/**
 * Parses a function and its parameters when it is in the form of a string.
 * This can be used to embed function strings into custom HTML elements.
 * The Function MUST exist in the window object.
 * @param {string} string 
 * @returns {Function} - Returns an executable function with its parameters
 * @throws {Error} - Throws error message if error occurs.
 */
function parseFunctionString(string) {
  try {
    if (typeof string !== 'string' || string.trim() === '') {
      throw new Error('Input must be a non-empty string.');
    }
    const match = string.match(/^(\w+)\((.*)\)$/); // Match "functionName(args)"
    if (!match) {
      throw new Error('Input does not match the expected pattern "functionName(args)".');
    }
    const [_, funcName, args] = match;
    const func = window[funcName];
    if (typeof func !== 'function') {
      throw new Error(`"${funcName}" is not a valid function.`);
    }
    const parsedArgs = args.split(',').map(arg => arg.trim().replace(/^['"]|['"]$/g, '')) // Trim and remove quotes
    .filter(arg => arg !== ''); // Remove empty strings from args
    return () => func(...parsedArgs);
  } catch (er) {
    console.error(er);
  }
}

exports.addLeadZero = addLeadZero;
exports.checkEmail = checkEmail;
exports.checkFqdn = checkFqdn;
exports.checkIsArray = checkIsArray;
exports.checkIsElement = checkIsElement;
exports.checkIsFunction = checkIsFunction;
exports.checkIsJson = checkIsJson;
exports.checkIsObject = checkIsObject;
exports.checkLowercase = checkLowercase;
exports.checkNum = checkNum;
exports.checkSpaces = checkSpaces;
exports.checkSpecialChar = checkSpecialChar;
exports.checkUppercase = checkUppercase;
exports.checkUrl = checkUrl;
exports.createReqInstance = createReqInstance;
exports.elmCleaner = elmCleaner;
exports.elmCleanerArray = elmCleanerArray;
exports.elmCleanerTr = elmCleanerTr;
exports.generateUID = generateUID;
exports.listHtmlTags = listHtmlTags;
exports.listLowChar = listLowChar;
exports.listNumChar = listNumChar;
exports.listSpecChar = listSpecChar;
exports.listUpChar = listUpChar;
exports.parseFunctionString = parseFunctionString;
exports.parseTemplate = parseTemplate;
exports.preloadImages = preloadImages;
exports.regExBin = regExBin;
exports.regExBinChar = regExBinChar;
exports.regExBinNon = regExBinNon;
exports.regExEmail = regExEmail;
exports.regExFqdn = regExFqdn;
exports.regExHex = regExHex;
exports.regExHexChar = regExHexChar;
exports.regExHexNon = regExHexNon;
exports.regExLetters = regExLetters;
exports.regExLettersLower = regExLettersLower;
exports.regExLettersUpper = regExLettersUpper;
exports.regExNumbers = regExNumbers;
exports.regExSpecial = regExSpecial;
exports.regExUrl = regExUrl;
exports.removeChar = removeChar;
exports.reqGet = reqGet;
exports.reqGetJson = reqGetJson;
exports.reqGetText = reqGetText;
exports.reqPostForm = reqPostForm;
exports.reqPostJson = reqPostJson;
exports.scrollIntoView = scrollIntoView;
exports.sleep = sleep;
exports.urlAddHttp = urlAddHttp;
exports.urlAddHttps = urlAddHttps;
