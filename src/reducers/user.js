'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  currentUser: {
    status: true,
    message: "",
    data: {},
    loading: false,
  }
}

function user(state: State = initState, action: Action): State {
  if (action.type === 'signining') {
    return Object.assign({}, state, {
              currentUser: {
                loading: true,
                data: {},
              }
            });
  }
  if (action.type === 'signined') {
    return Object.assign({}, state, {
              currentUser: {
                loading: false,
                data: action.result,
              }
            });
  }
  if (action.type === 'signuping') {
    return Object.assign({}, state, {
              currentUser: {
              	loading: true,
              	data: {},
              }
            });
  }
  if (action.type === 'signuped') {

    return Object.assign({}, state, {
              currentUser: {
                loading: false,
                data: action.result,
              }
            });
  }
  if (action.type === 'REQUEST_ERROR') {
    if (action.errors.message === "用户验证出错"){
      return Object.assign({}, state, {
        currentUser: {
          loading: false,
          data: {},
        }
      });
    }
  }
  return state;
}

export default user;
