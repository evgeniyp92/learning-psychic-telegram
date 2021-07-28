import _ from 'lodash';

const INITIAL_STATE = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `FETCH_STREAM`:
      return { ...state, [action.payload.id]: action.payload };
    case `CREATE_STREAM`:
      return { ...state, [action.payload.id]: action.payload };
    case `EDIT_STREAM`:
      return { ...state, [action.payload.id]: action.payload };
    case `DELETE_STREAM`:
      return _.omit(state, action.payload);
    case `FETCH_STREAMS`:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return { ...state };
  }
};
