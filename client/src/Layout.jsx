
import Header from "./Header";
import HeroBack from "./Components/HeroBack.jsx"
// import Footer from "./Components/Footer.jsx";
export default function Layout(){
    return(
        <div className="loader">
                <HeroBack/>
        <div className=" absolute top-0">
        <Header/>
        {/* <Footer/> */}
        </div>

        </div>
    );
}