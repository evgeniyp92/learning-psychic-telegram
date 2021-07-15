import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

// generally, components should be responsible for fetching
// data they need by calling an action creator

// the action creators are then responsible for making the api
// requests by using redux-thunk

// then you get fetched data into the component by generating
// new state in our redux store, then getting that into the
// component through mapStateToProps

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

// if you dont have a mapStateToProps yet you can just pass null
export default connect(null, { fetchPosts })(PostList);
