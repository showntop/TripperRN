'use strict';

import * as Apix from '../api';
import TripperHeader from '../components/TripperHeader';

const Api = Apix.default()

//#######################################################//
function creatingPost(){
  return{
    type: "creating_post",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function createPost(user, post) {
  return dispatch => {
    dispatch(creatingPost());
    return Api.post.create(user.token,post).then(result => {
      dispatch(createdPost(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function createdPost(post) {
  return {
    type: "created_post",
    data: post,
    isLoading: false
  }
}
