'use strict';

function error(state = {errors: []}, action) {
	switch(action.type) {
		case "REQUEST_ERROR":
	      return Object.assign({}, state, {
              errors: [
              	action.errors
              ]
            });


	      state.errors.concat([...action.errors]);

	    case "REMOVE_ERROR":
	      return state.filter((error, i) => i !== action.index);

	    default:
	      return {errors: []};
	}
  	return state;
}

export default error;
