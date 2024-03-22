import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import VacationRentals from "../Components/VacationRentals";
import Header from "../Header";
import ExploreTheWorld from "../Components/ExploreTheWorld";
import FeatureNews from "../Components/FeatureNews";

export default function BrowsePage(){
    return(
        <div>
            {/* <div  className=" w-full h-screen bg-black"> */}
            <Header/>
            {/* </div> */}
            <VacationRentals title="AVAILABLE VACATION RENTALS"/>
            <ExploreTheWorld/>
            <FeatureNews/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}