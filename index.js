//// FUNCTIONS ////
// FUNCTIONS - String Checks
// Checks for number values in a string (Returns true if it matches)
function stringCheckNum(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regNm = /[0-9]/;
        if (regNm.test(str) === true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for lowercase characters (Returns true if it matches)
function stringCheckLow(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regLo = /[a-z]/;
        if (regLo.test(str) == true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for uppercase characters (Returns true if it matches)
function stringCheckLowUpp(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regUp = /[A-Z]/;
        if (regUp.test(str) == true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Checks for special characters (Returns true if it matches)
function stringCheckSpec(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        const regSp = /[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\?]/;
        if (regSp.test(str) == true) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// FUNCTIONS - Email
// Checks for a valid Email (uses regex
function emailIsValid(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (str.match(validRegex)) {
            return true;
        }
        return false;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// FUNCTIONS - URL
// Checks for a valid URL (uses regex)
function urlIsValid(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str); // Returns false if the url is invalid
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Adds 'http://' if valid URL
function urlAddHttp(url) {
    try {
        if (str === null || !urlIsValid(str)) {
            throw `Invalid input.`;
        };
        if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
            url = "http://" + url
        }
        return url;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// Adds 'https://' if valid URL
function urlAddHttps(url) {
    try {
        if (str === null || !urlIsValid(str)) {
            throw `Invalid input.`;
        };
        if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
            url = "https://" + url
        }
        return url;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

// FUNCTIONS - Fetch
// Simple GET request
async function reqGetJson(url) {
    try {
        const resp = await fetch(url, { method: 'GET' });
        if (!resp.ok) {
            throw `${resp.status} - ${resp.statusText}`;
        }
        return resp;
    } catch (er) {
        console.error(er);
        return false;
    }
}
// Simple POST request. Function is expecting JSON data. The JSON.parse will throw an error if data is not valid JSON.
async function reqPostJSON(url, dataJson) {
    try {
        if (dataJson === null || dataJson === undefined) {
            throw `No JSON data provided`;
        }
        JSON.parse(dataJson);
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataJson
        });
        if (!resp.ok) {
            throw `${resp.status} - ${resp.statusText}`;
        }
        return resp;
    } catch (er) {
        console.error(er);
        return false;
    }
}
// Simple POST request. Function is expecting FormData.
async function reqPostForm(url, dataForm) {
    try {
        if (!(dataForm instanceof FormData)) {
            throw `The data provided was not form data`;
        }
        const resp = await fetch(url, {
            method: 'POST',
            body: dataForm
        });
        if (!resp.ok) {
            throw `${resp.status} - ${resp.statusText}`;
        }
        return resp;
    } catch (er) {
        console.error(er);
        return false;
    }
}

// FUNCTIONS - MISC
// Checks for a space in a string
function spaceCheck(str) {
    try {
        if (str === null || typeof str !== "string") {
            throw `Invalid input.`;
        };
        return str.indexOf(' ') >= 0;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}
// Adds zero in front of numbers less than 10
function addLeadZero(num) {
    try {
        if (num === null || typeof num !== 'number' || num > 9) {
            throw `Invalid input.`;
        };
        num = "0" + num;
    } catch (er) {
        console.error(er);
        return {
            error: {
                message: er
            }
        }
    }
}

export {
    stringCheckNum,
    stringCheckLow,
    stringCheckLowUpp,
    stringCheckSpec,
    emailIsValid,
    urlIsValid,
    urlAddHttp,
    urlAddHttps,
    reqGetJson,
    reqPostJSON,
    reqPostForm,
    spaceCheck,
    addLeadZero
};
