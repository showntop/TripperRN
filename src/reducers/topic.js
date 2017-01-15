'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  showSpinner: false,
  message: "",
  topics: [],  
  topic: {},
}

function topic(state: State = initState, action: Action): State {
  if (action.type === 'listed_topic') {
    return Object.assign({}, state, {
              showSpinner: false,
              topics: action.data            
            });
  }
  if (action.type === 'listing_topic') {
    return Object.assign({}, state, {
              showSpinner: true,
              topics: []
            });
  }
  if (action.type === 'created_topic') {
    return Object.assign({}, state, {
              showSpinner: false,
              message: "创建成功",
              topic: action.data            
            });
  }
  if (action.type === 'creating_topic') {
    return Object.assign({}, state, {
              showSpinner: true,
              message: "创建成功",
              topic: {}
            });
  }
  if (action.type === 'showed_topic') {
    return Object.assign({}, state, {
              showSpinner: false,
              message: "创建成功",
              topic: action.data            
            });
  }
  return state;
}

export default topic;
