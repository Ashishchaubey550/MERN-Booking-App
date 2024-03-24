import Header from "../Components/Header.jsx";
import HeroSectionDeals from "../Components/HeroSectionDeals.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";
import DealLifeVacc from "../Components/DealLifeVacc";
import DealLocButton from "../Components/DealLocButton";
import FallInTravel from "../Components/FallInTravel";
import HotDeal from "../Components/HotDeal";
import PopularCities from "../Components/PopularCities";
import Wilderlife from "../Components/Wilderlife";

export default function DealsSpecials(){
    return(
        <div>
        <Header/>
        <HeroSectionDeals/>
        <PopularCities/>
        <DealLocButton/>
        <DealLifeVacc/>
        <FallInTravel/>
        <Wilderlife/>
        <HotDeal/>
        <Subscribe/>
        <Footer/>
        </div>
    )
};