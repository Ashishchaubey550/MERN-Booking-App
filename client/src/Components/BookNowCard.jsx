import React from 'react';
import { Carousel } from 'antd';
// import "./BookNowCard.scss";
import { IoLocationOutline } from "react-icons/io5";

const contentStyle = {
    width:'256px',
    height:'216px',
    borderRadius:'16px'
  };

const BookNowCard = ({ img1, img2, img3, img4, name, place, price, star }) => {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

  return (
    <div className='flex flex-col items-center p-[15px] m-[3px] w-[256px] h-[300px]'>
      <Carousel afterChange={onChange} style={{width:'256px', height:'206px'}}>
      <div>
        <img src={img1} style={contentStyle} alt="" />
      </div>
      <div>
        <img src={img2} style={contentStyle} alt="" />
      </div>
      <div>
        <img src={img3} style={contentStyle} alt="" />
      </div>
      <div>
        <img src={img4} style={contentStyle} alt="" />
      </div>
    </Carousel>
    <div className='flex justify-between w-full mt-6'>
      <h2 className='text-[16px] font-bold text-[#191919]'>{name}</h2>
      <span className='text-[18px] font-bold text-[#191919]'>{price}</span>
    </div>
    <div className='text-justify w-full flex'>
      <IoLocationOutline/>
      <p className='text-[12px] ml-1 font-normal text-[#1A1A1A]'>{place}</p>
    </div>
    </div>
  )
}

export default BookNowCard;
