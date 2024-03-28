// import Header from "../Header";
import Header from "../Components/Header.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";
import HeroSectionAboutUs from "../Components/HeroSectionAboutUs.jsx";
import LifeVistaTeam from "../Components/LifeVistaTeam.jsx";
import LifeVistamessage from "../Components/LifeVistamessage.jsx";

export default function AboutUs(){
    return(
        <div>
            <Header/>
            <HeroSectionAboutUs/>
            <LifeVistamessage/>
            <LifeVistaTeam/>
            <Subscribe/>
            <Footer/>
        </div>
          
    );
}