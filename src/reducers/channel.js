'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  status: true,
  message: "",
  loading: false,
  albums: [],
  categories: [{id: 0, name: '国际'}],
  users: {},
}

function channel(state: State = initState, action: Action): State {
  if (action.type === 'listed_album') {
    return Object.assign({}, state, {
              loading: false,
              albums: action.data            
            });
  }
  if (action.type === 'listed_category') {
    return Object.assign({}, state, {
              loading: false,
              categories: action.data            
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
