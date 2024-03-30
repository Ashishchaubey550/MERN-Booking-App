import Header from "../Components/Header";
import HeroSectionFAQ from "../Components/HeroSectionFAQ";
import ListFAQ from "../Components/ListFAQ";
import RentFAQ from "../Components/RentFAQ";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";

// import Header from "../Header";
export default function FAQPage(){
    return(
        <div>
            <Header/>
            <HeroSectionFAQ/>
            <ListFAQ/>
            <RentFAQ/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}