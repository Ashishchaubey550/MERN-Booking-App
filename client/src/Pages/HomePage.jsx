import React from 'react';
import HeroSection from '../Components/HeroSection.jsx';
import VacationRentals from "../Components/vacationRentals.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import ExploreAdvert from "../Components/ExploreAdvert.jsx";
import WhyUs from "../Components/WhyUs.jsx";
import BestServices from "../Components/BestServices.jsx";
import Explore from "../Components/Explore.jsx"
import Footer from "../Components/Footer.jsx";
import PopularDestn from "../Components/popularDestn.jsx";
import TopDestination from "../Components/TopDestination.jsx";
// import PlaceCards from "./Components/PlaceCards.jsx"
import Catogries from "../Components/Catogries.jsx"
import MustVisitDestn from '../Components/MustVisitDestn.jsx';
import TrendyVacation from '../Components/TrendyVacation.jsx';

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        {/*  */}
        <MustVisitDestn/>
        <Catogries/>
        <TopDestination/>
        <VacationRentals/>
        <PopularDestn/>
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