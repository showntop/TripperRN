'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  status: true,
  message: "",
  loading: false,
  post: {},
}

function post(state: State = initState, action: Action): State {
  if (action.type === 'created_post') {
    return Object.assign({}, state, {
              loading: false,
              status: true,
              message: "创建成功",
              post: action.data            
            });
  }  return state;
}

export default post;
