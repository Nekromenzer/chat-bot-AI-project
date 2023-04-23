import React from 'react'

const UserInput = ({ value, onBlur, onChange }) => {
  return (
    <div>
      <input
        type='text'
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className='block w-full rounded-md border-0 py-1.5 pl-7 px-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
    </div>
  )
}

export default UserInput
