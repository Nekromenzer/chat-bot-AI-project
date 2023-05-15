import React from 'react'
// import robotHi from '../../assets/robot/robot.svg'
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

const Emotion = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <img src={SadRobot} alt='robot' className='w-100 animate-pulse' />
    </div>
  )
}

export default Emotion
