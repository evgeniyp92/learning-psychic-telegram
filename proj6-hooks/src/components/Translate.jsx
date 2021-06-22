import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  { label: `Afrikaans`, value: `af` },
  { label: `Arabic`, value: `ar` },
  { label: `Hindi`, value: `hi` },
  { label: `German`, value: `de` },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState(``);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
          />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert input={text} language={language} />
    </div>
  );
};

export default Translate;
