import React, { useState } from 'react'
import UserInput from './subComponents/UserInput'
import ChatArea from './subComponents/ChatArea'
import { communicateWithUser } from '../logic/bot'

const Chat = ({ conversation, setConversation }) => {
  const [inputValue, setInputValue] = useState('')

  // set user,bot conversation array
  const makeConversation = (val, type) => {
    const newObj = { msg: val, type }
    setConversation(preArray => [...preArray, newObj])
  }

  // callback from makeConversation func
  const callBack = val => {
    console.log(val, '⭐⭐⭐')
    if (Array.isArray(val)) {
      val.map((item, idx) => makeConversation(`${idx + 1}.${item}`, 'bot'))
      console.log(val, 'course')
    } else {
      makeConversation(val, 'bot')
    }
  }

  const clearInput = () => {
    setTimeout(() => {
      setInputValue('')
    }, 100)
  }

  const getBotReply = () => {
    if (inputValue !== '') {
      makeConversation(inputValue, 'not-bot')
      communicateWithUser(inputValue, callBack)
      clearInput()
    }
  }

  console.log(conversation, 'conversation')
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
