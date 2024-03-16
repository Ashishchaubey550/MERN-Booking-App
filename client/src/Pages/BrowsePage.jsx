import Header from "../Header";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Components/Footer.jsx";

export default function BrowsePage(){
    return(
            <div  className=" w-full h-screen bg-black">
            <Header/>
            <h1>BrowsePage</h1>
            <Subscribe/>
            <Footer/>
        </div>
    );
}