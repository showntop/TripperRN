'use strict';

import * as Apix from '../api';
import TripperHeader from '../components/TripperHeader';

const Api = Apix.default()

//#######################################################//
function creatingTopic(){
  return{
    type: "creating_topic",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function createTopic (user, topic) {
  return dispatch => {
    dispatch(creatingTopic());
    return Api.topic.create(user.token,topic).then(result => {
      dispatch(createdTopic(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function createdTopic (topic) {
  return {
    type: "created_topic",
    data: topic,
    isLoading: false
  }
}

//#######################################################//
function listingTopic(){
  return{
    type: "listing_topic",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function listTopic () {
  return dispatch => {
    dispatch(listingTopic());
    return Api.topic.list().then(result => {
      dispatch(listedTopic(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function listedTopic (topics) {
  return {
    type: "listed_topic",
    data: topics,
    isLoading: false
  }
}


