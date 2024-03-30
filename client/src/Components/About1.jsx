import React from 'react'
import { Button } from '@mui/material'

const About1 = () => {
    return (
        <div className='bg-[#01B7F2] w-full flex justify-between p-24'>
            <div className='w-1/2 px-8'>
                <div>
                    <h2 className='text-[26px] text-white font-bold leading-[40px]'>About Us</h2>
                    <span className='text-[12px] text-white font-normal '>we specialize in crafting bespoke travel experiences tailored to your every desire. With our expert guidance and personalized service, we transform your dream vacation into reality. Trust us to curate unforgettable memories that exceed your expectations, every time.</span>
                </div>
                <div className='mb-4'>
                    <h2 className='text-[16px] text-white font-bold leading-[26px] mt-2'>Why Choose Tour </h2>
                    <div className='flex'>
                        <div className='w-1/2 pr-2'>
                            <span className='text-[13px] text-white font-semibold leading-[20px] '>Personalized Service</span>
                            <p className='text-[12px] text-white font-normal leading-[16px] mt-1 mb-1'>From initial inquiries to final farewells, we cater to your every need and preference</p>
                        </div>
                        <div className='w-1/2 pr-2'>
                            <span className='text-[13px] text-white font-semibold leading-[20px]'>24x7 Support</span>
                            <p className='text-[12px] text-white font-normal leading-[16px] mt-1 mb-1'>Enjoy peace of mind knowing that our 24x7 support team is always just a call or click away.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/2 pr-2'>
                            <span className='text-[13px] text-white font-semibold leading-[20px]'>Best Price</span>
                            <p className='text-[12px] text-white font-normal leading-[16px] mt-1 mb-1'>we guarantee the best price for your dream getaway. With our commitment to affordability and quality, we ensure you get the most value out of your travel budget.</p>
                        </div>
                        <div className='w-1/2 pr-2'>
                            <span className='text-[13px] text-white font-semibold leading-[20px]'>Trusted Company</span>
                            <p className='text-[12px] text-white font-normal leading-[16px] mt-1 mb-1'>With years of industry experience and a commitment to excellence, we've earned the confidence of travelers worldwide.</p>
                        </div>
                    </div>
                </div>
                <Button variant='contained' style={{
                    backgroundColor: 'white',
                    color: '#3C3C3C',
                    padding: '9px 30px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    lineHeight: '24px',
                    fontWeight: '650'
                }}>Explore Now</Button>
            </div>
            <div className='flex-wrap w-1/2 ml-10'>
                <div className='flex'>
                    <div class='w-56 h-48 m-2 p-1 bg-white rounded-md'>
                        <img
                            src='img/about-1.jpeg'
                            alt='Image 1'
                            class='w-full h-full object-cover rounded-md'
                        />
                    </div>
                    <div class='w-56 h-48 m-2 p-1 bg-white rounded-md'>
                        <img
                            src='img/about-2.jpeg'
                            alt='Image 2'
                            class='w-full h-full object-cover rounded-md'
                        />
                    </div>
                </div>

                <div className='flex'>
                    <div class='w-56 h-48 m-2 p-1 bg-white rounded-md'>
                        <img
                            src='img/about-3.jpeg'
                            alt='Image 3'
                            class='w-full h-full object-cover rounded-md'
                        />
                    </div>
                    <div class='w-56 h-48 m-2 p-1 bg-white rounded-md'>
                        <img
                            src='img/about-4.jpeg'
                            alt='Image 4'
                            class='w-full h-full object-cover rounded-md'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About1
