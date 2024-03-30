import React from 'react';
import { Rate } from 'antd';

const ReviewCard = ({ name, star, desc, review, date, helpful, imgUrl }) => {
  return (
    <div className='flex justify-between items-center my-8 border-b-2 pb-8'>
      <div className='flex items-center gap-4'>
        <img src={imgUrl} className="w-[56px] h-[56px] rounded-full"/>
        <div>
            <Rate disabled value={star}/>
            <p className='text-[13px] text-[#1C2B38] font-700'>{name}</p>
            <span className='text-[13px] text-[#778088] font-600'>{date}</span>
        </div>
      </div>
      <div className='w-[900px] flex justify-between gap-3'>
        <div className='mx-8'>
            <p className='text-[13px] text-[#1C2B38] font-700'>{review}</p>
            <span className='text-[#495560] text-[12px]'>{desc}</span>
        </div>
        <div>
            <span className='text-[13px] text-[#778088] font-600 flex'>Helpful? <span className='text-[13px] text-[#4AA5D2] capitalize font-600 flex ml-2'>{helpful}</span></span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
