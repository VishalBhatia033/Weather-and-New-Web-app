import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
function Header({data}) {
  const imgURL = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  return (
    <header className='px-5 lg:px-14 py-4 flex bg-gray-900 text-white  gap-4 items-center sticky top-0 z-10'>
      <div className=' flex justify-center items-center gap-2'>
        <FontAwesomeIcon className='text-3xl text-orange-500' icon={faSun} />
        <h2 className='font-bold text-3xl m-0'>Weather</h2>
      </div>
      <div className='flex gap-2 justify-center items-center font-light'>
        <span>{data.name}</span>
        <span>{data.main.temp}°</span>
        <img src={imgURL} alt="" />
      </div>
    </header>
  )
}

export default Header