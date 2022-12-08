import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function DiaryFrom({uid}) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const {addDocument, response} = useFirestore('myDiary')
  const handleData = (event)=>{
    if(event.target.id ==='tit'){
      setTitle(event.target.value)
    }else if(event.target.id ==='txt'){
      setText(event.target.value)
    }
  }
  useEffect(() => {
    setTitle('')
    setText('')
  }, [response.success])
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(title,text)
    addDocument({
      uid, title, text
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>일기 쓰기</legend>
          <label htmlFor="tit">일기 제목 : </label>
          <input type="text" id='tit' required onChange={handleData} value={title} />

          <label htmlFor="txt">일기 내용 : </label>
          <input type="text" id='txt' required onChange={handleData} value={text} />
          <button type='submit'>저장하기</button>
        </fieldset>
      </form>

    </>
  )
}
