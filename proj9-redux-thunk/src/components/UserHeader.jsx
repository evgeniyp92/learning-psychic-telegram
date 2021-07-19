import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserHeader extends Component {
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
// here we are finding the userId in state which corresponds to our
// userId in our props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserHeader);
