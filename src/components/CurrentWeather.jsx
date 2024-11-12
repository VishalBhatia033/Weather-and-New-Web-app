import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
function CurrentWeather({ currentData }) {
    const imgURL = `http://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
    const time = new Date();
    const temprature = Math.floor(Number(currentData.main.temp))
    return (
        <div className='w-11/12  md:mx-0 md:w-11/12 shadow-lg  bg-white rounded-md'>
            <div className='flex justify-between  px-5 py-3  border-b-2 border-b-[rgb(228,234,242)]'>
                <span className='text-slate-500 text-[0.8rem] font-semibold'>CURRENT WEATHER </span>
                <span className='font-bold text-sm'>{time.getHours()}:{(time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes())} {(time.getHours() > 12) ? "PM" : "AM"}</span>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 md:gap-8  px-4 md:px-6'>
                <div className='flex flex-row  justify-around py-4' >
                    <div className='h-2/5 w-16 flex flex-col items-center'>
                        <img className='h-full w-full' src={imgURL} alt="" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className='font-semibold text-7xl relative'>{temprature}°<span className='font-normal text-slate-400 text-4xl absolute bottom-0 right-1'>c</span></h2>
                        <h3 className=' bg-slate-200 rounded text-gray-500 px-2 text-sm font-semibold shadow-lg flex flex-row flex-wrap py-[4px]'><span>{currentData.weather[0].main}</span> <span className=' uppercase text-[5px] ml-1 text-black whitespace-nowrap'>{currentData.weather[0].description}</span></h3>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3 py-4 '>
                    <h2 className='bg-slate-200 rounded text-gray-500 px-2 text-sm font-semibold shadow-lg  mt-2 py-1'><FontAwesomeIcon icon={faLocation} className='text-blue-300' /> Your Location {currentData.name}</h2>
                    <p className='border-b border-b-[rgb(228,234,242)] text-sm lg:text-md flex justify-between py-2'><span>Humidity</span> <span className='font-semibold'>{currentData.main.humidity}%</span> </p>
                    <p className='border-b border-b-[rgb(228,234,242)] text-sm lg:text-md flex justify-between py-2'><span>Clouds</span>  <span className='font-semibold'>{currentData.clouds.all}%</span></p>
                    <p className='text-sm lg:text-md flex justify-between py-2'><span>Wind</span> <span className='font-semibold'>{currentData.wind.speed} Meter/Sec</span> </p>
                </div>
            </div>
        </div>

    )
}

export default CurrentWeather