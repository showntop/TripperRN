'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

function project(state: State = {selectedProject: {data:[]}}, action: Action): State {
  if (action.type === 'loaded_selected_projects') {
    return Object.assign({}, state, {
              selectedProject: {
              	loading: false,
              	data: action.data,
              }
            });
  }
  if (action.type === 'loading_selected_projects') {
    return Object.assign({}, state, {
              selectedProject: {
              	loading: true,
              	data: [],
              }
            });
  }
  return state;
}

export default project;
