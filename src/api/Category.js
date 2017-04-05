'use strict';

import Base from './Base';

export default class TopicApi extends Base {

    list(params) {
        return this.apiClient.get(this.baseUrl + '/categories', {}, {});
    }

    show(id) {
    	return this.apiClient.get(this.baseUrl + '/categories/'+ id, {}, {})
    }

}
