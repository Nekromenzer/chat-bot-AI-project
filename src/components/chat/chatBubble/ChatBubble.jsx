import React from 'react'
import userAvatar from '../../../assets/avatar/user.png'
import botAvatarAnimate from '../../../assets/avatar/pixelbot-robot.gif'

const ChatBubble = ({
  ai,
  msg,
  isAvatar = true,
  isArray,
  msgType,
  customText,
  emotion
}) => {
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
            {msgType === 'table-simple' ? (
              <>
                {customText && (
                  <div className='text-end '>{customText && customText}</div>
                )}
                <div className='overflow-x-auto'>
                  <table className='table w-full table-zebra table-compact'>
                    <tbody>
                      {msg.map((item, idx) => (
                        <tr key={idx} className='hover cursor-pointer'>
                          <th className='text-neutral-content msg'>
                            {idx + 1}.
                          </th>
                          <th className='text-neutral-content font-light msg'>
                            {item}
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : msgType === 'stats' ? (
              <>
                {customText && (
                  <div className='my-2 text-end font-mono text-base subpixel-antialiased'>
                    {customText}
                  </div>
                )}
                <div className='stats stats-vertical lg:stats-horizontal shadow'>
                  {msg.map((item, idx) => (
                    <div key={idx} className='stat'>
                      <div className='stat-title font-mono text-neutral-content subpixel-antialiased'>
                        {item.key}
                      </div>
                      <div className='text-primary font-bold font-mono tracking-wide subpixel-antialiased'>
                        {item.value}
                      </div>
                      <div className='stat-figure text-primary'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          className='inline-block w-8 h-8 stroke-current'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          ></path>
                        </svg>
                      </div>
                      {/* <div className='stat-desc'>0{idx + 1}</div> */}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <ol>
                {msg.map((item, idx) => (
                  <li key={idx} className='font-mono'>
                    {idx + 1}. {item}
                  </li>
                ))}
              </ol>
            )}
          </>
        ) : (
          <div className='flex'>
            <div
              className={`${
                ai
                  ? 'font-mono tracking-wide font-normal subpixel-antialiased'
                  : 'font-normal tracking-wide subpixel-antialiased'
              }`}
            >
              {msg}
            </div>
            {emotion === 2 ? <div>😋</div> : ''}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatBubble
