'use strict';

/**
 * List of RegEx variables for different patterns.
*/
const regExLetters = /^[a-zA-Z]+$/;
const regExLettersLower = /^[a-z]+$/;
const regExLettersUpper = /^[A-Z]+$/;
const regExNumbers = /^\d+$/;
const regExBinary = /^[01]+$/;
const regExHexadecimal = /^[0-9A-Fa-f]+$/;
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
    throw new Error(er.message);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
    throw new Error(`TUI Util Error: ${er.message}`);
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
function elmCleaner(templateLit) {
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
function elmCleanerTr(templateLit) {
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
function elmCleanerArray(templateLit) {
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
    throw new Error(er.message);
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
    throw new Error(er.message);
  }
}

/**
 * Sends GET request to specified URL
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqGet(url) {
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    if (!res.ok) {
      throw new Error(res);
    }
    return res;
  } catch (er) {
    throw new Error(er.message);
  }
}

/**
 * Collects JSON data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqGetJson(url) {
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    if (!res.ok) {
      throw new Error(res);
    }
    const data = await res.json();
    return data;
  } catch (er) {
    throw new Error(er.message);
  }
}

/**
 * Collects text data from a given url
 * @async
 * @param {string} url
 * @returns {Promise<Object>} - Returns data if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqGetText(url) {
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    if (!res.ok) {
      throw new Error(res);
    }
    const data = await res.text();
    return data;
  } catch (er) {
    throw new Error(er.message);
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
async function reqPostJson(url, dataJson) {
  try {
    if (dataJson === null || dataJson === undefined) {
      throw new Error(`No data provided.`);
    }
    if (!checkIsJson(dataJson)) {
      throw new Error(`Provided data is not JSON.`);
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: dataJson
    });
    if (!res.ok) {
      throw new Error(res);
    }
    return res;
  } catch (er) {
    throw new Error(er.message);
  }
}

/**
 * Sends POST request to specified URL, which contains FormData in the body.
 * @param {string} url 
 * @param {FormData} dataForm 
 * @returns {Promise<Object>} - Returns response if response is ok, otherwise it throws an Error.
 * @throws {Error} - Throws Error if an error is detected.
 */
async function reqPostForm(url, dataForm) {
  try {
    if (!(dataForm instanceof FormData)) {
      throw new Error(`The data provided was not form data`);
    }
    const res = await fetch(url, {
      method: 'POST',
      body: dataForm
    });
    if (!res.ok) {
      return res;
    }
    return res;
  } catch (er) {
    throw new Error(er.message);
  }
}

const htmlTags = ["html", "body", "div", "span", "applet", "object", "iframe", "h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote", "pre", "a", "abbr", "acronym", "address", "big", "cite", "code", "del", "dfn", "em", "img", "ins", "kbd", "q", "s", "samp", "small", "strike", "strong", "sub", "sup", "tt", "var", "b", "u", "i", "center", "dl", "dt", "dd", "ol", "ul", "li", "fieldset", "form", "label", "legend", "table", "caption", "tbody", "tfoot", "thead", "tr", "th", "td", "article", "aside", "canvas", "details", "embed", "figure", "figcaption", "footer", "header", "hgroup", "menu", "nav", "output", "ruby", "section", "summary", "time", "mark", "audio", "video"];

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
    throw new Error(er.message);
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
    throw new Error(er.message);
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
    throw new Error(er.message);
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
 *
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
exports.elmCleaner = elmCleaner;
exports.elmCleanerArray = elmCleanerArray;
exports.elmCleanerTr = elmCleanerTr;
exports.generateUID = generateUID;
exports.htmlTags = htmlTags;
exports.parseTemplate = parseTemplate;
exports.preloadImages = preloadImages;
exports.regExBinary = regExBinary;
exports.regExEmail = regExEmail;
exports.regExFqdn = regExFqdn;
exports.regExHexadecimal = regExHexadecimal;
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
