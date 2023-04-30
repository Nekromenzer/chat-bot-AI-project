import React from 'react'
import ChatBubble from '../chatBubble/ChatBubble'

const ChatArea = ({ conversation }) => {
  return (
    <div className='h-full max-h-[90vh] overflow-auto scroll-smooth pr-8 -mr-8 scrollbar-thin scrollbar-thumb-info-content scrollbar-track-gray-100'>
      {conversation.map((item, key) => (
        <ChatBubble msg={item.msg} key={key} ai={item.type === 'bot'} />
      ))}
    </div>
  )
}

export default ChatArea
