import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'


function Accordion({items}) {
  const [title, setTitle] = useState(null)

  function titleClick(index){
    // console.log('Title was clicked', index);
    setTitle(index)
  }

  const fullContent = items.map((item, index) =>{
  const active = index === title ? "active" : ""

    return (
      <React.Fragment key={item.title}>
        <div 
        onClick={() => titleClick(index)} 
        className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {fullContent}
    </div>
  );
}

export default Accordion;