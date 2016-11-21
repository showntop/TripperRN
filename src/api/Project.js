import Base from './Base';

var FileUploader = require('NativeModules').FileUpload;

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
}
