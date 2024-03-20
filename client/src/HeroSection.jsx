
import Header from "./Header.jsx";
import HeroBack from "./Components/HeroBack.jsx"
import VacationRentals from "./Components/vacationRentals.jsx";
import Subscribe from "./Components/Subscribe.jsx";
import ExploreAdvert from "./Components/ExploreAdvert.jsx";
import WhyUs from "./Components/WhyUs.jsx";
import BestServices from "./Components/BestServices.jsx";
import Explore from "./Components/Explore.jsx"
import Footer from "./Components/Footer.jsx";
import PopularDestn from "./Components/popularDestn.jsx";
import contery from "./assets/contery.png"
import dekho from "./assets/dekho.png"
import plane from "./assets/plane.png"
import Airbnb from "./assets/Airbnb.png"
import FlyEmi from "./assets/FlyEmi.png"
import Swiss from "./assets/Swiss.png"
import trivago from "./assets/trivago.png"
import TurkishAir from "./assets/TurkishAir.png"
import PlaceCards from "./Components/PlaceCards.jsx"
import Catogries from "./Components/Catogries.jsx"
import Holiday from "./assets/Holiday.mp4"
import TopDestination from "./Components/TopDestination.jsx";

export default function HeroSection(){
    return(
        <>
        <div className=" w-full loader overflow-x-hidden justify-center items-center">
                <HeroBack videoSource={Holiday}/>
        <div className=" absolute top-0 w-full">
        <Header/>
        <div className=" w-full  justify-center items-center text-center">
            <p className="w-[550px] mt-7 m-auto font-semibold text-7xl leading-normal text-center justify-center text-white">Find Next Place To Visit</p>
        </div>
        <div className=" w-full  justify-center items-center text-center">
            <p className="w-[706px] m-auto font-normal text-base leading-6 text-center text-white">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
        </div>

{/* ************************************Explore*********************************************************** */}
        <div className=" flex explore w-[987px] mt-[47px] ml-[256px] h-[198px] bg-explorebg absolute justify-center m-auto items-center rounded-xl">
        <div className=" flex bg-exploreCont h-[128px] w-[910px] m-auto  rounded-2xl">
            <div className=" flex flex-col w-[199px] h-[63px] m-auto text-center justify-center  items-center">
                <p className="w-[132px] m-auto font-semibold leading-8 text-3xl h-[30px]">Location</p>
                <p className="w-[200px] text-right m-auto text-md font-normal leading-6 h-[24px]">Where do you wanna go?</p>
            </div>
            <div className=" w-[1px] h-16 bg-gray-500 m-auto"></div>
            <div className="w-[199px] h-[63px] m-auto  justify-center items-center">
                <p className="w-[132px] m-auto font-semibold leading-8 text-3xl h-[30px]">Location</p>
                <p className="w-[200px] m-auto text-md font-normal text-right leading-6 h-[24px]">Where do you wanna go?</p>
            </div>
            <div className=" w-[1px] h-16 bg-gray-500 m-auto"></div>
            <div className="w-[199px] h-[63px] m-auto  justify-center items-center">
                <p className="w-[132px] m-auto font-semibold leading-8 text-3xl h-[30px]">Location</p>
                <p className="w-[200px] m-auto text-md font-normal text-right leading-6 h-[24px]">Where do you wanna go?</p>
            </div>
            <div className="w-[143px] h-[52px]  m-auto text-center">
                <button className=" bg-BgOwnBlue  w-[120px] h-[40px]  font-semibold text-lg leading-4 m rounded-2xl">Explore Now</button>
            </div> 
                {/* 
                <div className=" w-full h-[63px] m-auto text-center">
                <p className=" w-[149px] h-[43px]  m-auto text-lg font-semibold">Date</p>
                </div>
                <div className="w-[1px] h-16 bg-gray-500 m-auto "></div>
                <div className=" w-full h-[63px] m-auto text-center">
                <div className=" w-[149px] h-[43px] m-auto text-lg font-semibold">Guest</div>
                </div>

*/}
        </div>
        </div>
        <div>

        </div>
        <div className=" flex flex-col justify-between m-auto ml-5 text-center items-center "> <div className=" items-center flex  w-[1139px] rounded-3xl bg-BgPartner text-center mt-[320px] shadow-md m-auto h-[209px] ml-[195px] justify-between" style={{zIndex:1}}>
            <div className="w-[295px] h-[137px] m-auto justify-between items-center  text-center  ">
            <div className=" w-[35px] h-[35px] m-auto mt-[23px] ml-[120px]">
                <img className=" lazy" src={dekho} alt="img" />
            </div>
            <div className="w-[] justify-center items-center text-center ">
            <p className=" text-BgOwnBlue text-3xl mt-[2px] m-auto text-center leading-8 font-semibold">Plan Your Vacations</p>
            <p className="w-[288px] h-[px] font-normal leading-6 text-center">Explore the country's wonders, from coast to coast. Your adventure awaits</p>
            </div>
            </div>
            <div className="w-[311px] h-[135px] items-center justify-center m-auto text-center ">
            <div className=" w-[35px] h-[35px] mt-[23px] m-auto ml-[120px]">
                <img className=" lazy" src={plane} alt="img" />
            </div>
            <div className="w-[] justify-center items-center text-center ">
            <p className=" text-BgOwnBlue text-3xl font-semibold m-auto text-center leading-8" >Travel around country</p>
            <p className="w-[288px] h-[53px] font-normal leading-6 text-center">Unlock your dream getaway with our expert travel planning services</p>
            </div>
            </div>
        </div>
        </div>
        </div>
        <div  className="w-[1600px] h-[280px] bg-BgPartner">
        </div>
{/* ************************************************************Partner---------------------------- */}
        <div className="w-full h-[1010px]  bg-BgPartner flex flex-col text-center">
            <div className="flex justify-evenly items-center  w-full "> 
                <div className="w-[107px] h-[37px] bg-BgPartner ">
                    <img className=" lazy" src={FlyEmi} alt="" />
                </div>
                <div className="w-[124px] h-[37px]   "><img className=" lazy" src={trivago} alt=""/></div>
                <div className="w-[120px] h-[37px]  "><img  className=" lazy text-black bg-black" src={Airbnb} alt="" /></div>
                <div className="w-[128px] h-[37px]  "><img className=" lazy" src={TurkishAir} alt="" /></div>
                <div className="w-[165px] h-[37px]"><img className="lazy" src={Swiss} alt="" /></div>
                </div>
                <div className=" w-full h-[750px] mt-[143px] bg-BgPartner justify-center items-center   text-center">
                <div className=" text-BgOwnBlue h-[32px] pt-3 ml-[40px] justify-center  text-2xl font-semibold text-center opacity-[100%]">Must-Visit Destinations</div>
                <div className=" w-[901px] h-[144px] mt-[30px] ml-[320px] justify-center font-semibold text-6xl text-center text-HomeText">Exploring the Most Popular Gems Around the Globe</div>
                <PlaceCards/>

        </div>
            </div>
            
{/* ------------------------------------------------------Product---------------------------------- */}
        </div>
        <Catogries/>
        <TopDestination/>
        <VacationRentals/>
        <PopularDestn/>
        <ExploreAdvert/>
        <WhyUs/>
        <BestServices/>
        <Explore/>
        <Subscribe/>
        <Footer/>
        </>
    );
}