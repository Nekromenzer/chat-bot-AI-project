import React from 'react'
import userAvatar from '../../../assets/avatar/user.png'
import botAvatarAnimate from '../../../assets/avatar/pixelbot-robot.gif'

const ChatBubble = ({
  ai,
  msg,
  isAvatar = true,
  isArray,
  msgType,
  customText
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
        {customText && msgType !== 'duel-msg' && (
          <div
            className='my-2 text-start font-mono text-base subpixel-antialiased'
            dangerouslySetInnerHTML={{ __html: customText }}
          />
        )}
        {isArray(msg) ? (
          <>
            {msgType === 'table-simple' ? (
              <div className='overflow-x-auto'>
                <table className='table w-full table-zebra table-compact subpixel-antialiased'>
                  <tbody>
                    {msg.map((item, idx) => (
                      <tr key={idx} className='hover cursor-pointer'>
                        <th className='text-neutral-content msg font-mono subpixel-antialiased'>
                          {idx + 1}.
                        </th>
                        <th
                          className='font-light msg font-mono subpixel-antialiased text-slate-200'
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : msgType === 'stats' ? (
              <div className='stats stats-vertical shadow'>
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
            ) : msgType === 'unordered' ? (
              <ul className='bg-base-300 p-2 rounded-md'>
                {msg.map((item, idx) => (
                  <li
                    key={idx}
                    className='font-mono subpixel-antialiased text-slate-200'
                  >
                    👉 {item}
                  </li>
                ))}
              </ul>
            ) : (
              msgType === 'steps' && (
                <ul className='steps steps-vertical'>
                  {msg.map((item, idx) => (
                    <li
                      key={idx}
                      className='font-mono subpixel-antialiased step min-h-2'
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              )
            )}
          </>
        ) : (
          <div className='flex'>
            <div
              className={`${
                ai
                  ? `font-mono tracking-wide font-normal subpixel-antialiased ${
                      msgType === 'italic' && 'italic'
                    }`
                  : 'font-normal tracking-wide subpixel-antialiased'
              }`}
              dangerouslySetInnerHTML={{ __html: msg }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatBubble
