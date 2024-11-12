import React from 'react'

function Info({text}) {
  return (
    <div className='shadow-lg w-11/12 h-40 lg:h-80  rounded-lg mt-6 flex justify-center items-center bg-gradient-to-bl from-purple-500 to-cyan-500'>
        <div className='text-4xl lg:text-8xl font-bold text-yellow-500 uppercase'>{text}</div>
    </div>
  )
}

export default Info