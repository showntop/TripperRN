import queryString from 'query-string';

export default class ApiClient {
    constructor() {
        this.prefix = '';
    }

    request({ url, method, params = {}, body }) {
        if (this.authToken) {
            /* eslint-disable */
            params.token = this.authToken;
            /* eslint-enable */
        }

        const urlWithQuery = `${url}${this.prefix}?${queryString.stringify(params)}`;

        const init = {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Sun-Token': this.authToken
            }
        };

        if (method !== 'get' && method !== 'head') {
            init.body = JSON.stringify(body);
        }
        return fetch(`${urlWithQuery}`, init).then(res => {
            if (res.status >= 400) {
                throw res;
            }
            return res.json();
        }).then(data => {
            return data;
        });
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            body: payload,
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'patch',
            body: payload
        });
    }

    post(requestUrl, params={}, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            params: params,
            body: payload
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }


    setAuthToken(authToken) {
        this.authToken = authToken;
    }
}
