import React from 'react'

import { AiFillGithub,AiOutlineTwitter,AiFillInstagram } from 'react-icons/ai';

import {MdOutlineComputer} from 'react-icons/md'

import {BsFillRocketTakeoffFill} from 'react-icons/bs'


function HomePage() {
  return (

    <div className='w-screen mx-auto px-24 '>
    <div className='flex flex-col bg-slate-600' >
     
     <div  className='grid md:grid-cols-1 lg:grid-cols-2 '>
      <div className='px-6 pb-4 '>
      <div className='relative cursor-pointer'>
      <img title='Tôi là gấu trúc' className='hover:scale-105 w-full object-cover' src="https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-gau-truc-1-780x527.jpg" alt="gau truc" />
      <div className='flex justify-between items-center p-2 absolute bottom-0 w-full bg-slate-300/75 '>
        <div className='text-lg text-black font-extrabold hover:text-purple-700'>Gấu trúc</div> tại <span className='bg-blue-500 p-3 rounded-lg hover:bg-red-500  hover:text-red-50'>Cần Thơ</span>
      </div>
      </div>
      </div>

      <div className='hidden lg:flex flex-col px-4 pb-4 pt-2'>
          <h1 className='text-3xl text-red-700'>Tran Minh Thanh (Brian)</h1>
          <p>Hi guys, I'm Thanh. I'm 27 years old. Now I'm living in Can Tho city. </p>
          <p>My hobbies are learning languages, coding website</p>
          <p>I'm looking for an opportunity to work in IT</p>
      </div>
  
     </div>
     
     <div className='w-full h-fit p-2  '>

     <div className='flex flex-col gap-2 '>
       <div className='flex justify-center items-center border-2 w-full h-fit px-2 cursor-pointer hover:bg-slate-400'>
   <AiFillGithub size={30} className='text-white' /><div className='text-white '>Github</div>
       </div>

       <div className='flex justify-center items-center border-2 w-full h-fit px-2 cursor-pointer hover:bg-slate-400'>
   <AiOutlineTwitter size={30} className='text-white ' /><div className='text-white'>Twitter</div>
       </div>

       <div className='flex justify-center items-center border-2 w-full h-fit px-2 cursor-pointer hover:bg-slate-400'>
   <AiFillInstagram size={30} className='text-white ' /><div className='text-white '>Instagram</div>
       </div>

      

       <div className='flex justify-center items-center border-2 w-full h-fit px-2 cursor-pointer hover:bg-slate-400'>
   <MdOutlineComputer size={30} className='text-white ' /><div className='text-white flex-wrap'>An interesting link-<span className='text-gray-200'>use thí for a notable project, a useful site or a link you want to share</span></div>
       </div>

       <div className='flex justify-center items-center border-2 w-full h-fit px-2 cursor-pointer hover:bg-slate-400'>
   <BsFillRocketTakeoffFill size={30} className='text-white ' /><div className='text-white flex-wrap'>Project-<span className='text-gray-200'>Professional Joyous Echo Tester</span></div>
       </div>

        {/* <div className=' inline-flex justify-center items-center border-2 w-full h-fit  text-justify gap-2'>
          <div className='place-items-baseline inline'>
    <MdOutlineComputer size={30} className='text-white' /><p className='text-white'>An interesting link- use thí for a notable project, a useful site or a link you want to share<span></span></p>
    </div>
        </div> */}


       {/* <div className='flex justify-center items-center border-2'>
   <BsFillRocketTakeoffFill className='text-white lg:text-[30px]' /><div className='text-white lg:text-[30px]'>AiFillInstagram</div>
       </div> */}
      
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default HomePage
