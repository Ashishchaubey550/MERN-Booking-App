import React from 'react';

const About3 = () => {
  return (
    <div className='w-full items-center flex flex-col py-10 px-12 text-center'>
      <h1 className='text-[32px] mb-1 font-bold text-[#1A1A1A]'>Why We Are Best</h1>
      <p className='text-[#363636] text-[16px] font-normal  mb-4 mx-80'>Choose us because we turn dreams into unforgettable journeys with our personalized service and unbeatable prices.</p>
      <div className='flex mx-6 my-7'>
        <div className='flex flex-col items-center text-center mx-3 p-5 shadow-xl rounded-lg'>
            <span className='text-[18px] text-[#1A1A1A] font-bold'>Unparalleled Expertise</span>
            <p className='text-[17px] text-[#191919] font-normal'>With years of industry experience, our team possesses the knowledge and expertise to curate the perfect vacation tailored to your preferences.</p>
        </div>
        <div className='flex flex-col items-center text-center mx-3 p-5 shadow-xl rounded-lg'>
            <span className='text-[18px] text-[#1A1A1A] font-bold'>Exclusive Partnerships</span>
            <p className='text-[17px] text-[#191919] font-normal'>Through strategic partnerships with top-rated accommodations and service providers, we offer exclusive deals and perks that you won't find elsewhere.</p>
        </div>
        <div className='flex flex-col items-center text-center mx-3 p-5 shadow-xl rounded-lg'>
            <span className='text-[18px] text-[#1A1A1A] font-bold'>Customer Satisfaction</span>
            <p className='text-[17px] text-[#191919] font-normal'>Our commitment to exceeding customer expectations is reflected in our high satisfaction rates and glowing testimonials from happy travelers.</p>
        </div>
      </div>
    </div>
  )
}

export default About3;
