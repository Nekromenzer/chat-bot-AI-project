import React from 'react'

const ChatBubble = ({ ai, msg, isAvatar = true }) => {
  return (
    <div className={`chat ${ai ? 'chat-end' : 'chat-start'}`}>
      {isAvatar && (
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img
              src={
                !ai
                  ? 'https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg'
                  : 'https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg'
              }
            />
          </div>
        </div>
      )}
      <div
        className={`chat-bubble ${
          ai ? 'chat-bubble-secondary' : 'chat-bubble-primary'
        }`}
      >
        {msg}
      </div>
    </div>
  )
}

export default ChatBubble
