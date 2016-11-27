'use strict';

import ApiClient            from './ApiClient';
// import UsersAPI             from './Users';
import ProjectApi             from './Project';
import UserApi             from './User';

const ssoUrl  = `http://192.168.1.112:7000/api/v1`;
const busUrl = `http://192.168.1.112:7007/api/v1`;
// const baseUrl = `https://tripper-1990.herokuapp.com`;

function Api({ apiPrefix } = {}) {
    if (!apiPrefix) {
       // throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient         : api,
        // users             : new UsersAPI({ apiClient: api }),
        project           :new ProjectApi({baseUrl: busUrl, apiClient: api}),
        user              :new UserApi({baseUrl: ssoUrl, apiClient: api})
    };
}

export default Api