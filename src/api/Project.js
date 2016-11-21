'use strict';

import Base from './Base';
import Qiniu from './Qiniu'
// import {Conf,Rpc} from 'react-native-qiniu';

export default class ProjectApi extends Base {

    select(params) {
        return this.apiClient.get(this.baseUrl + '/projects?selected=true', {}, params);
    }

    daily(params) {
        return this.apiClient.get(this.baseUrl + '/projects?daily=true', {}, params);
    }

    create(project) {
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

}
