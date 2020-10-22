import React, { useState } from 'react';
import ColorSelector from './ColorSelector'

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
  }
];

function Translate(props) {
const [languague, setLanguage] = useState(options[0])
const [text, setText] = useState('')

  return (
    <div>
      <ColorSelector 
        label="Select a Language"
        selected = {languague}
        onSelectedChange={setLanguage}
        options={options} />
        <div className="ui form">
          <div className="fiel">
            <label>Enter Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
          </div>
        </div>
    </div>
  );
}

export default Translate;