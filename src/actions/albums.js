'use strict';

import * as Apix from '../api';
import TripperHeader from '../components/TripperHeader';

const Api = Apix.default()

//#######################################################//
function creatingAlbum(){
  return{
    type: "creating_album",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function createAlbum(user, album) {
  return dispatch => {
    dispatch(creatingAlbum());
    return Api.album.create(user.token, album).then(result => {
      dispatch(createdAlbum(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function createdAlbum (album) {
  return {
    type: "created_album",
    data: album,
    isLoading: false
  }
}

//#######################################################//
function listingAlbum(){
  return{
    type: "listing_album",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function listAlbum () {
  return dispatch => {
    dispatch(listingAlbum());
    return Api.album.list().then(result => {
      dispatch(listedAlbum(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function listedAlbum (albums) {
  return {
    type: "listed_album",
    data: albums,
    isLoading: false
  }
}

//#######################################################//
function listingMyAlbum(){
  return{
    type: "listing_my_album",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function listMyAlbum (token) {
  return dispatch => {
    dispatch(listingMyAlbum());
    return Api.album.listMine(token).then(result => {
      dispatch(listedMyAlbum(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function listedMyAlbum (album) {
  return {
    type: "listed_my_album",
    data: album,
    isLoading: false
  }
}
