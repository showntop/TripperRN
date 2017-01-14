'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  showOping: false,
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
  if (action.type === 'created_project_comment') {
    let a = state.currentProject.comments;
    state.currentProject.comments = a.concat(action.data);
    return Object.assign({}, state, {
              state: "succeeded",
              currentProject: state.currentProject,
            });
  }  
  if (action.type === 'created_project_like') {
    state.currentProject.liked = true;
    return Object.assign({}, state, {
              showOping: false,
              currentProject: state.currentProject,
            });
  }   
  if (action.type === 'creating_project') {
    return Object.assign({}, state, {
              showOping: true,
            });
  }  
  if (action.type === 'deleted_project_like') {
    state.currentProject.liked = false;
    return Object.assign({}, state, {
              state: "succeeded",
              currentProject: state.currentProject,
            });
  }  
  if (action.type === 'listed_project') {
    return Object.assign({}, state, {
              state: "succeeded",
              projectList: action.data
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
