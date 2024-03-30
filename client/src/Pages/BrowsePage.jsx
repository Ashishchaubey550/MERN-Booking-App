import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import VacationRentals from "../Components/VacationRentals.jsx";
import Header from "../Components/Header";
import ExploreTheWorld from "../Components/ExploreTheWorld";
import FeatureNews from "../Components/FeatureNews";
import BookNow from "../Components/BookNow";
import HeroSectionBrowse from "../Components/HeroSectionBrowse";

export default function BrowsePage(){
    return(
        <div>
            <Header/>
            <HeroSectionBrowse/>
            <BookNow/>
            <VacationRentals title="AVAILABLE VACATION RENTALS"/>
            <ExploreTheWorld/>
            <FeatureNews/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}