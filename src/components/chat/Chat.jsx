import React from 'react'
import UserInput from './subComponents/UserInput'
import ChatArea from './subComponents/ChatArea'

const Chat = () => {
  return (
    <div className='h-screen flex flex-col justify-between mx-3 md:mx-8 py-4 gap-2'>
      <ChatArea />
      <UserInput />
    </div>
  )
}

export default Chat
