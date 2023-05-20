import React, { useEffect } from 'react'
import robotHi from '../../assets/robot/robot.svg'
import {
  SadRobot,
  LoveRobot,
  AngryRobot,
  AnnoyedRobot,
  CalmRobot,
  SleepyRobot,
  SmileRobot,
  SurpriseRobot,
  VoiceRobot,
  NervoseRobot
} from '../../assets/emotions'

const isArray = item => Array.isArray(item)

const Emotion = ({ conversation, isBotSpeak }) => {
  const getBotRepliesOnly =
    conversation.length && conversation?.filter(obj => obj.type === 'bot')
  const lastMsgObjConversation = getBotRepliesOnly[getBotRepliesOnly.length - 1]
  const lastMsgEmotion = lastMsgObjConversation?.emotion || 0

  // speaking part
  const botLastMsg = isArray(lastMsgObjConversation?.msg)
    ? lastMsgObjConversation?.customText || ''
    : lastMsgObjConversation?.msg || lastMsgObjConversation?.customText

  const letBotSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(botLastMsg)
    // voice props
    utterance.pitch = 0.9
    utterance.lang = 'en-UK'
    utterance.voice = window.speechSynthesis.speak(utterance)
  }

  const getEmotionRobot = () => {
    if (lastMsgEmotion === 1) {
      return SmileRobot
    }
    if (lastMsgEmotion === 5) {
      return NervoseRobot
    }
    if (lastMsgEmotion === 6) {
      return SurpriseRobot
    }
    return robotHi
  }

  useEffect(() => {
    if (botLastMsg !== '' && isBotSpeak) {
      letBotSpeak()
    }
  }, [botLastMsg])

  return (
    <div className='h-screen flex justify-center items-center'>
      <img
        src={getEmotionRobot()}
        alt='robot'
        className='w-100 animate-pulse'
      />
    </div>
  )
}

export default Emotion
