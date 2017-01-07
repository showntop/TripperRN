'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  status: true,
  message: "",
  loading: false,
  albums: [],  
  users: {},
}

function channel(state: State = initState, action: Action): State {
  if (action.type === 'listed_album') {
    return Object.assign({}, state, {
              loading: false,
              albums: action.data            
            });
  }
  if (action.type === 'listing_album') {
    return Object.assign({}, state, {
              loading: true,
              albums: []
            });
  }
  return state;
}

export default channel;
