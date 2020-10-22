import React, { useState, useEffect, useRef } from 'react';
import 'semantic-ui-css/semantic.min.css'


function ColorSelector(props) {
  const [open, setOpen] = useState(false);
  const ref = useRef(); // to give reference of what element is 

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if(ref.current?.contains(e.target)){
        return;
      }
      setOpen(false)
    })
  },[])

  const colorOptions = props.options?.map(option =>{

    if(option.value === props.selected.value) {
      return null
    }

    return (
      <div onClick={() => props.onSelectedChange(option)} key={props.options.value} className="item">
        {option.label}
      </div>
    )
  })
  
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{props.label}</label>
        <div 
          onClick={() => setOpen(!open)} 
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{props?.selected?.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>
            {colorOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSelector;