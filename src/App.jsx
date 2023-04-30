import React, { useState } from 'react'
import './App.css'
import Chat from './components/chat/Chat'
import Emotion from './components/emotion/Emotion'

function App () {
  const [conversation, setConversation] = useState([])
  return (
    <div className='bg-base-100 h-screen flex flex-col md:flex-row'>
      <div className='basis-full md:basis-1/4 md:block hidden'>
        <Emotion />
      </div>
      <div className='basis-full md:basis-2/4'>
        <Chat conversation={conversation} setConversation={setConversation} />
      </div>
    </div>
  )
}

export default App
