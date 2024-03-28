import React from 'react';
import "../styles/HeroSectionAboutUs.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

const HeroSectionAboutUs = () => {
  return (
    <div className='about-hero-container'>
        <div className='heading-cont'>
            <h1 className="text-4 md:text-5xl lg:text-5xl font-semibold text-center text-white mt-[60px] mx-32 md:mt-16 lg:mt-8">Upto 25% off on first Vacation booking
 through LifeVista Vacation!</h1>
 <div className='flex w-full justify-center my-4'>
 <p className='flex items-center mx-3'><FaDollarSign color='#01B7F2' style={{fontSize:'18px'}}/><span className='ml-1 text-[16px] leading-[30px] text-white'>Best Price Guaranteed</span></p>
 <p className='flex items-center mx-3'><FaLaptop color='#01B7F2' style={{fontSize:'18px'}}/><span className='ml-1 text-[16px] leading-[30px] text-white'>Easy Bookings</span></p>
 <p className='flex items-center mx-3'><FaHeadphonesAlt color='#01B7F2' style={{fontSize:'18px'}}/><span className='ml-1 text-[16px] leading-[30px] text-white'>24/7 Customer Care</span></p>
 </div>

        </div>
    </div>
  )
}

export default HeroSectionAboutUs
