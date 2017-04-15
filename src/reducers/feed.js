'use strict';

type State = Array<string>;
type Action = { type: string; list: Array<any>; };

var initState = {
  loadingMore: false,
  refreshing:  false,
  hasMore: true,
  currentPage: 1,

  feeds: [],
}

function feed(state: State = initState, action: Action): State {
  if (action.type === 'listed_feeds') {
    return Object.assign({}, state, {
              feeds: state.feeds.concat(action.data),
              refreshing: false,
              currentPage: state.currentPage + 1,
              hasMore: action.data.length != 0,
            });
  }
  if (action.type === 'listing_feeds') {
    return Object.assign({}, state, {
              loadingMore: true,
            });
  }
  return state;
}

export default feed;
