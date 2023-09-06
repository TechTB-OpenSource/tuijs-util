/* TTBJS VERSION 0.0.1 */

function urlIsValid(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function urlAddHttp(url) {
    if (url == null) {return};
    if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
        url = "http://" + url
    }
    return url;
}

function urlAddHttps(url) {
    if (url == null) {return};
    if (url.startsWith("http://") == false && url.startsWith("https://") == false) {
        url = "https://" + url
    }
    return url;
}

export { urlIsValid, urlAddHttp, urlAddHttps }
