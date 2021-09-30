/* eslint-disable react/prop-types */
import React from 'react';

// very important to use a capital C here
const Context = React.createContext('english');

// Exporting the LanguageStore context item
export class LanguageStore extends React.Component {
  // setting up state
  state = { language: 'english' };

  // writing the business logic
  onLanguageChange = language => {
    this.setState({ language });
  };

  // providing a wrapper
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// setting up a default export of Context
export default Context;
