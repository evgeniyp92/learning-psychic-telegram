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

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user'></i>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

// if you dont have a mapStateToProps yet you can just pass null
export default connect(mapStateToProps, { fetchPosts })(PostList);
