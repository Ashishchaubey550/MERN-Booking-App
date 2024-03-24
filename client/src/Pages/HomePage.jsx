import React from 'react';
import HeroSection from '../Components/HeroSection.jsx';
import VacationRentals from "../Components/VacationRentals.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import ExploreAdvert from "../Components/ExploreAdvert.jsx";
import WhyUs from "../Components/WhyUs.jsx";
import BestServices from "../Components/BestServices.jsx";
import Explore from "../Components/Explore.jsx"
import Footer from "../Components/Footer.jsx"
import PopularDestn from "../Components/popularDestn.jsx"
import TopDestination from "../Components/TopDestination.jsx"
// import PlaceCards from "./Components/PlaceCards.jsx"
import Catogries from "../Components/Catogries.jsx"
import MustVisitDestn from '../Components/MustVisitDestn.jsx';
import TrendyVacation from '../Components/TrendyVacation.jsx';
// import Banner from '../Components/Banner.jsx';
import TravelPartner from '../Components/TravelPartner.jsx';
import OurStories from '../Components/OurStories.jsx';
import TestimoCard from '../Components/TestimoCard.jsx';
import Testimonial from '../Components/Testimonial.jsx'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <TravelPartner/>
        <MustVisitDestn/>
        <Catogries/>
        {/* <TopDestination/> */}
        <VacationRentals title="LifeVista Vacation Rentals"/>
        {/* <TopDestination/> */}
        {/* <VacationRentals/> */}
        <PopularDestn/>
        <TopDestination/>
        <OurStories/>
        <Testimonial/>
        {/* <TestimoCard/> */}
        <ExploreAdvert/>
        <WhyUs/>
        <BestServices/>
        <Explore/>
        <TrendyVacation/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default HomePage