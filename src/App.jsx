import React, { useState, useEffect } from 'react'
import './App.css'
import Chat from './components/chat/Chat'
import Emotion from './components/emotion/Emotion'
import { educationHashMap } from './components/logic/sampleData'
import useDependentEffect from './components/hooks/useDependentEffect'

function App () {
  const [conversation, setConversation] = useState([])
  const [hashMapState, setHashMapState] = useState(educationHashMap)
  const [userName, setUserName] = useState('')

  const storedConversation = localStorage.getItem('conversationHistory')
  const storedHashMap = localStorage.getItem('hashArray')
  const storedUserName = localStorage.getItem('userName')

  useDependentEffect(() => {
    if (conversation.length) {
      localStorage.setItem('conversationHistory', JSON.stringify(conversation))
    }
  }, [conversation])
  
  // updating
  useDependentEffect(() => {
      console.log("hashmap update",hashMapState)
      localStorage.setItem('hashArray', JSON.stringify(hashMapState))
  }, [hashMapState])

  console.log(hashMapState,'hashMapState')
  useEffect(() => {
    // hash map
    if (JSON.parse(storedHashMap) && JSON.parse(storedHashMap).length !== 0){
      setHashMapState(JSON.parse(storedHashMap))
    } else {
      localStorage.setItem('hashArray', JSON.stringify(hashMapState))
    }
    // conversation
    if (storedConversation !== null) {
      setConversation(JSON.parse(storedConversation))
    } else {
      localStorage.setItem('hashArray', JSON.stringify(conversation))
    }
    // userName
    if (storedUserName !== null || storedUserName !== '') {
      setUserName(storedUserName)
    }
  }, [])

  return (
    <div className='bg-base-100 h-screen flex flex-col md:flex-row'>
      <div className='basis-full md:basis-1/4 md:block hidden'>
        <Emotion conversation={conversation} />
      </div>
      <div className='basis-full md:basis-2/4'>
        <Chat
          conversation={conversation}
          setConversation={setConversation}
          hashMapState={hashMapState}
          setHashMapState={setHashMapState}
          userName={userName}
          setUserName={setUserName}
        />
      </div>
    </div>
  )
}

export default App
