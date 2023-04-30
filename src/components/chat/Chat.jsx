import React, { useState } from 'react'
import UserInput from './subComponents/UserInput'
import ChatArea from './subComponents/ChatArea'
import { communicateWithUser } from '../logic/bot'

const Chat = () => {
  const [inputValue, setInputValue] = useState('')
  const [conversation, setConversation] = useState([])

  const makeConversation = (val, type) => {
    const newObj = { msg: val, type }
    setConversation(preArray => [...preArray, newObj])
  }

  const callBack = val => {
    // handle bot reply
    console.log(val)
    makeConversation(val, 'bot')
  }

  const clearInput = () => {
    setTimeout(() => {
      setInputValue('')
    }, 200)
  }

  const getBotReply = () => {
    makeConversation(inputValue, 'not-bot')
    communicateWithUser(inputValue, callBack)
    clearInput()
  }

  console.log(conversation)

  return (
    <div className='h-screen flex flex-col justify-between mx-3 md:mx-8 py-4 gap-2'>
      <ChatArea conversation={conversation} />
      <UserInput
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onClick={() => getBotReply()}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            getBotReply()
          }
        }}
      />
    </div>
  )
}

export default Chat
