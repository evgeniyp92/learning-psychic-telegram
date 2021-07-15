// these two lines below will trick redux into rendering
// import { combineReducers } from 'redux';
// export default combineReducers({});

import { combineReducers } from 'redux';

export default combineReducers({
  isShuYaoCute: () => true,
});
