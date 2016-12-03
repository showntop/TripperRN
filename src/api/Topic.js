'use strict';

import Base from './Base';

export default class TopicApi extends Base {

    list(params) {
        return this.apiClient.get(this.baseUrl + '/topics', {}, params);
    }

    create(token, project) {
        this.apiClient.setAuthToken(token)
    	return this.apiClient.post(this.baseUrl + '/topics', {}, project)
    }

    show(id) {
    	return this.apiClient.get(this.baseUrl + '/topics/'+ id, {}, {})
    }

}
