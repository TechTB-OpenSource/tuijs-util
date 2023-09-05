function spaceCheck(str) {
    return str.indexOf(' ') >= 0;
}

// Adds zero in front of numbers less than 10
function addZeroLead(num) {
    if (num < 10) { num = "0" + num };
    return num;
}

// Checks for numbers (Returns true if it matches)
function strCheckNum(str) {
    if (str == null) {return};
    const regNm = /[0-9]/;
    if (regNm.test(str) == true) {
        return true;
    }
    return false;
}

// Checks for lowercase characters (Returns true if it matches)
function strCheckLow(str) {
    if (str == null) {return};
    const regLo = /[a-z]/;
    if (regLo.test(str) == true) {
        return true;
    }
    return false;
}

// Checks for uppercase characters (Returns true if it matches)
function strCheckLowUpp(str) {
    if (str == null) {return};
    const regUp = /[A-Z]/;
    if (regUp.test(str) == true) {
        return true;
    }
    return false;
}

// Checks for spcecial characters (Returns true if it matches)
function strCheckSpec(str) {
    if (str == null) {return};
    const regSp = /[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\?]/;
    if (regSp.test(str) == true) {
        return true;
    }
    return false;
}

export { spaceCheck, addZeroLead, strCheckNum, strCheckLow, strCheckLowUpp, strCheckSpec }
