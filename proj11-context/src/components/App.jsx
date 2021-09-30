import { Component } from 'react';

import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

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
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
