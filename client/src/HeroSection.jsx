
import Header from "./Header.jsx";
import HeroBack from "./Components/HeroBack.jsx"
import VacationRentals from "./Components/vacationRentals.jsx";
import Subscribe from "./Components/Subscribe.jsx";
import ExploreAdvert from "./Components/ExploreAdvert.jsx";
import WhyUs from "./Components/WhyUs.jsx";
import Explore from "./Components/Explore.jsx"
// import Footer from "./Components/Footer.jsx"
import Footer1 from "./Components/Footer1";
import PopularDestn from "./Components/popularDestn.jsx";
// import contery from "./assets/contery.png"

// import Airbnb from "./assets/Airbnb.png"
// import FlyEmi from "./assets/FlyEmi.png"
// import Swiss from "./assets/Swiss.png"
// import trivago from "./assets/trivago.png"
// import TurkishAir from "./assets/TurkishAir.png"
import PlaceCards from "./Components/PlaceCards.jsx"
import Catogries from "./Components/Catogries.jsx"
import Holiday from "./assets/Holiday.mp4"
import TopDestination from "./Components/TopDestination.jsx";
import OurStories from "./Components/OurStories.jsx";
import Testimonial from "./Components/Testimonial.jsx"
import TravelPartner from "./Components/TravelPartner.jsx";
import Travelnfo from "./Components/Travelnfo.jsx";
import TicketNo from "./Components/TicketNo.jsx";
import Favoriteresort from "./Components/Favoriteresort.jsx";

export default function HeroSection(){
    return(
        <>
        <div className=" w-full loader m-auto overflow-x-hidden justify-center items-center">
                <HeroBack videoSource={Holiday}/>
        <div className=" absolute top-0 w-full">
        <Header/>
        <div className=" w-full  justify-center items-center text-center">
            <p className="w-[550px] mt-7 m-auto font-semibold text-7xl leading-normal text-center justify-center text-white">Find Next Place To Visit</p>
        </div>
        <div className=" w-full  justify-center items-center text-center">
            <p className="w-[706px] m-auto font-normal text-base leading-6 text-center text-white">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
        </div>
        <Travelnfo/>

        </div>
        <TicketNo/>
        


                
</div> 
<TravelPartner/>
<PlaceCards/>    
        <Catogries/>
        <TopDestination/>
        <VacationRentals/>
        <PopularDestn/>
        <OurStories/>
        <Testimonial/>
        <Favoriteresort/>
        <ExploreAdvert/>
        <WhyUs/>
        <Explore/>
        <Subscribe/>
        <Footer1/>
        </>
    );
}