'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  showSpinner: false,
  message: "initing",
  myAlbums:[],
  currentUser: {
  }
}

function user(state: State = initState, action: Action): State {

  if (action.type === 'created_album') {
    return Object.assign({}, state, {
              state: "succeeded",
              myAlbums: state.myAlbums.concat([action.data]),
            });
  }  
  if (action.type === 'listed_my_album') {
    return Object.assign({}, state, {
              state: "succeeded",
              myAlbums: action.data,
            });
  }  
  if (action.type === 'signining') {
    return Object.assign({}, state, {
              showSpinner: true,
              currentUser: {
              }
            });
  }
  if (action.type === 'signined') {
    return Object.assign({}, state, {
              showSpinner: false,
              currentUser: action.data          
            });
  }
  if (action.type === 'signuping') {
    return Object.assign({}, state, {
              showSpinner: true,
            });
  }
  if (action.type === 'signuped') {
    return Object.assign({}, state, {
              showSpinner: false,
              currentUser: action.data          
            });
  }

  if (action.type === 'REQUEST_ERROR') {
    return Object.assign({}, state, {
              showSpinner: false,
              currentUser: {
                id: "",
              }
            });
  }
  return state;
}

export default user;
