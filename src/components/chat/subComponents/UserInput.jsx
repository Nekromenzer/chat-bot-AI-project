import React from 'react'
import sendIcon from '../../../assets/send-icon.png'

const UserInput = ({ value, onBlur, onChange, onKeyDown, onClick }) => {
  return (
    <div className='flex items-center gap-2'>
      <input
        type='text'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder='say hi!'
        className='input input-bordered input-primary  block w-full rounded-md py-1.5 px-4 antialiased  tracking-wider slate-gray-300  text-lg focus:ring-1 sm:text-sm sm:leading-6'
      />
      <button
        className='rounded-md border-0 text-stone-90 text-sm py-2 px-3 font-bold'
        onClick={onClick}
      >
        <img src={sendIcon} alt='send icon' className='w-8' />
      </button>
    </div>
  )
}

export default UserInput
