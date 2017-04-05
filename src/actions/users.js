'use strict';
import TripperHeader from '../components/TripperHeader';

import * as Apix from '../api';
const Api = Apix.default()
//#######################################################//
function signuping(){
  return{
    type: "signuping",
    result:{
      isLoading: true,
      result: null
    }
  }
}

export function signup (user) {
  return dispatch => {
    dispatch(signuping());
    return Api.user.create(user).then(response => {
      dispatch(signuped(response));
    }).catch( response => {
      return response.json()
    })
  }
}

function signuped (user) {
  return {
    type: "signuped",
    result: user,
    isLoading: false
  }
}

//#######################################################//
function signining(){
  return{
    type: "signining",
  }
}

export function signin (loginInfo) {
  return dispatch => {
    dispatch(signining());
    return Api.user.signin(loginInfo).then(result => {
      dispatch(signined(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function signined (user) {
  return {
    type: "signined",
    data: user
  }
}

//#######################################################//
function updating(){
  return{
    type: "user_updating",
    result:{
      isLoading: true,
      result: null
    }
  }
}

export function update (token,userInfo) {
  return dispatch => {
    dispatch(updating());
    return Api.user.update(token,userInfo).then(result => {
      dispatch(updated(result));
    }).catch( response => {
      return response.json()
    }).then((error) =>{
      if (error.status == 403){
        dispatch({type: "auth error", error: error});
      }else{
        dispatch({type: "request error", error: error});
      }
    });
  }
}

function updated (user) {
  return {
    type: "user_updated",
    result: user,
    isLoading: false
  }
}


