'use strict';

import * as Apix from '../api';

const Api = Apix.default()

//#######################################################//
function listingFeed(){
  return{
    type: "listing_feeds",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function listFeed(params) {
  return dispatch => {
    dispatch(listingFeed());
    return Api.feed.list(params).then(result => {
      dispatch(listedFeed(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function listedFeed (feeds) {
  return {
    type: "listed_feeds",
    data: feeds,
    isLoading: false
  }
}
