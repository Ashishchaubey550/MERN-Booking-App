import MobileApp from "../Components/MobileApp.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";
import VacationRentals from "../Components/VacationRentals.jsx";
import FallTravel from "../Components/NewListDest.jsx";
// import FallTravel from "../Components/FallInTravel.jsx";
import Header from "../Components/Header.jsx";
import PopularDestn from "../Components/popularDestn.jsx";
import HeroSectionNewListing from "../Components/HeroSectionNewListing.jsx";
import CustomerReview from "../Components/CustomerReview.jsx";

export default function NewlistingsPage(){
    return(
        <div>
            <Header/>
            <HeroSectionNewListing/>
            <FallTravel/>
            <VacationRentals title="New  Listings on LifeVista Vacation  For Rentals" desc="Be sure to review the brand new listing here on LifeVista Vacation. These new vacation rentals have just hit the market and you can be one of the first to book with them."/>
            <PopularDestn/>
            <MobileApp/>
            <CustomerReview/>
            <Subscribe/>
            <Footer/>
            
        </div>
    );
}
