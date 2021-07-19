export default (posts = [], action) => {
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }

  // return posts;

  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return posts;
  }
};
