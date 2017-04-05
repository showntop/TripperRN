'use strict';

import Base from './Base';
import Qiniu from './Qiniu'
// import {Conf,Rpc} from 'react-native-qiniu';

export default class ProjectApi extends Base {

    list(params) {
        return this.apiClient.get(this.baseUrl + '/projects', {}, params);
    }

    select(params) {
        return this.apiClient.get(this.baseUrl + '/projects?selected=true', {}, params);
    }

    daily(params) {
        return this.apiClient.get(this.baseUrl + '/projects?daily=true', {}, params);
    }

    create(token, project) {
        this.apiClient.setAuthToken(token)
    	return this.apiClient.post(this.baseUrl + '/projects', {}, project)
    }

    show(id) {
    	return this.apiClient.get(this.baseUrl + '/projects/'+ id, {}, {})
    }

    createUptoken() {
        return this.apiClient.post(this.baseUrl + '/qntokens', {}, {});
    }

    uploadAsset(furi, token){
        return Qiniu.uploadFile(furi, token, {})
    }

    createComment(token, project_id, comment) {
        this.apiClient.setAuthToken(token)
        return this.apiClient.post(this.baseUrl + '/projects/'+project_id+'/comments', {}, comment)
    }

    createLike(token, project_id) {
        this.apiClient.setAuthToken(token)
        return this.apiClient.put(this.baseUrl + '/projects/'+project_id+'/likes', {}, {})
    }

    deleteLike(token, project_id) {
        this.apiClient.setAuthToken(token)
        return this.apiClient.delete(this.baseUrl + '/projects/'+project_id+'/likes', {}, {})
    }
}
