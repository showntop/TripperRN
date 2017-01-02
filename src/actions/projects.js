'use strict';

import * as Apix from '../api';
import TripperHeader from '../components/TripperHeader';

const Api = Apix.default()

//#######################################################//
function listingProject(){
  return{
    type: "listing_project",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function listProject () {
  return dispatch => {
    dispatch(listingProject());
    return Api.project.list().then(result => {
      dispatch(listedProject(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function listedProject (projects) {
  return {
    type: "listed_project",
    data: projects,
    isLoading: false
  }
}

//#######################################################//

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
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
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

export function createProject (user, project) {
  return dispatch => {
    dispatch(creatingProject());
    return Api.project.create(user.token,project).then(result => {
      dispatch(createdProject(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function createdProject (project) {
  return {
    type: "created_project",
    data: project,
    isLoading: false
  }
}

//#######################################################//
function loadingCurrentProject(){
  return{
    type: "loading_current_project",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function fetchProject (id) {
  return dispatch => {
    dispatch(creatingProject());
    return Api.project.show(id).then(response => {
      dispatch(loadedProject(response));
    })
  }
}

function loadedProject (project) {
  return {
    type: "loaded_current_project",
    data: project,
    isLoading: false
  }
}


