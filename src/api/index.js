'use strict';

import ApiClient            from './ApiClient';

import ProjectApi           from './Project';
import TopicApi             from './Topic';
import UserApi              from './User';

const ssoUrl  = `http://192.168.1.103:7000/api/v1`;
// const busUrl = `http://192.168.1.103:7007/api/v1`;
const busUrl = `https://tripper-1990.herokuapp.com/api/v1`;

function Api({ apiPrefix } = {}) {
    if (!apiPrefix) {
       // throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient         : api,
        // users             : new UsersAPI({ apiClient: api }),
        project           :new ProjectApi({baseUrl: busUrl, apiClient: api}),
        topic             :new TopicApi({baseUrl: busUrl, apiClient: api}),
        user              :new UserApi({baseUrl: ssoUrl, apiClient: api})
    };
}

export default Api