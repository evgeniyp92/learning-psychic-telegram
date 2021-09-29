import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Button extends Component {
  // This is how you wire up context
  // contextType is a very special name in React
  static contextType = LanguageContext;
  // once context is set up it can be accessed from this.context

  render() {
    console.log(this.context);
    return <button className='ui primary button'>Submit</button>;
  }
}

// Alternatively, you can set up context by writing the below:
// Button.contextType = LanguageContext

export default Button;
