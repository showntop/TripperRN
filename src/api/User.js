'use strict';

import Base from './Base';

export default class UserApi extends Base {

    create(params) {
        return this.apiClient.post(this.baseUrl + '/users', {}, params);
    }

    signin(params) {
        return this.apiClient.post(this.baseUrl + '/sessions', {}, params);
    }

    update(token, params) {
    	this.apiClient.setAuthToken(token)
    	return this.apiClient.patch(this.baseUrl + '/users', params);
    }
}
