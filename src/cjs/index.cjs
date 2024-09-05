'use strict';

// Checks for a valid FQDN (uses regex)
function checkFqdn(str) {
  if (typeof str !== "string" || str.length === 0 || str.length > 253) {
    return false;
  }
  var pattern = /^(?=.{1,253}$)(([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+([a-zA-Z]{2,}|[a-zA-Z0-9-]{2,}))$/;
  return pattern.test(str);
}

// Checks for a valid URL (uses regex)
function checkUrl(str) {
  try {
    if (str === null || typeof str !== "string") {
      throw new Error(`Invalid input.`);
    }
    ;
    var pattern = new RegExp('^(https?:\\/\\/)?' +
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
    return !!pattern.test(str); // Returns false if the url is invalid
  } catch (er) {
    throw new Error(er);
  }
}

// Checks for special characters (Returns true if it matches)
function checkSpecialChar(str) {
  try {
    if (str === null || typeof str !== "string") {
      throw new Error(`Invalid input.`);
    }
    ;
    const regSp = /[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\?]/;
    if (regSp.test(str) == true) {
      return true;
    }
    return false;
  } catch (er) {
    throw new Error(er);
  }
}

// Checks for a valid Email (uses regex)
function checkEmail(str) {
  try {
    if (str === null || typeof str !== "string") {
      throw new Error(`Invalid input.`);
    }
    ;
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (str.match(validRegex)) {
      return true;
    }
    return false;
  } catch (er) {
    throw new Error(er);
  }
}

// Checks for a space in a string
function checkSpaces(str) {
  try {
    if (str === null || typeof str !== "string") {
      throw new Error(`Invalid input.`);
    }
    ;
    return str.indexOf(' ') >= 0;
  } catch (er) {
    throw new Error(er);
  }
}

// Check for a list of text???
function checkIsList(input) {
  try {
    // Check if the variable is a string
    if (typeof input !== 'string') {
      return false;
    }
    // Split the string by comma
    const items = input.split(',');
    // Check if all items are non-empty strings
    for (let item of items) {
      item = item.trim(); // Trim any leading or trailing whitespace
      if (item === '') {
        return false; // Empty item found
      }
    }
    return true;
  } catch (er) {
    throw new Error(er);
  }
}
function checkIsArray(input) {
  try {
    return input.constructor === Array;
  } catch (er) {
    throw new Error(er);
  }
}

/**
 * Checks if an input value is an object.
 * @param {*} input - Any variable
 * @returns {boolean}
 */
function checkIsObject(input) {
  try {
    return input.constructor === Object;
  } catch (er) {
    throw new Error(er);
  }
}
function checkIsJson(input) {
  try {
    JSON.parse(input);
    return true;
  } catch (er) {
    return false;
  }
}

// Checks for number values in a string (Returns true if it matches)
function checkNum(str) {
  try {
    if (str === null || typeof str !== "string") {
      throw new Error(`Invalid input.`);
    }
    ;
    const regNm = /[0-9]/;
    if (regNm.test(str) === true) {
      return true;
    }
    return false;
  } catch (er) {
    throw new Error(er);
  }
}

// Checks for lowercase characters (Returns true if it matches)
function checkLowercase(str) {
  try {
    if (str === null || typeof str !== "string") {
      throw new Error(`Invalid input.`);
    }
    ;
    const regLo = /[a-z]/;
    if (regLo.test(str) == true) {
      return true;
    }
    return false;
  } catch (er) {
    throw new Error(er);
  }
}

// Checks for uppercase characters (Returns true if it matches)
function checkUppercase(str) {
  try {
    if (str === null || typeof str !== "string") {
      throw new Error(`Invalid input.`);
    }
    ;
    const regUp = /[A-Z]/;
    if (regUp.test(str) == true) {
      return true;
    }
    return false;
  } catch (er) {
    throw new Error(er);
  }
}

/**
 * Takes an HTML template literal, parses it with the DOM parser, then extracts the element with querySelectorAll.
 */
function elmCleaner(templateLit) {
  try {
    let parser = new DOMParser();
    let elmBody = parser.parseFromString(templateLit, 'text/html');
    let elms = elmBody.body.querySelectorAll("*");
    return elms[0];
  } catch (er) {
    console.error(er);
    throw new Error(er);
  }
}

/**
 * Takes an HTML table row template literal, parses it with the DOM parser, then extracts the element with querySelectorAll.
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
    throw new Error(er);
  }
}

/**
 * Takes an HTML template literal, parses it with the DOM parser, then extracts the NodeList. The list is then returned as an array.
 */
function elmCleanerArray(templateLit) {
  try {
    let parser = new DOMParser();
    let elmBody = parser.parseFromString(templateLit, 'text/html');
    let elms = elmBody.body.querySelectorAll("*");
    return Array.from(elms);
  } catch (er) {
    console.error(er);
    throw new Error(er);
  }
}

/**
 * Parses template literal with 'template' tag
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
    throw new Error(er);
  }
}

// Adds 'http://' if valid URL
function urlAddHttp(url) {
  try {
    if (url === null || !checkUrl(url)) {
      throw `Invalid input.`;
    }
    ;
    if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
      url = "http://" + url;
    }
    return url;
  } catch (er) {
    throw new Error(er);
  }
}

// Adds 'https://' if valid URL
function urlAddHttps(url) {
  try {
    if (url === null || !checkUrl(url)) {
      throw `Invalid input.`;
    }
    ;
    if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
      url = "https://" + url;
    }
    return url;
  } catch (er) {
    throw new Error(er);
  }
}

// Simple read JSON file utility
async function reqFileJson(file) {
  try {
    const res = await fetch(file);
    if (!res.ok) {
      return res;
    }
    const data = await res.json();
    return data;
  } catch (er) {
    throw new Error(er);
  }
}

// Simple GET request - This is expecting JSON data from the target URL
async function reqGet(url) {
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    if (!res.ok) {
      throw res;
    }
    return res;
  } catch (er) {
    throw er;
  }
}

// Simple POST request. export function is expecting JSON data. The JSON.parse will throw an error if data is not valid JSON.
// NEEDS REVIEW
async function reqPostJson(url, dataJson) {
  try {
    if (dataJson === null || dataJson === undefined) {
      throw `No JSON data provided`;
    }
    JSON.parse(dataJson);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: dataJson
    });
    if (!res.ok) {
      return res;
    }
    return res;
  } catch (er) {
    throw new Error(er);
  }
}
// Simple POST request. export function is expecting FormData.
// NEEDS REVIEW
async function reqPostForm(url, dataForm) {
  try {
    if (!(dataForm instanceof FormData)) {
      throw `The data provided was not form data`;
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
    throw new Error(er);
  }
}

const htmlTags = ["html", "body", "div", "span", "applet", "object", "iframe", "h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote", "pre", "a", "abbr", "acronym", "address", "big", "cite", "code", "del", "dfn", "em", "img", "ins", "kbd", "q", "s", "samp", "small", "strike", "strong", "sub", "sup", "tt", "var", "b", "u", "i", "center", "dl", "dt", "dd", "ol", "ul", "li", "fieldset", "form", "label", "legend", "table", "caption", "tbody", "tfoot", "thead", "tr", "th", "td", "article", "aside", "canvas", "details", "embed", "figure", "figcaption", "footer", "header", "hgroup", "menu", "nav", "output", "ruby", "section", "summary", "time", "mark", "audio", "video"];

// Adds zero in front of numbers less than 10
function addLeadZero(num) {
  try {
    if (num === null || typeof num !== 'number' || num > 9) {
      throw `Invalid input.`;
    }
    ;
    num = "0" + num;
  } catch (er) {
    console.error(er);
    throw new Error(er);
  }
}

/**
 * Generates a unique ID
 */
function generateUID() {
  return 'uid-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2);
}

/**
 * Preloads images. Requires an array of image URL strings.
 */
function preloadImages(imgUrls) {
  imgUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
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
 * List of RegEx variables for different patterns.
*/
const letters = /^[a-zA-Z]+$/;
const lettersLower = /^[a-z]+$/;
const lettersUpper = /^[A-Z]+$/;
const numbers = /^\d+$/;
const binary = /[^01]/g;
const hexadecimal = /[^0-9A-Fa-f]/g;
const special = /^[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?\/]+$/;

/**
 * Removes characters from a string based on a provided regex pattern.
 * @param {string} string The string to process.
 * @param {RegExp} regex The regex pattern of characters to remove from the string.
 * @return {string} The processed string with specified characters removed.
 * @throws {Error} Throws an error if the first parameter is not a string or if the second parameter is not a RegExp.
 */
function removeChar(string, regex) {
  if (typeof string !== 'string') {
    throw new Error(`First parameter must be a string.`);
  }
  if (!(regex instanceof RegExp)) {
    throw new Error(`Second parameter must be a RegExp.`);
  }
  return string.replace(regex, '');
}

exports.addLeadZero = addLeadZero;
exports.binary = binary;
exports.checkEmail = checkEmail;
exports.checkFqdn = checkFqdn;
exports.checkIsArray = checkIsArray;
exports.checkIsJson = checkIsJson;
exports.checkIsList = checkIsList;
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
exports.hexadecimal = hexadecimal;
exports.htmlTags = htmlTags;
exports.letters = letters;
exports.lettersLower = lettersLower;
exports.lettersUpper = lettersUpper;
exports.numbers = numbers;
exports.parseTemplate = parseTemplate;
exports.preloadImages = preloadImages;
exports.removeChar = removeChar;
exports.reqFileJson = reqFileJson;
exports.reqGet = reqGet;
exports.reqPostForm = reqPostForm;
exports.reqPostJson = reqPostJson;
exports.sleep = sleep;
exports.special = special;
exports.urlAddHttp = urlAddHttp;
exports.urlAddHttps = urlAddHttps;
