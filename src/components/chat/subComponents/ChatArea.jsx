import React, { useEffect, useRef } from 'react'
import ChatBubble from '../chatBubble/ChatBubble'

const ChatArea = ({ conversation }) => {
  const chatWindowRef = useRef(null)

  function capitalizeFirstLetter (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const isArray = item => Array.isArray(item)

  useEffect(() => {
    // Scroll to the bottom of the chat window
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight
  }, [conversation])
  return (
    <div
      className='h-full max-h-[90vh] overflow-auto scroll-smooth pr-8 -mr-8 scrollbar-thin scrollbar-thumb-info-content scrollbar-track-gray-100'
      ref={chatWindowRef}
    >
      {conversation.map((item, key) => (
        <ChatBubble
          msg={isArray(item?.msg) ? item.msg : capitalizeFirstLetter(item.msg)}
          key={key}
          ai={item.type === 'bot'}
          isArray={isArray}
          msgType={item.msgType}
        />
      ))}
    </div>
  )
}

export default ChatArea
