import React from 'react'

const page = () => {
  return (
    <div className='flex gap-10 items-center justify-evenly bg-linear-to-r from-[#74a4d1] to-[#1d3350] h-lvh'>
      <div className='text-7xl' >About Me</div>
      <p className='w-100 text-4xl'>Hello, This is an example of an ecommerce website I have created.</p>
      <div className='absolute h-96 w-96 bg-amber-200'>
        <p className='top-10'>Hello World</p>
        <p>By World</p>
      </div>
    </div>
    
  )
}

export default page