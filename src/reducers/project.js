'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  state: "initing",
  message: "initing",

  projectList: [],
  selectedProjects: [],
  dailyProject: {
  },
  createdProject: {
  },
  currentProject: {
  },
}

function project(state: State = initState, action: Action): State {
  if (action.type === 'listed_project') {
    return Object.assign({}, state, {
              state: "succeeded",
              projectList: action.data
            });
  }
  if (action.type === 'loaded_selected_projects') {
    return Object.assign({}, state, {
              state: "succeeded",
              selectedProjects: action.data,
            });
  }
  if (action.type === 'loading_selected_projects') {
    return Object.assign({}, state, {
              state: "succeeded",
            });
  }

  if (action.type === 'loading_daily_project') {
    return Object.assign({}, state, {
              dailyProject: {}
            });
  }
  if (action.type === 'loaded_daily_project') {
    return Object.assign({}, state, {
              dailyProject: {}
            });
  }
  if (action.type === 'created_project') {
    return Object.assign({}, state, {
              state: "succeeded",
              createdProject: {}
            });
  }
  if (action.type === 'loaded_current_project') {
    return Object.assign({}, state, {
              state: "succeeded",
              currentProject: action.data
            });
  }
  return state;
}

export default project;
