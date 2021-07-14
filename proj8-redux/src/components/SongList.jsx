import React, { Component } from 'react';
// this is the import to connect to redux
import { connect } from 'react-redux';
// this is the action we wrote and we're importing it here
// redux isnt magic and you can't just call it willy-nilly
// its in state and you need to access it from state
import { selectSong } from '../actions';

export class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => {
                this.props.selectSong(song);
              }}>
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

// this makes the state available in the component
const mapStateToProps = state => {
  return { songs: state.songs };
};

// this wording connects the component to redux
// with mstp and any actions we also wish to add
export default connect(mapStateToProps, { selectSong })(SongList);
