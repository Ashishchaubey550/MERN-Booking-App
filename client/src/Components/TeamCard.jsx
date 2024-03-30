import React from 'react'

const TeamCard = ({imgUrl, name, role, desc}) => {
  return (
    <div className="flex my-8 px-12 py-8 h-[290px] bg-white rounded-3xl border-[#1F124F]">
        <div className='pr-28'>
            <h1 className='text-[38px] text-[#09184B] font-[500] leading-[44px] mb-4 uppercase'>{name}</h1>
            <span className='text-[18px] text-[#8D8B8B] font-[400] leading-[22px]'>({role})</span>
            <p className='text-[16px] text-[#474444] font-[400] leading-[28px] mt-6'>{desc}</p>
        </div>
        <div className='mr-4'>
            <img className='h-[220px] w-[400px] rounded-tr-3xl rounded-bl-3xl' src={imgUrl} alt="" />
        </div>
    </div>
  )
}

export default TeamCard
