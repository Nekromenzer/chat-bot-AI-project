import React from 'react'
import robotHi from '../../assets/robot/robot.svg'

const Emotion = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <img src={robotHi} alt='robot' className='w-100 animate-pulse' />
    </div>
  )
}

export default Emotion
