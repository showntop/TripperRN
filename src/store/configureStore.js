'use strict';

import {applyMiddleware, createStore, compose}  from 'redux';
import thunk         from 'redux-thunk';
import promise       from './promise';
import array         from './array';
import analytics     from './analytics';
import reducers      from '../reducers';
import createLogger  from 'redux-logger';
import {persistStore, autoRehydrate}  from 'redux-persist';
import {AsyncStorage}  from 'react-native';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

var createTripStore = applyMiddleware(thunk, promise, array, analytics, logger)(createStore);

function configureStore(onComplete: ?() => void) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  // const store = (createTripStore)(reducers);

  const store = compose(autoRehydrate())(createTripStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;