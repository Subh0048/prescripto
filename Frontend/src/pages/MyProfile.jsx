import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setuserData] = useState({
    name: "Subham sahu",
    image: assets.profile_pic,
    email: "subhamdev@gmail.com",
    phone: "8879448068",
    address: {
      line1: "mulund ,mumbai",
      line2: "india"
    },
    gender: "male",
    dob: "27-12-2003"
  })

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm mt-2'>
      <img className="w-36 rounded" src={userData.image} alt="" />
      {
        isEdit ? <input className='bg-gray-50 text-2xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setuserData(prev => ({ ...prev, name: e.target.value }))} /> : <p className='font-medium text-2xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium '>Email id: </p>
          <p className='text-blue-500'>subhamdev@gmail.com</p>
          <p className='font-medium'>Phone:</p>
          <p className='text-blue-400'>8879448068</p>
          <p>Address:</p>
          <p>Mumbai</p>
        </div>

        <div >
          <p className='text-neutral-500 underline mt-2'>BASIC INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
            <p className='font-medium '>Gender:</p>
            <p >Male</p>
            <p className='font-medium '>Birthday:</p>
            <p>20 july 2003</p>
          </div>
        </div>

      </div>
      <div className='mt-8 '>
        {
          isEdit ? <button className='rounded-full px-10 py-2 border border-primary hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save Information </button> : <button className='rounded-full px-10 py-2 border border-primary hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
