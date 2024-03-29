// import Header from "../Header";
import Header from "../Components/Header.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";
import HeroSectionAboutUs from "../Components/HeroSectionAboutUs.jsx";
import LifeVistaTeam from "../Components/LifeVistaTeam.jsx";
import LifeVistamessage from "../Components/LifeVistamessage.jsx";
import About1 from "../Components/About1.jsx";
import About2 from "../Components/About2.jsx";
import About3 from "../Components/About3.jsx";
import About4 from "../Components/About4.jsx";


export default function AboutUs(){
    return(
        <div>
            <Header/>
            <HeroSectionAboutUs/>
            <About1/>
            <About2/>
            <LifeVistamessage/>
            <About3/>
            <LifeVistaTeam/>
            <About4/>
            <Subscribe/>
            <Footer/>
        </div>
          
    );
}