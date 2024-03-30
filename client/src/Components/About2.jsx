import React from 'react';
import { AiOutlineDollar } from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";
import { RiRestartLine } from "react-icons/ri";

const About2 = () => {
  return (
    <div className='w-full items-center flex flex-col py-10 px-12 text-center'>
      <h1 className='text-[36px] font-bold text-[#1A1A1A] mb-4'>WHY CHOOSE US?</h1>
      <div className='flex mx-6 my-9'>
        <div className='flex flex-col items-center text-center mx-3 px-2'>
            <div className='bg-[#EBF9FF] w-[50px] h-[50px] flex items-center justify-center rounded-lg mb-4'><AiOutlineDollar color='#008EC4' fontSize='22px'/></div>
            <span className='text-[20px] text-[#1A1A1A] font-bold'>Exceptional Service</span>
            <p className='text-[15px] text-[#191919] font-normal'>Providing dedicated support and assistance around the clock to ensure a seamless travel experience.</p>
        </div>
        <div className='flex flex-col items-center text-center mx-3 px-2'>
            <div className='bg-[#EBF9FF] w-[50px] h-[50px] flex items-center justify-center rounded-lg mb-4'><RiShieldUserLine color='#008EC4' fontSize='22px'/></div>
            <span className='text-[20px] text-[#1A1A1A] font-bold'>Secure Booking</span>
            <p>Streamlined and user-friendly booking platform, making it hassle-free to plan and reserve your perfect getaway.</p>
        </div>
        <div className='flex flex-col items-center text-center mx-3 px-2'>
            <div className='bg-[#EBF9FF] w-[50px] h-[50px] flex items-center justify-center rounded-lg mb-4'><RiRestartLine color='#008EC4' fontSize='22px'/></div>
            <span className='text-[20px] text-[#1A1A1A] font-bold'>Seamless Experience</span>
            <p>From booking to checkout, we handle every detail, leaving you free to savor every moment of your vacation.</p>
        </div>
      </div>
    </div>
  )
}

export default About2
