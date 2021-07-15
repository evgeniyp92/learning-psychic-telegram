// you can make redux shut up about having an empty store by just passing it something to start
// i.e. below
// import { combineReducers } from 'redux';
//
// export default combineReducers({
//   isShuYaoCute: () => true,
// });

import { combineReducers } from 'redux';

export default combineReducers({
  isTrue: () => true,
});
