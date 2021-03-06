/* eslint-disable react/prop-types */
import { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className='flag us'
          onClick={() => this.context.onLanguageChange('english')}></i>
        <i
          className='flag nl'
          onClick={() => this.context.onLanguageChange('dutch')}></i>
      </div>
    );
  }
}

export default LanguageSelector;
