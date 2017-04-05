'use strict';

import * as Apix from '../api';
import TripperHeader from '../components/TripperHeader';

const Api = Apix.default()

//#######################################################//
function listingCategory(){
  return{
    type: "listing_category",
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function listCategory () {
  return dispatch => {
    dispatch(listingCategory());
    return Api.category.list().then(result => {
      dispatch(listedCategory(result));
    }).catch((errors) =>{
      dispatch({type: "REQUEST_ERROR", errors: errors});
    });
  }
}

function listedCategory (categories) {
  return {
    type: "listed_category",
    data: categories,
    isLoading: false
  }
}

