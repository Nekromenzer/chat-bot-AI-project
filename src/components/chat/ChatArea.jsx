import React from 'react'

const ChatArea = () => {
  return (
    <div className='h-full'>
      <div className='chat chat-start'>
        <div class='chat-image avatar'>
          <div class='w-10 rounded-full'>
            <img src='https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg' />
          </div>
        </div>
        <div className='chat-bubble chat-bubble-info'>
          It's over Anakin, <br />I have the high ground.
        </div>
      </div>
      <div className='chat chat-end'>
        <div class='chat-image avatar'>
          <div class='w-10 rounded-full'>
            <img src='https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg' />
          </div>
        </div>
        <div className='chat-bubble  chat-bubble-primary'>
          You underestimate my power!
        </div>
      </div>
      <div className='chat chat-end'>
        <div class='chat-image avatar'>
          <div class='w-10 rounded-full'>
            <img src='https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg' />
          </div>
        </div>
        <div className='chat-bubble  chat-bubble-primary'>
          You underestimate my power!
        </div>
      </div>
    </div>
  )
}

export default ChatArea
