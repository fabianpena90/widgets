import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Convert(props) {
  const [translated, setTranslated] = useState('')
  // const [otherText, setOtherText] = useEffect(props.text)

  // useEffect(() => {
  //   const timerId = setTimeout(() =>{
  //     setOtherText(props.text)
  //   }, 500);

  //   return () => {
  //     clearTimeout(timerId)
  //   }
  // },[props.text])

  useEffect(() => {
    async function translate() {
      let res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: props.text,
          target: props?.language?.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
      setTranslated(res?.data.data?.translations[0]?.translatedText)
      // setTranslated(res.data.translations.translatedText)
    }

    translate()
  },[props.language, props.text])
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
}

export default Convert;