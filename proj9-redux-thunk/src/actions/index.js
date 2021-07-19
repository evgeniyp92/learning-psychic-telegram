import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

// DONT WRITE YOUR CODE LIKE THIS
// WE ARE BREAKING THE RULES OF REDUX DOING THIS
// ACTIONS CANT BE PLAIN OBJECTS, YOU HAVE TO USE MIDDLEWARE
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts');
//   return {
//     type: 'FETCH_POSTS',
//     payload: response,
//   };
// };

// just because we are writing it to return an object it doesnt necessarily
// do that when its transpiled down to ES2015, thanks babel
// https://babeljs.io/repl#?browsers=&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBAZgUysAFgBRNCMC8MCGEAnmMDABQCUuAfDAN4BQMMoksATghAA7gQJcBAO74AlrABWEcGgA2-YAhQg5AEwQcAdAHMk5AOQB6PlgOUA3MxhcoAVw5gG1llCI8EALhgGAYgFEAFQBhAAkAfTQAeQBlQJiDABoXGB58IjkQfDVvLl5-BGSWAF8rUqA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3%2Ctypescript%2Cflow&prettier=true&targets=&version=7.14.7&externalPlugins=
// thats what is actually looks like transpiled with async await
// in case 0 of the transpiled code we return the request,
// which is the source of this entire headache, yay
// so redux has a fit because it sees the request object as being passed in
// and thats not a plain js object, but a request object with fancy methods and
// probably not a type prop.
// ADDITIONALLY, because network communications are relatively slow, and redux runs in miliseconds,
// by the time we get our response everything is done rendering,
// and without async we get a promise.
// We cant just tell a reducer to wait.
//
//
// https://babeljs.io/repl#?browsers=&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBAZgUysAFgBRNCMC8MAUAlLgHwwDeAUDDKJLAE4IQAO4ECuMAVhOGgBsAhsAQoQAgCYIGAOgDmSfAHIA9GyzLCAbmowmUAK4MwFPTSgBPFggBcMZQDEAogBUAwgAkA-mgDyAMquAcoANOYwLEKWAiBCkvZMrOwI4TQAvrqZQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3%2Ctypescript%2Cflow&prettier=true&targets=&version=7.14.7&externalPlugins=
// thats what it looks like without
// so basically async is neat but its a fucking nightmare on the backend

// With redux thunk we can return a function as well as an action object
// If redux thunk sees a function it will call it for you
// with redux thunk we can manually dispatch actions in the future
// after the action is dispatched it gets passed back into thunk again as an object
// so thunk passes it down to the reducers
export const fetchPosts = () => async (dispatch, getState) => {
  // in the inner function you do not return any actions from the inner object
  // call dispatch instead
  // also, with thunk async await in inner functions is perfectly fine again
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: `FETCH_POSTS`, payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // when you have action creators in action creators you must make sure to dispatch the function
  // since we don't want to try to access the list of posts before its done we need to add await
  // this way the function waits for the GET to complete before proceeding
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  for (const id of userIds) {
    dispatch(fetchUser(id));
  }

  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value();
};
