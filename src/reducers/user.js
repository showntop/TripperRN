'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  loading: false,
  status: true,
  message: "",
  myAlbums:[],
  currentUser: {
    id: "",
  }
}

function user(state: State = initState, action: Action): State {
  if (action.type === 'created_album') {
    return Object.assign({}, state, {
              loading: true,
              myAlbums: state.myAlbums.concat([action.data]),
            });
  }  
  if (action.type === 'listed_my_album') {
    return Object.assign({}, state, {
              loading: true,
              myAlbums: action.data,
            });
  }  
  if (action.type === 'signining') {
    return Object.assign({}, state, {
              loading: true,
              currentUser: action.data          
            });
  }
  if (action.type === 'signined') {
    return Object.assign({}, state, {
              loading: false,
              currentUser: action.data          
            });
  }
  if (action.type === 'signuping') {
    return Object.assign({}, state, {
              currentUser: action.data          
            });
  }
  if (action.type === 'signuped') {

    return Object.assign({}, state, {
              loading: false,
              currentUser: action.data          
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
