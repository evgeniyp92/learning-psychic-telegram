import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

import UserCreate from './UserCreate';

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
