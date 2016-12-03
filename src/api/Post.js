'use strict';

import Base from './Base';

export default class PostApi extends Base {

    create(token, resource) {
        this.apiClient.setAuthToken(token)
    	return this.apiClient.post(this.baseUrl + '/posts', {}, resource)
    }

}
