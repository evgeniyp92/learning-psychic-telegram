import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions';

const StreamEdit = ({ fetchStreams, history, location, match, stream }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamEdit);
