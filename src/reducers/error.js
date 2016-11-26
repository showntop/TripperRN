'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  status: false,
  message: "",
}

function error(state: State = initState, action: Action): State {
  if (action.type === 'request error') {
    return Object.assign({}, state, {
                status: true,
                message: action.error.message,
            });
  }

  return state;
}

export default error;
