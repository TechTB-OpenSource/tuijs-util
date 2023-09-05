/*
*
* TechTB SimpleScript (TJ2S)
* v0.0.1-pre
*
*/
//REQUEST - Get data
// Function is expecting ONLY DATA (No array with boolean expected)
async function ttbReqGetHnd(file) {
    try {
        const resp = await fetch(file, { method: 'POST' });
        if (!resp.ok) {
            throw new Error(resp.status + ' ' + resp.statusText);
        }
        dat = await resp.json();
        return [true, dat];
    } catch(er) {
        console.log(er);
        return [false, er];
    }
}

// REQUEST - Get data with conditions
// Function is execting ONLY DATA (No array with boolean expected)
async function ttbReqGetWithHnd(file, dat) {
    try {
        const resp = await fetch(file, { method: 'POST', body: dat });
        if (!resp.ok) {
            throw new Error(resp.status + ' ' + resp.statusText);
        }
        var dat = await resp.json();
        return [true, dat];
    } catch (er) {
        console.log(er);
        return [false, er];
    }
}

// REQUEST - Send data
// Function is expecting an array returned with 0 as boolean and 1 as data
// Data returned can range from an array or just response text
async function ttbReqSendHnd(file, dat) {
    try {
        const resp = await fetch(file, { method: 'POST', body: dat });
        if (!resp.ok) {
            throw new Error(resp.status + ' ' + resp.statusText);
        }
        dat = await resp.json();
        if (dat[0] == true) {
            return [true, dat[1]];
        }
        if (dat[0] == false) {
            throw new Error(dat[1]);
        }
    } catch (er) {
        console.log(er);
        return [false, er];
    }
}

// Read data from JSON file and return it as a string. 
async function ttbReadJson(filePath) {
    if (filePath == null) {return};
    try {
        const response = await fetch(filePath, {cache: "no-store"});
        const responseJson = await response.json();
        return { responseJson };
    } catch (er) {
        console.log(er);
    }
}

// Counts array and returns length count
function ttbGetAryCnt(datAry) {
    if (datAry == null) {return};
    var datRe = datAry.length;
    return datRe;
}

// Counts array and returns index count
function ttbGetAryIndex(datAry) {
    if (datAry == null) {return};
    var datRe = datAry.length;
    datRe = datRe - 1;
    return datRe;
}

// Convert array length count to index count (Subtracts 1 from num)
function ttbConvCntToIndex(num) {
    if (num == null) {return};
    var datRe = num - 1;
    return datRe;
}

// Removes the last object in an array
function ttbDelAryLast(datAry) {
    if (datAry == null) {return};
    datRe = datAry.slice(0, -1);
    return datRe;
}

// Function to check the validity of a URL
// SOURCE: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function ttbIsValidUrl(str) {
    if (str == null) {return};
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

// Checks to ensure that url starts with http:// or with https://
// THIS WILL NOT WORK WITH SHORTHAND FILE LOCATIONS (Ex; /folder/file.txt)
// Works best when using "ttbIsValidUrl" function first or another url validator
function ttbAddUrlStart(url) {
    if (url == null) {return};
    if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
        url = "http://" + url
    }
    return url;
}

// Function to check if file is an image (Can be altered to include different images)
// SOURCE: https://roufid.com/javascript-check-file-image/
function ttbIsFileImg(fileData) {
    if (fileData == null) {return};
    const imageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    return fileData && imageTypes.includes(fileData['type'])
}

// Function to return the value of radio form element
// The 'form' variable must be the name element for the radio form
// Will return false if nothing is checked
function ttbRadioFormValue(form) {
    if (form == null || form == undefined || form == undefined || form.length == 0) {return false};
    for(count = 0; count < form.length; count++) {
        if(form[count].checked) {
            return form[count].value;
        }
    }
    return false;
}

// Function to call PHP file and return data in JSON
// Function is expecting JSON return status code (usually 1 for succesful and 0 for failure) and JSON return text
async function ttbPostToPhp(phpFile, data = null) {
    if (phpFile == null) {return};
    try {
        const response = await fetch(phpFile, {method: 'POST', body: data });
        const responseJson = await response.json();
        var returnStatus = responseJson[0].returnStatus;
        var returnText = responseJson[1].returnText;
        return { returnStatus, returnText };
    } catch (error) {
        console.log(error);
    }
}

// Function to call PHP file and return data in JSON
async function ttbPostDatFromPhp(phpFile, data = null) {
    if (phpFile == null) {return};
    try {
        const response = await fetch(phpFile, {method: 'POST', body: data });
        const responseJson = await response.json();
        return { responseJson };
    } catch (error) {
        console.log(error);
    }
}

// Function to check for blank space in a string
function ttbStrSpaceCheck(str) {
    if (str == null) {return};
    return str.indexOf(' ') >= 0;
  }

// Show the preview of a selected image in selected an img elemenet
function ttbImgPre(imgInput, imgPreviewElm) {
    if (imgInput == null || imgPreviewElm == null) {return};
    const [file] = imgInput.files;
    if (file) {
        imgPreviewElm.src = URL.createObjectURL(file)
    }
}

// Validates email address as string using regex
function ttbValidEmail(str) {
    if (str == null) {return};
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (str.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

// Adds zero in front of numbers less than 10
function ttbAddZero(num) {
    if (num == null) {return};
    if (num < 10) { num = "0" + num };
    return num;
}

// Gets public IP of client
async function ttbPubIp() {
    try {
        const response = await fetch('https://api.ipify.org');
        return response.text();
    }
    catch (er) {
        console.log(er);
    }
}

// Checks for numbers (Returns true if it matches)
function ttbCharCheckNm(str) {
    if (str == null) {return};
    const regNm = /[0-9]/;
    if (regNm.test(str) == true) {
        return true;
    }
    return false;
}

// Checks for lowercase characters (Returns true if it matches)
function ttbCharCheckLo(str) {
    if (str == null) {return};
    const regLo = /[a-z]/;
    if (regLo.test(str) == true) {
        return true;
    }
    return false;
}

// Checks for uppercase characters (Returns true if it matches)
function ttbCharCheckUp(str) {
    if (str == null) {return};
    const regUp = /[A-Z]/;
    if (regUp.test(str) == true) {
        return true;
    }
    return false;
}

// Checks for spcecial characters (Returns true if it matches)
function ttbCharCheckSp(str) {
    if (str == null) {return};
    const regSp = /[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\?]/;
    if (regSp.test(str) == true) {
        return true;
    }
    return false;
}
