import DealLifeVacc from "../Components/DealLifeVacc";
import DealLocButton from "../Components/DealLocButton";
import FallInTravel from "../Components/FallInTravel";
import HotDeal from "../Components/HotDeal";
import PopularCities from "../Components/PopularCities";
import Wilderlife from "../Components/Wilderlife";

// import Header from "../Header";
export default function DealsSpecials(){
    return(
        <>
        <PopularCities/>
        <DealLocButton/>
        <DealLifeVacc/>
        <FallInTravel/>
        <Wilderlife/>
        <HotDeal/>
        </>
            
    );
}