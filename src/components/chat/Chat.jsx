import React from 'react'
import UserInput from './UserInput'
import ChatArea from './ChatArea'

const Chat = () => {
  return (
    <div className='h-screen flex flex-col justify-between mx-8 py-4'>
      <ChatArea />
      <UserInput />
    </div>
  )
}

export default Chat
