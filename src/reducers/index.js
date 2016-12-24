'use strict';

import { combineReducers } from 'redux';

import project from './project';
import topic   from './topic';
import post    from './post';
import user    from './user';
import error   from './error';
// import maps from './maps';
// import sessions from './sessions';
// import schedule from './schedule';
// import filter from './filter';
// import navigation from './navigation';
// import friendsSchedules from './friendsSchedules';
// import surveys from './surveys';

const rootReducer = combineReducers({
  // config,
  user,
  // spot,
  // location,
  projectStore: project,
  errorStore: error,
  topicStore: topic,
  postStore:  post,
  // maps,
  // sessions,
  // schedule,
  // topics,
  // filter,
  // navigation,
  // friendsSchedules,
  // surveys,
});

export default rootReducer;
