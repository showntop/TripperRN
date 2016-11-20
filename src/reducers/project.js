'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  selectedProject: {
    data: [],
  },
  dailyProject: {
    data: null,
  }

}

function project(state: State = initState, action: Action): State {
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

  if (action.type === 'loading_daily_project') {
    return Object.assign({}, state, {
              dailyProject: {
                loading: true,
                data: null,
              }
            });
  }
  if (action.type === 'loaded_daily_project') {
    return Object.assign({}, state, {
              dailyProject: {
              	loading: false,
              	data: action.data,
              }
            });
  }
  return state;
}

export default project;
