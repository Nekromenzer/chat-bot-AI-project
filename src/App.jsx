import React, { useState } from 'react'
import './App.css'
import Chat from './components/chat/Chat'
import Emotion from './components/emotion/Emotion'
import { educationHashMap } from './components/logic/sampleData'

function App () {
  const [conversation, setConversation] = useState([])
  const [hashMapState, setHashMapState] = useState(educationHashMap)

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
