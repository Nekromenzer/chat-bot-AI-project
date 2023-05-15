import React from 'react'
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

const Emotion = ({ conversation }) => {
  const getBotRepliesOnly =
    conversation.length && conversation?.filter(obj => obj.type === 'bot')
  const lastMsgObjConversation = getBotRepliesOnly[getBotRepliesOnly.length - 1]
  const lastMsgEmotion = lastMsgObjConversation?.emotion || 0

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
