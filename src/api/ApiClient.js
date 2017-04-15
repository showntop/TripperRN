import queryString from 'query-string';

export default class ApiClient {
    constructor() {
        this.prefix = '';
    }

    request({ url, method, query = {}, body }) {
        if (this.authToken) {
            /* eslint-disable */
            query.token = this.authToken;
            /* eslint-enable */
        }

        const urlWithQuery = `${url}${this.prefix}?${queryString.stringify(query)}`;

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
            if (res.status === 403) {
                // return res.json().then((error) =>{
                    error = new Error("用户验证出错");
                    throw error
                // })
            }
            if (res.status >= 500) {
                throw new Error("服务端出错");
            }
            if (res.status >= 400) {
                throw new Error("请求格式校验出错");
            }
            return res.json();
        }).then(data => {
            return data;
        });
    }

    get(requestUrl, query = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            query: query,
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
