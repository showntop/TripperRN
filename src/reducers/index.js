'use strict';

import { combineReducers } from 'redux';

import feed   from './feed';
import album   from './album';
import editor  from './editor';
import project from './project';
import topic   from './topic';
import channel from './channel';
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
  userStore: user,
  // spot,
  // location,
  feedStore: feed,
  albumStore: album,
  editorStore: editor,
  projectStore: project,
  errorStore: error,
  topicStore: topic,
  postStore:  post,
  channelStore:  channel,
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
