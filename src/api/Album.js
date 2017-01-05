'use strict';

import Base from './Base';

export default class AlbumApi extends Base {

    create(token, resource) {
        this.apiClient.setAuthToken(token)
    	return this.apiClient.post(this.baseUrl + '/albums', {}, resource)
    }

    listMine(token) {
    	this.apiClient.setAuthToken(token)
    	return this.apiClient.get(this.baseUrl + '/users/me/albums', {}, {})
    }

}
