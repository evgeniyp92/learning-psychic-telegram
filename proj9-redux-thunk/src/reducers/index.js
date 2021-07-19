// you can make redux shut up about having an empty store by just passing it something to start
// i.e. below
// import { combineReducers } from 'redux';
//
// export default combineReducers({
//   isShuYaoCute: () => true,
// });

// rules of reducers
// 1) Must return *any* value besides undefined
// 2) Produces state using only previous state and the action
// 3) Can't reach out of itself to determine what to return
// 4) Must not mutate its input 'state' arg (you have to return new state)
// 4.5) I mean, you can but its not recommended
// 4.9) There's a corner case
// if your old state and new state point to the exact same object in the heap
// it will return the old object

import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  isTrue: () => true,
});
