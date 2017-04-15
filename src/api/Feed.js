'use strict';

import Base from './Base';

export default class FeedApi extends Base {

    list(query) {
        return this.apiClient.get(this.baseUrl + '/feeds', query);
    }
}
