import React from 'react'
import sendIcon from '../../assets/send-icon.png'

const UserInput = ({ value, onBlur, onChange, onClick }) => {
  return (
    <div className='flex items-center gap-2'>
      <input
        type='text'
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder='say hi!'
        className='block w-full rounded-md border-0 py-1.5 px-4 antialiased text-stone-100 bg-slate-700 tracking-wider slate-gray-300 placeholder:text-stone-400 text-lg focus:ring-1 focus:ring-slate-700 sm:text-sm sm:leading-6'
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
