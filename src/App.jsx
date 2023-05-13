import React, { useState, useEffect } from 'react'
import './App.css'
import Chat from './components/chat/Chat'
import Emotion from './components/emotion/Emotion'
import { educationHashMap } from './components/logic/sampleData'
import useDependentEffect from './components/hooks/useDependentEffect'

function App () {
  const [conversation, setConversation] = useState([])
  const [hashMapState, setHashMapState] = useState(educationHashMap)
  const storedHashMap = localStorage.getItem('hashArray')
  const storedConversation = localStorage.getItem('conversationHistory')

  // useEffect(() => {
  //   if (storedHashMap === null) {
  //     localStorage.setItem('hashArray', JSON.stringify(hashMapState))
  //   }
  // }, [hashMapState])

  // useEffect(() => {
  //   if (storedConversation === null) {
  //     localStorage.setItem('conversationHistory', JSON.stringify(conversation))
  //   } else if (storedConversation.length === 0) {
  //     console.log(storedConversation, 'storedConversation')
  //   }
  // }, [conversation])

  useDependentEffect(() => {
    if (conversation.length) {
      localStorage.setItem('conversationHistory', JSON.stringify(conversation))
    }
  }, [conversation])

  useEffect(() => {
    if (storedHashMap !== null) {
      setHashMapState(JSON.parse(storedHashMap))
    }
    if (storedConversation !== null) {
      console.log(JSON.parse(storedConversation,"sadadasd"))
      setConversation(JSON.parse(storedConversation))
    }
  }, [])

  return (
    <div className='bg-base-100 h-screen flex flex-col md:flex-row'>
      <div className='basis-full md:basis-1/4 md:block hidden'>
        <Emotion />
      </div>
      <div className='basis-full md:basis-2/4'>
        <Chat
          conversation={conversation}
          setConversation={setConversation}
          hashMapState={hashMapState}
          setHashMapState={setHashMapState}
        />
      </div>
    </div>
  )
}

export default App
