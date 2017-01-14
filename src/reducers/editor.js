'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  showSpinner: false,
  message: "initing",  
  project: {
    id: ""
  }
}

function editor(state: State = initState, action: Action): State {
  if (action.type === 'creating_project') {
    return Object.assign({}, state, {
              showSpinner: true,
              project: {
                id: ""
              }
            });
  }  
  if (action.type === 'created_project') {
    return Object.assign({}, state, {
              showSpinner: false,
              message: '处理成功',
              project: action.data
            });
  }
  if (action.type === 'REQUEST_ERROR') {
    return Object.assign({}, state, {
              showSpinner: false,
              project: {
                id: ""
              }
            });
  }
  return state;
}

export default editor;
