
import Header from "./Header";
import HeroBack from "./Components/HeroBack.jsx"
export default function Layout(){
    return(
        <div className="loader">
                <HeroBack/>
        <div className=" absolute top-0">
        <Header/>
        </div>

        </div>
    );
}