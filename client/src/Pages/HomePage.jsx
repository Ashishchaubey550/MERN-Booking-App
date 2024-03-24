import React from 'react';

import Header from "../Components/Header.jsx";
import HeroSection from '../Components/HeroSection.jsx';
import TravelPartner from '../Components/TravelPartner.jsx';
import MustVisitDestn from '../Components/MustVisitDestn.jsx';
import Catogries from "../Components/Catogries.jsx";
import VacationRentals from "../Components/VacationRentals.jsx";
import PopularDestn from "../Components/popularDestn.jsx";
import TopDestination from "../Components/TopDestination.jsx";
import OurStories from '../Components/OurStories.jsx';
import Testimonial from '../Components/Testimonial.jsx'
import ExploreAdvert from "../Components/ExploreAdvert.jsx";
import WhyUs from "../Components/WhyUs.jsx";
import BestServices from "../Components/BestServices.jsx";
import Explore from "../Components/Explore.jsx";
import TrendyVacation from '../Components/TrendyVacation.jsx';
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <TravelPartner/>
        <MustVisitDestn/>
        <Catogries/>
        <VacationRentals title="LifeVista Vacation Rentals"/>
        <PopularDestn/>
        <TopDestination/>
        <OurStories/>
        <Testimonial/>
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