import React from 'react';
import { connect } from 'react-redux';

// whatever you name the keys in mapStateToProps
// is what you have to pass into the function
// keep in mind that mapStateToProps returns
// a props object
const SongDetail = ({ song }) => {
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        {/* optional chaining ftw */}
        Title: {song?.title}
        <br />
        Duration: {song?.duration}
      </p>
    </div>
  );
};

// reference combineReducers to see whats in the state
// (in ../reducers/index.js)
const mapStateToProps = state => {
  // then import whatever you need in order to have
  // the component function correctly
  return { song: state.selectedSong };
};

// connect the state to the component so it can
// be accessed in the main function
export default connect(mapStateToProps)(SongDetail);
