import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center items-center py-5 text-2xl text-gray-500'>
        <p >CONTACT <span className='text-gray-700 font-semibold'>US</span> </p>
      </div>
      <div className='flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img  className= 'w-full md:max-w-[360px]' src={assets.contact_image} alt="conactimage" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600 '>OUR OFFICE</p>
          <p className='text-gray-500'>54704 willms station <br /> Suite 350 , Mumbai,INDIA</p>
          <p className='text-gray-500'>Tel:+91 8898765432 <br /> Email:subhamdev@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600 '>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job opening</p>
          <button className='border border-black py-4 px-7 text-sm'>Explore jobs</button>

        </div>
      </div>
      
    </div>
  )
}

export default Contact
