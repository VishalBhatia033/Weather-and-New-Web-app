import React from 'react'
import lodingLogo from '../assets/loder.gif'
function Loder() {
    return (
        <div className='w-screen h-screen  flex justify-center items-center'>
            <div className='max-w-md flex justify-center items-center'>
                <img className='h-1/3 w-1/3' src={lodingLogo} alt="" />
            </div>
        </div>
    )
}

export default Loder