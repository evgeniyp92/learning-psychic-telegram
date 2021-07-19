import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

export class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div>{user.name}</div>;
  }
}

// if you're going to do computations on state you can extract it
// to mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
