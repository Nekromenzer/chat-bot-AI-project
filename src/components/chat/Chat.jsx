import React, { useState } from 'react'
import UserInput from './subComponents/UserInput'
import ChatArea from './subComponents/ChatArea'
import { communicateWithUser } from '../logic/bot'

const Chat = () => {
  const [inputValue, setInputValue] = useState('')

  const callBack = val => {
    console.log(val)
  }
  return (
    <div className='h-screen flex flex-col justify-between mx-3 md:mx-8 py-4 gap-2'>
      <ChatArea />
      <UserInput
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onClick={() => communicateWithUser(inputValue, callBack)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            communicateWithUser(inputValue, callBack)
          }
        }}
      />
    </div>
  )
}

export default Chat
