import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'


const Hero = () => {

  const curosel = [
    {
      url: 'https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },

    {
      url: 'https://images.unsplash.com/photo-1591019479261-1a103585c559?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },

    {
      url: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0
    const newSlide = isFirstSlide ? curosel.length -1 : currentSlide -1
    setCurrentSlide(newSlide)
  }

  const nextSlide = () => {
    const isLastSlide = currentSlide === curosel.length -1
    const newSlide = isLastSlide ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }
  return (
    <div className='max-w-[1400px] h-[850px]  m-auto py-5 px-4 relative'>
      <div style={{background: `url(${curosel[currentSlide].url})`}} className= 'w-full h-full rounded-2xl bg-center bg-cover duration-500' >
      </div>



      <div className='absolute top-[50%] -translate-x-0 translate-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer'>
        <BsChevronCompactLeft size={30} onClick={prevSlide}/>
      </div>

      <div className='absolute top-[50%] -translate-x-0 translate-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer'>
        <BsChevronCompactRight size={30} onClick={nextSlide}/>
      </div>
    </div>
  )
}

export default Hero
