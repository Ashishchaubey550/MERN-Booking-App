import MobileApp from "../Components/MobileApp.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";
import VacationRentals from "../Components/VacationRentals.jsx";
import FallTravel from "../Components/NewListDest.jsx";

export default function NewlistingsPage(){
    return(
        <div>
            <FallTravel/>
            <VacationRentals/>
            <MobileApp/>
            <Subscribe/>
            <Footer/>
            
        </div>
    );
}
