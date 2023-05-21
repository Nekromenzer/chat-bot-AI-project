import React, { useState } from 'react'
import UserInput from './subComponents/UserInput'
import ChatArea from './subComponents/ChatArea'
import { communicateWithUser } from '../logic/bot'
import { instructionsArray } from '../logic/dataMaps'

const Chat = ({
  conversation,
  setConversation,
  hashMapState,
  setHashMapState,
  userName,
  setUserName,
  setIsBotSpeak
}) => {
  const [inputValue, setInputValue] = useState('')

  // set user,bot conversation array
  const makeConversation = (val, type) => {
    const newObj = {
      msg: val.data,
      emotion: val?.emotion,
      msgType: val?.msgType,
      customText: val?.customText,
      type
    }
    setConversation(preArray => [...preArray, newObj])
  }

  //get custom msg
  const getCustomBotReply = (msg, msgType, customText, emotion) => {
    const value = {
      data: msg,
      emotion: emotion || 0,
      msgType: msgType || null,
      customText: customText
    }
    return makeConversation(value, 'bot')
  }
  // callback from makeConversation func
  const callBack = val => {
    makeConversation(val, 'bot')
    // if reply has secondary msg
    if (val.msgType === 'duel-msg') {
      const secondMsgVal = {
        data: val.customText,
        emotion: val.emotion,
        msgType: 'italic'
      }
      setTimeout(() => {
        makeConversation(secondMsgVal, 'bot')
      }, 50)
    }
  }

  const clearInput = () => {
    setTimeout(() => {
      setInputValue('')
    }, 100)
  }

  const getBotReply = () => {
    if (inputValue !== '') {
      // user msg obj with no emotion
      const value = {
        data: inputValue,
        emotion: 0,
        msgType: null,
        customText: null
      }
      // custom commands
      if (inputValue.toLowerCase() === 'clear') {
        setInputValue('')
        setConversation([])
        localStorage.removeItem('conversationHistory')
      } else if (inputValue.toLowerCase() === 'talk') {
        setIsBotSpeak(true)
        setInputValue('')
        getCustomBotReply('Hey, Im talking again!', '', '', 4)
      } else if (inputValue.toLowerCase() === 'stop talking') {
        setIsBotSpeak(false)
        setInputValue('')
        getCustomBotReply('Im not talking Anymore!', '', '', 9)
      } else if (inputValue.toLowerCase() === 'help') {
        setInputValue('')
        const customText = 'Here is the command guide for Bot'
        getCustomBotReply(instructionsArray, 'steps', customText, 7)
      } else {
        makeConversation(value, 'not-bot')
        communicateWithUser(
          inputValue,
          callBack,
          hashMapState,
          conversation,
          setHashMapState,
          setConversation,
          userName,
          setUserName
        )
        clearInput()
      }
    }
  }

  return (
    <div className='h-screen flex flex-col justify-between mx-3 md:mx-8 py-4 gap-2'>
      <ChatArea conversation={conversation} />
      <UserInput
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onClick={() => getBotReply()}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            getBotReply()
          }
        }}
      />
    </div>
  )
}

export default Chat
