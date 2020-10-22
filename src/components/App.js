import React, { useState, useEffect }from 'react';
import Accordion from './Accordion'
import Search from './Search'
import ColorSelector from './ColorSelector'
import Translate from './Translate'
import Route from './Route'
import Header from './Header'

const items = [
  {
    title: "What is Full Stack Developer?",
    content: "A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application—meaning they can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects."
  },
  {
    title: "What is Frontend Developer?",
    content: "Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data"
  },
  {
    title: "What is Backend Developer?",
    content: "A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers"
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
]


function App() {
  const [selected, setSelected] = useState(options[0]);
  // const [showColorSelector, setShowColorSelector] = useState(true)
// function showAccordion(){
//   if(window.location.pathname === '/'){
//     return <Accordion items={items}/>
//   }
// }

// function showSearch(){
//   if(window.location.pathname === '/list'){
//     return <Search />
//   }
  
// }

// function showColorSelector(){
//   if(window.location.pathname === '/colorSelector'){
//     return <ColorSelector />
//   }
// }

// function showTranslate(){
//   if(window.location.pathname === '/translate'){
//     return <Translate />
//   }
// }


  return (
    <div className='ui container'>
    {/* <Search /> */}
     {/* <Accordion items={items} /> */}
     {/* <button onClick={() => setShowColorSelector(!showColorSelector)}>Toggle Dropdown</button>
     {showColorSelector ? */}
     {/* <ColorSelector 
      selected={selected} 
      options={options}
      onSelectedChange={setSelected}
      />  */}
      {/* : null
     }  */}
     <Header />
     <Route path="/">
        <Accordion items={items} />
      </Route>
     <Route path="/list">
        <Search  />
      </Route>
     <Route path="/colorSelector">
        <ColorSelector 
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
         />
      </Route>
     <Route path="/translate">
        <Translate  />
      </Route>
    </div>
  );
}

export default App;
