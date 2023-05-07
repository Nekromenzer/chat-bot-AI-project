import React from 'react'
import userAvatar from '../../../assets/avatar/user.png'
import userAvatarAnimate from '../../../assets/avatar/userAnimate.gif'
import botAvatarAnimate from '../../../assets/avatar/pixelbot-robot.gif'
import botAvatar from '../../../assets/avatar/robot.png'

const ChatBubble = ({ ai, msg, isAvatar = true, isArray, msgType }) => {
  return (
    <div className={`chat ${ai ? 'chat-end' : 'chat-start'}`}>
      {isAvatar && (
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full'>
            <img src={!ai ? userAvatar : botAvatarAnimate} />
          </div>
        </div>
      )}
      <div
        className={`chat-bubble text-sm ${
          ai ? 'chat-bubble-accent' : 'chat-bubble-secondary'
        }`}
      >
        {isArray(msg) ? (
          <>
            {msgType === 'table' ? (
              <div className='overflow-x-auto'>
                <table className='table w-full table-zebra table-compact'>
                  <tbody>
                    {msg.map((item, idx) => (
                      <tr key={idx} className='hover cursor-pointer'>
                        <th className='text-neutral-content'>{idx + 1}.</th>
                        <th className='text-neutral-content font-light'>
                          {item}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <ol>
                {msg.map((item, idx) => (
                  <li key={idx}>
                    {idx + 1}. {item}
                  </li>
                ))}
              </ol>
            )}
          </>
        ) : (
          msg
        )}
      </div>
    </div>
  )
}

export default ChatBubble
