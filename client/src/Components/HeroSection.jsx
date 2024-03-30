import React from 'react'
import TravelInfo from './Travelnfo.jsx'
import TicketNo from './TicketNo.jsx'
import '../styles/HeroSection.scss'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            {/* <Header/> */}
            <div className='heading-cont'>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center text-white mt-8 md:mt-16 lg:mt-8">Find Next To Place To Visit</h1>
            <p className="text-sm md:text-lg lg:text-xl font-normal mx-[200px] text-center text-white mt-4 md:mt-6 lg:mt-8">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
            </div>
            <TravelInfo/>
            <TicketNo/> 
        </div>
    )
}

export default HeroSection
