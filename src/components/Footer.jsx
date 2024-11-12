import React from 'react'

function Footer({data}) {
  return (
    <footer className='px-6 lg:px-16 py-6 flex bg-gray-900 text-white  gap-8 items-center sticky top-0 z-10 ' >
      <div className='font-semibold'>Weather near <span className='bg-gray-600 p-2 rounded-lg'>{data.name}</span></div>
      <hr className='none lg:w-9/12 border border-gray-500' />
    </footer>
  )
}

export default Footer