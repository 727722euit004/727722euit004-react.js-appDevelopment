import React from 'react'
import foodnapkin from '../assets/foodnapkin.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const About = () => {
  return (
    <div>
      <div className='w-11/12 max-w-[540rem]'>
        <img src={foodnapkin} alt='about-page' width={558} height={400} loading='lazy' className='ml-[-1rem]'></img>
      </div>

      <div className='float-right mt-[-20rem] mr-300'>
        <p className='text-5xl font-bold ml-[-45rem]'>We are the best quality <br></br>restaurant</p>
      </div>

      <div className='float-right w-11/12 max-w-[450px]'>
        <p className='mt-[-12rem] mr-[5rem] ml-[-17rem] text-base'>Restaurant in Bangalore sourcing our ingredient locally,
         to celebrate lifes special
        moments by offering the best quality food, service and ambience in every home</p>
        <p className='mt-[1rem] mr-[1rem] ml-[-17rem] text-base'>If you want any food please login or sign up on our mobile app or website.</p>
      </div>

      <div>
      <button className='flex flex-box py-[8px] px-[23px] rounded-[30px] border  
        mt-[-3.5rem] ml-[46rem] bg-yellow-400 shadow-sm hover:shadow-yellow-300'>
            Our Menu
            <AiOutlineArrowRight className='flex flex-box ml-3 mt-1' />
          </button>
      </div>
    </div>
  )
}

export default About