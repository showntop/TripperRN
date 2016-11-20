'use strict';

import * as Apix from '../api';
import TripperHeader from '../components/TripperHeader';

const Api = Apix.default()

function loadingSelectedProjects(){
  return{
    type: "loading_selected_projects",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function fetchSelectedProjects () {
  return dispatch => {
    dispatch(loadingSelectedProjects());
    return Api.project.select().then(response => {
      dispatch(loadedSelectedProjects(response));
    })
  }
}

function loadedSelectedProjects (projects) {
  return {
    type: "loaded_selected_projects",
    data: projects,
    isLoading: false
  }
}


