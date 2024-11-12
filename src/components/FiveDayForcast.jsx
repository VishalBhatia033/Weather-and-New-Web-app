import React from 'react'

function FiveDayForcast({ list }) {
    return (
        <div className='w-11/12  md:mx-0 md:w-11/12  flex flex-row flex-wrap gap-[2%] justify-around'>
            {
                list.map((listElem) => {
                    let d = new Date(listElem.dt_txt);
                    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    let date = d.toLocaleDateString("en-US", options);
                    const imgURL = `http://openweathermap.org/img/w/${listElem.weather[0].icon}.png`;
                    return (
                        <div className='flex flex-col w-[48%] bg-white py-2 px-4 rounded-md mt-4 shadow-lg' key={listElem.dt}>
                            <h3 className='flex justify-between'>
                                <span className='text-[9px]'>
                                    {date}
                                </span>
                                <span className='text-[9px]'>
                                    {(d.getHours()==0)?"12":d.getHours()}:{(d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes())} {(d.getHours() > 12) ? "PM" : "AM"}
                                </span>
                            </h3>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3 items-center'>
                                <div className='h-8 w-8' >
                                    <img src={imgURL} alt="" />
                                </div>
                                <span className='relative text-[8px] lg:text-[15px]'>{Math.floor(Number(listElem.main.temp))}°<span className='font-normal text-slate-400 text-[10px] absolute bottom-0 right-[0px]'>c</span></span>
                                </div>

                                <span className='uppercase text-[8px] lg:text-[12px] font-semibold text-gray-600'>{listElem.weather[0].description}</span>
                            </div>
                            <div className='flex flex-col'>
                                <p className='flex justify-between text-[10px]'><span>Clouds</span> <span>{listElem.clouds.all}%</span> </p>
                                <p className='flex justify-between text-[10px]'><span>Probability</span> <span>{Math.floor(listElem.pop * 100)}%</span> </p>
                                <p className='flex justify-between text-[10px]'><span>Wind Speed</span> <span>{listElem.wind.speed} M/S</span> </p>
                            </div>
                        </div>
                    )
                }

                )
            }
        </div>
    )
}

export default FiveDayForcast