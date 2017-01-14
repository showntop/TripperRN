'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  showSpinner: false,
  message: "initing",

  projects: [],
}

function charm(state: State = initState, action: Action): State {
  if (action.type === 'loaded_selected_projects') {
    return Object.assign({}, state, {
              projects: action.data,
            });
  }
  if (action.type === 'loading_selected_projects') {
    return Object.assign({}, state, {
              showSpinner: true,
            });
  }
  return state;
}

export default charm;
