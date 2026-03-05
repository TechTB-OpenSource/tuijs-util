// TODO: Finish this??? - Review abort controller in SumIT. Should this be separate?
/**

 */
export function createReqInstance() {
    let controllers = new Map()
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
            const res = await fetch(url, { method: 'GET', signal });
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
            const res = await fetch(url, { method: 'GET', signal });
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
            const res = await fetch(url, { method: 'GET', signal });
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
                headers: { 'Content-Type': 'application/json' },
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
        reqGet,
        reqGetJson,
        reqGetText,
        reqPostJson,
        reqPostForm
    };
}
