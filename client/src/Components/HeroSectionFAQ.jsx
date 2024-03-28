import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const HeroSectionFAQ = () => {
  return (
    <div className="bg-[#4AA5D2] w-full h-[600px] relative items-center text-center pt-[130px] pb-[160px] px-[200px]">
      <h1 className="text-[50px] font-bold text-white leading-[60px] my-8">Frequently Asked Questions According LifeVista Vacation</h1>
      <div className="my-12 mx-40">
      <span className="text-[18px] font-normal text-white leading-[30px]">Want to receive a monthly email in your inbox with awesome free Vacation Rental Services ? Please submit your email below.</span>
      </div>
      <form action="submit" className="flex bg-white rounded-3xl justify-between mx-40 py-2 px-2">
        <input type="email" placeholder="Enter your email" className="p-2 outline-none placeholder-[#778088]"/>
        <button className="rounded-3xl bg-[#4AA5D2] py-2 px-6 text-white">Subscribe</button>
      </form>
      <div className="my-1 items-center">
        <CheckCircleRoundedIcon className="color-white mr-2"/>
        <span className="text-[18px] font-normal text-white leading-[30px]">It's 100% free and we will never send more than one email per month</span>
      </div>
      

    </div>
  )
}

export default HeroSectionFAQ
