import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

import UserCreate from './UserCreate';

/**
 * The flow of the Context system is generally as follows:
 * Application loads up in the browser
 * We create a context object with a default value
 * App component gets rendered, creates a provider that wraps UserCreate
 * Provider updates the value of the context object to this.state.language
 * Button and Field reach into the context object, see the value from this.state.language
 * Button and Field render appropriate text to the screen
 * Basically, this gets around prop drilling
 *
 * NOTE: Each separate use of the provider creates a new, separate pipe of information!
 * So if i were to spawn an additional LanguageContext Provider below it would be totally
 * segregated from the first
 *
 * If you dont supply a provider to components which rely on context they will always default
 * to the default value of the context
 */

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}></i>
          <i
            className='flag nl'
            onClick={() => this.onLanguageChange('dutch')}></i>
        </div>
        {/* Providing context and data to the UserCreate component, and the LanguageContext */}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
