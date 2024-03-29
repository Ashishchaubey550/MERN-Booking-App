import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import "../styles/Subscribe.scss";

const About4 = () => {
  return (
    <div className='h-[630px] px-16 py-8'>
      <div className='h-[480px] '>
        <div className='flex justify-between relative items-center w-full h-[370px] px-6 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-[0.6] after:bg-black' style={{backgroundImage: "url('img/outdoor-swimming-pool 1.jpg')"}}>
            <img src="img/lifeVistaLogo.png" alt="" className='w-80 h-20 mx-16 z-[1]'/>
            <h2 className='text-white font-[600] text-[50px] mx-8 px-16 z-[1]'>No Service Fees on Vacation Rental!</h2>
        </div>
        <div className='bg-[#4AA5D2] p-8 text-center'>
            <h2 className='text-[30px] font-[800] text-white'>BOOK DIRECT AT LIFEVISTA VACATION.COM</h2>
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <div className='my-8 mx-12 w-28 h-16 flex flex-col items-center justify-center rounded-lg shadow-xl'><IoLocationSharp color='#4AA5D2' fontSize='24px'/><span className='text-[#4AA5D2]'>Florida</span></div>
        <div className='my-8 mx-12 w-28 h-16 flex flex-col items-center justify-center rounded-lg shadow-xl'><IoLocationSharp color='#4AA5D2' fontSize='24px'/><span className='text-[#4AA5D2]'>Navarre</span></div>
        <div className='my-8 mx-12 w-28 h-16 flex flex-col items-center justify-center rounded-lg shadow-xl'><IoLocationSharp color='#4AA5D2' fontSize='24px'/><span className='text-[#4AA5D2]'>Destin</span></div>
        <div className='my-8 mx-12 w-28 h-16 flex flex-col items-center justify-center rounded-lg shadow-xl'><IoLocationSharp color='#4AA5D2' fontSize='24px'/><span className='text-[#4AA5D2]'>Panama Beach</span></div>
      </div>
    </div>
  )
}

export default About4
