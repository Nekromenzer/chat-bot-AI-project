import React, { useEffect, useState } from 'react'
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
  const [speaking, setSpeaking] = useState(false)

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
    utterance.pitch = 1
    utterance.lang = 'en-UK'
    utterance.voice = window.speechSynthesis.speak(utterance)
    utterance.onend = function () {
      setSpeaking(false)
    }
    utterance.onstart = function () {
      setSpeaking(true)
    }
  }

  const getEmotionRobot = () => {
    // voice
    if (speaking) {
      return VoiceRobot
    } else {
      // hi
      if (lastMsgEmotion === 1) {
        return SmileRobot
      }
      // calm
      if (lastMsgEmotion === 2) {
        return CalmRobot
      }
      // Sleepy
      if (lastMsgEmotion === 3) {
        return SleepyRobot
      }
      // love
      if (lastMsgEmotion === 4) {
        return LoveRobot
      }
      // annoying
      if (lastMsgEmotion === 5) {
        return AnnoyedRobot
      }
      // Angry
      if (lastMsgEmotion === 6) {
        return AngryRobot
      }
      // nervous
      if (lastMsgEmotion === 7) {
        return NervoseRobot
      }
      // surprise
      if (lastMsgEmotion === 8) {
        return SurpriseRobot
      }
      // sad
      if (lastMsgEmotion === 9) {
        return SadRobot
      }
    }
    return SmileRobot
  }

  useEffect(() => {
    if (botLastMsg !== '' && isBotSpeak) {
      letBotSpeak()
    }
  }, [botLastMsg])

  return (
    <div className='h-screen flex justify-center items-center'>
      <img src={getEmotionRobot()} alt='robot' className='w-100' />
    </div>
  )
}

export default Emotion
