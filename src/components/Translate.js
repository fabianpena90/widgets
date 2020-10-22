import React, { useEffect, useState } from 'react';
import ColorSelector from './ColorSelector'
import Convert from './Convert'


const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'French',
    value: 'fr'
  },
  {
    label: 'Italian',
    value: 'it'
  },
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Japanese',
    value: 'ja'
  },
  {
    label: 'German',
    value: 'de'
  },
  {
    label: 'Dutch',
    value: 'nl'
  },
];

function Translate(props) {
const [language, setLanguage] = useState(options[0])
const [text, setText] = useState('')

  return (
    <div>
      <ColorSelector 
        label="Select a Language"
        selected = {language}
        onSelectedChange={setLanguage}
        options={options} />
        <div className="ui form">
          <div className="fiel">
            <label>Enter Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
          </div>
        </div>
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert 
          language={language}
          text={text}
        />
    </div>
  );
}

export default Translate;