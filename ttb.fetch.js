/* TTBJS VERSION 0.0.1 */

async function reqPostJson(url) {
    try {
        const resp = await fetch(url, { method: 'POST' });
        if (!resp.ok) {
            throw new Error(resp.status + ' ' + resp.statusText);
        }
        const dat = await resp.json();
        return dat;
    } catch (er) {
        console.error(er);
        return false;
    }
}

async function reqGetJson(url) {
    try {
        const resp = await fetch(url, { method: 'GET' });
        if (!resp.ok) {
            throw new Error(resp.status + ' ' + resp.statusText);
        }
        const dat = await resp.json();
        return dat;
    } catch (er) {
        console.error(er);
        return false;
    }
}

export { reqPostJson, reqGetJson }

