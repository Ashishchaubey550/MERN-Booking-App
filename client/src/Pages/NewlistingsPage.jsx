import MobileApp from "../Components/MobileApp.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";
import PopularDestn from "../Components/popularDestn.jsx";
import VacationRentals from "../Components/VacationRentals.jsx";
import FallTravel from "../Components/FallInTravel.jsx"

export default function NewlistingsPage(){
    return(
        <div>
            <VacationRentals/>
            <FallTravel/>
            <PopularDestn/>
            <MobileApp/>
            <Subscribe/>
            <Footer/>
            
        </div>
    );
}
