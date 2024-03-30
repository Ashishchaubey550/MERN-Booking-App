import React from 'react';
import "../styles/HeroSectionNewListing.scss";
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import {Input} from '@mui/material';
import { LuHotel } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineUserAdd } from "react-icons/hi";
// import React from 'react';
import { DatePicker, InputNumber } from 'antd';
const { RangePicker } = DatePicker;

const HeroSectionNewListing = () => {
  return (
    <div className='newList-container'>
      <div className='heading-cont'>
            <h1 className="mb-4 leading-16 text-4 md:text-5xl lg:text-5xl font-semibold text-center text-white mt-[60px] mx-9 md:mt-16 lg:mt-8">Your Dream Vacation Awaits</h1>
            <span className="text-3 md:text-lg lg:text-3xl font-semibold mx-[260px] text-center text-white mt-16 md:mt-6 lg:mt-16">Your Dream Vacation Awaits</span>
      </div>
      {/* <div className="btn-grp">
        <div className="inp-grp">
            
        </div>
        <div className='inp-grp w-64 border-[#4aa5d2] border-2'><LuHotel color='#4aa5d2' fontSize='25px'/><TextField id="standard-basic" label="Where Are You Going To?" variant="standard"/></div>
        <div className='inp-grp w-64 border-[#4aa5d2] border-2'><IoCalendarOutline color='#4aa5d2' fontSize='40px'/><TextField label='Check-in Date' variant='standard'/><TextField label='Check-out Date' variant='standard'/></div>
        <div className='inp-grp w-64 border-[#4aa5d2] border-2'><HiOutlineUserAdd color='#4aa5d2' fontSize='60px'/><TextField label='Adults' variant='standard'/><TextField label='Childrens' variant='standard'/><TextField label='Room' variant='standard'/></div>
        <Button variant='contained'>Search</Button>
      </div> */}
      <div className="btn-grp">
        <div className="inp-grp">
          <div className='inp w-[20rem] flex  border-[#4aa5d2] border-2 h-16 gap-2 '><LuHotel color='#4aa5d2' fontSize='25px' className='mr-3 mt-5 ml-4'/><TextField type="text" variant='standard' label='Where Are You Going To?' className='w-48'/></div>
          {/* <div className='inp w-72 flex items-center border-[#4aa5d2] border-2 h-16 gap-2'><IoCalendarOutline color='#4aa5d2' fontSize='30px'/><input type='date' placeholder='Check-in Date' className='w-28'/><input type='date' placeholder='Check-out Date' className='w-28'/></div> */}
          <div className='inp w-[20rem] flex items-center border-[#4aa5d2] border-2 h-16 gap-2 pl-2'><IoCalendarOutline color='#4aa5d2' fontSize='28px'/><RangePicker placeholder={["Check-In Date", "Check-Out Date"]} className='h-[3.8rem] border-l-0 border-r-0 shadow-none rounded-none'/></div>

          {/* <div className='inp w-72 flex items-center border-[#4aa5d2] border-2 h-16 gap-2'><HiOutlineUserAdd color='#4aa5d2' fontSize='30px'/><label>Adults</label><input className='w-8' type='number'/><label>Children</label><input className='w-8' type='number'/></div>
           */}
          <div className='inp w-[20rem] flex items-center justify-around border-[#4aa5d2] border-2 h-16 gap-2 px-2'><HiOutlineUserAdd color='#4aa5d2' fontSize='26px'/><InputNumber addonBefore='Adults' className='w-[114px] border-none'/><InputNumber addonBefore='Children' className='w-[126px] border-none'/></div>

        </div>
        <Button variant='contained' sx={{borderRadius:'none'}}>Search Now</Button>
      </div>
    </div>
  )
}

export default HeroSectionNewListing
