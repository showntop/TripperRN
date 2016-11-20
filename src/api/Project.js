import Base from './Base';

var FileUploader = require('NativeModules').FileUpload;

export default class ProjectApi extends Base {

    select(params) {
        return this.apiClient.get(this.baseUrl + '/projects?selected=true', {}, params);
    }

    daily(params) {
        return this.apiClient.get(this.baseUrl + '/projects?daily=true', {}, params);
    }

    create(params) {
    	return this.apiClient.post(this.baseUrl + '/projects', {}, params)
    }
}
