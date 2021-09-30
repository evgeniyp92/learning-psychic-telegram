import { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {
  // This is how you wire up context
  // contextType is a very special name in React
  // static contextType = LanguageContext;
  // once context is set up it can be accessed from this.context
  // when using a consumer you do not need to set up contextType
  // using this.context is not great because you cannot access multiple context objects

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* 'Consuming' data from the language context */}
        <LanguageContext.Consumer>
          {value => (value === 'english' ? 'Submit' : 'Voorleggen')}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

// Alternatively, you can set up context by writing the below:
// Button.contextType = LanguageContext

export default Button;
