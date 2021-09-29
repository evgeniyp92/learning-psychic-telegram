import React, { Component } from 'react';

export class Field extends Component {
  render() {
    return (
      <div className='ui field'>
        <label>Name</label>
        <input type='text' className='' />
      </div>
    );
  }
}

export default Field;
