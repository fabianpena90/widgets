import React, {useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'


function Search(props) {
  const [terms, setTerms] = useState('nba')
  const [results, setResults] = useState([])

  useEffect(() => {
    async function getData() {
      let res = await axios.get('https://en.wikipedia.org/w/api.php', {
        params : {
          action: "query",
          list: "search",
          srsearch: terms,
          format: "json",
          origin: "*"
        }
      })
      setResults(res.data.query.search)
    }

    if(terms && !results.length){
      getData()
    } else {
      const timeoutID = setTimeout(() => {
      if (terms){
          getData()
        }
      }, 500)
  
      return () => {
        clearTimeout(timeoutID)
      }

    }
  }, [terms]);

  const finalResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
      <div className="right floated content">
        <a 
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          className="ui button">Go</a>
      </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input 
            onChange={(e) => setTerms(e.target.value)}
            value={terms}
            className="input" 
            type="text"/>
        </div>
      </div>
      <div className="ui celled list">
        {finalResults}
      </div>
    </div>
  );
}

export default Search;