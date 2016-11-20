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
//#######################################################//
function loadingDailyProject(){
  return{
    type: "loading_daily_project",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function fetchDailyProject () {
  return dispatch => {
    dispatch(loadingSelectedProjects());
    return Api.project.daily().then(response => {
      dispatch(loadedDailyProject(response));
    })
  }
}

function loadedDailyProject (project) {
  return {
    type: "loaded_daily_project",
    data: project,
    isLoading: false
  }
}

//#######################################################//
function creatingProject(){
  return{
    type: "creating_project",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function createProject (project) {
  return dispatch => {
    dispatch(creatingProject());
    return Api.project.create(project).then(response => {
      dispatch(createdProject(response));
    })
  }
}

function createdProject (project) {
  return {
    type: "created_project",
    data: project,
    isLoading: false
  }
}


