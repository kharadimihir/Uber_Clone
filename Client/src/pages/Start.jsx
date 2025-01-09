import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://img.freepik.com/premium-vector/view-dealership-from-inside-inside-car-driving-seat-vector-illustration-flat-2_764382-93221.jpg)] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
            <img className='w-16 ml-8' src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg" alt="images" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-semibold'>Get started with Uber</h2>
                <Link to="/login" className='flex items-center justify-center bg-black text-white py-3 w-full rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start
