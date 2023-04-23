import React from 'react'
import ChatBubble from '../chatBubble/ChatBubble'

const ChatArea = () => {
  return (
    <div className='h-full'>
      <ChatBubble msg='Hi,Hows going ?' />
      <ChatBubble
        msg={
          <>
            Hello there, <br />
            Wht u wanna know?
          </>
        }
        ai
      />
      <ChatBubble
        msg={
          <div>
            <ul>
              <li>number onw</li>
              <li>number onw</li>
              <li>number onw</li>
              <li>number onw</li>
            </ul>
          </div>
        }
        ai
      />
      <ChatBubble msg='Hi,Hows going ?' />
      <ChatBubble msg='Hi,Hows going ?' />
      <ChatBubble
        msg={<div>agsuydguaysg gduyaguydg duhaiuohui hauisd</div>}
        ai
      />
      <ChatBubble msg='Hi,Hows going ?' />
    </div>
  )
}

export default ChatArea
