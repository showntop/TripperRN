'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  status: true,
  message: "",
  loading: false,
  topics: [],  
  topic: {},
}

function topic(state: State = initState, action: Action): State {
  if (action.type === 'listed_topic') {
    return Object.assign({}, state, {
              loading: false,
              topics: action.data            
            });
  }
  if (action.type === 'listing_topic') {
    return Object.assign({}, state, {
              loading: true,
              topics: []
            });
  }
  if (action.type === 'created_topic') {
    return Object.assign({}, state, {
              loading: false,
              status: true,
              message: "创建成功",
              topic: action.data            
            });
  }
  if (action.type === 'showed_topic') {
    return Object.assign({}, state, {
              loading: false,
              status: true,
              message: "创建成功",
              topic: action.data            
            });
  }
  return state;
}

export default topic;
