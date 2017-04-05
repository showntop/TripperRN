'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  showSpinner: false,
  message: "",
  album: {id: "11111", name: "xxxx"},
}

function album(state: State = initState, action: Action): State {
  if (action.type === 'fetched_album') {
    return Object.assign({}, state, {
              showSpinner: false,
              album: action.data            
            });
  }
  if (action.type === 'fetching_album') {
    return Object.assign({}, state, {
              showSpinner: true,
            });
  }  
  return state;
}

export default album;
