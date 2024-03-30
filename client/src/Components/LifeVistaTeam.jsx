import React from 'react';
import Card from "./TeamCard.jsx";
import data from "../Dummy Data/lifeViistaTeam.json";

const LifeVistaTeam = () => {
    return (
        <div>
            <div className='bg-[#4AA5D2] text-center py-10 px-6'>
                <h2 className='text-white text-[42px] font-[600] leading-[50px] mb-4'>The LifeVista Vacation Rental Team</h2>
                <div className='mx-80'>
                    <p className='text-white text-[16px] font-[400] leading-[24px]'>Our team at LifeVista Vacation Rentals is dedicated to crafting personalized experiences that exceed your expectations, ensuring every moment of your getaway is filled with joy and relaxation.</p>
                </div>
            </div>
            <div className="py-8 px-20 bg-[#F1F1F1]">
                {data.map((card, index) => (
                    <div key={index}>
                        <Card
                            imgUrl={card.imgUrl}
                            name={card.name}
                            role={card.role}
                            desc={card.desc}
                        />
                    </div>))}
            </div>
        </div>

    )
}

export default LifeVistaTeam
