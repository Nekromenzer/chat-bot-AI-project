import React from 'react'

const ChatBubble = ({ ai, msg, isAvatar = true, isArray }) => {
  console.log(msg, 'bot')
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
        className={`chat-bubble text-sm ${
          ai ? 'chat-bubble-accent' : 'chat-bubble-secondary'
        }`}
      >
        {isArray(msg) ? (
          <ol>
            {msg.map((item, idx) => (
              <li key={idx}>
                {idx + 1}. {item}
              </li>
            ))}
          </ol>
        ) : (
          msg
        )}
      </div>
    </div>
  )
}

export default ChatBubble
