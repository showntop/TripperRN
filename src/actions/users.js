'use strict';

import * as Apix from '../api';
import TripperHeader from '../components/TripperHeader';

const Api = Apix.default()

//#######################################################//
function signuping(){
  return{
    type: "signuping",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function signup (user) {
  return dispatch => {
    dispatch(creatingUser());
    return Api.user.create(user).then(response => {
      dispatch(createdUser(response));
    })
  }
}

function signuped (user) {
  return {
    type: "signuped",
    data: user,
    isLoading: false
  }
}

//#######################################################//
function signining(){
  return{
    type: "signining",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function signin (id) {
  return dispatch => {
    dispatch(creatingUser());
    return Api.user.show(id).then(response => {
      dispatch(loadedUser(response));
    })
  }
}

function signined (user) {
  return {
    type: "signined",
    data: user,
    isLoading: false
  }
}


