import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const[userData,setuserData]=useState({
    name:"Subham sahu",
    image:assets.profile_pic,
    email:"subhamdev@gmail.com",
    phone:"8879448068",
    address:{
      line1:"mulund ,mumbai",
      line2:"india"
    },
    gender:"male",
    dob:"27-12-2003"
  })

  const[isEdit,setIsEdit]=useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit ? <input type="text" value={userData.name}  onChange={e=>setuserData(prev=>({...prev,name:e.target.value}))} /> : <p>{userData.name}</p>
      }
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
        <p>Email id: subhamdev@gmail.com</p>
        <p>Phone:8879448068</p>
        <p>Address:Mumbai</p>
        <p>BASIC INFORMATION</p>
        <p>Gender:Male</p>
       <p>Birthday:20 july 2003</p>

        </div>
      </div>
    </div>






    
    // <div className='flex flex-col gap-4' >
    //   <div className="py-4 ">
    //     <img className='max-w-[100px]' src={assets.profile_pic} alt="" loading='lazy' />
    //   </div>
    //   <div>
    //     <p className='border-b border-b-gray-300 text-gray-900 text-2xl py-2'>Edward Vincent</p>
    //     <p>CONTACT INFORMATION</p>
    //     <p>Email id: subhamdev@gmail.com</p>
    //     <p>Phone:8879448068</p>
    //     <p>Address:Mumbai</p>
    //     <p>BASIC INFORMATION</p>
    //     <p>Gender:Male</p>
    //     <p>Birthday:20 july 2003</p>
    //   </div>
    //   <div>
    //     <button>Edit</button>
    //     <button>save information</button>
    //   </div>


    // </div>
  )
}

export default MyProfile
