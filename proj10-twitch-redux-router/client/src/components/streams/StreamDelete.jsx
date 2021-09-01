import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <Link className='ui button' to='/'>
          Back
        </Link>
        <button
          className='ui button negative'
          onClick={() => {
            this.props.deleteStream(this.props.match.params.id);
            history.push('/');
          }}>
          Delete
        </button>
      </React.Fragment>
    );
  }

  render() {
    console.log(this.props.stream);
    return (
      <Modal
        title='Delete Stream?'
        content={
          this.props.stream &&
          `Are you sure you wish to delete this stream? ${this.props.stream.title}`
        }
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
