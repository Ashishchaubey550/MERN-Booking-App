
import Header from "./Header.jsx";
import HeroBack from "./Components/HeroBack.jsx"
import VacationRentals from "./Components/vacationRentals.jsx";
import Subscribe from "./Components/Subscribe.jsx";
import ExploreAdvert from "./Components/ExploreAdvert.jsx";
import WhyUs from "./Components/WhyUs.jsx";
import Explore from "./Components/Explore.jsx"
import Footer from "./Components/Footer.jsx"
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
        <div className=" w-full loader overflow-x-hidden">
                <HeroBack videoSource={Holiday}/>
        <div className=" absolute top-0 w-full">
        <Header/>
        <div className=" text-center items-center  flex justify-center w-full  mt-[20px] h-[208px] absolute font-semibold text-7xl text-white">
        Find Next Place
        </div>
        <div className=" text-center items-center flex justify-center w-full  mt-[100px] h-[208px] absolute font-semibold text-7xl text-white">
        To Visit
        </div>
        <div className=" text-center items-cente justify-center  w-full h-[48px]  mt-[250px] absolute font-semibold text-sm text-white">
        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie,
        </div>
        <div  className="  text-center items-center flex justify-center w-full h-[48px]  mt-[275px] absolute font-semibold text-sm text-white">
        musica, sport etc, litot Europa usa li sam vocabular.
        </div>

{/* ************************************Explore*********************************************************** */}
        <div className=" flex explore w-[887px] h-[178px] bg-explorebg absolute  ml-[306px] mt-[372px]">
        <div className=" bg-exploreCont w-[830px] h-[118px] mt-[3%] ml-[3%] rounded-lg">
            <div className=" flex flex-row justify-center">
                <div className=" w-[149px] h-[43px] mt-[40px] justify-center ml-[13px] text-lg font-semibold">Location</div>
                <div className=" w-[1px] bg-gray-500 mt-[30px] ml-[13px]"></div>
                <div className=" w-[149px] h-[43px] mt-[40px] ml-[20px] text-lg font-semibold">Date</div>
                <div className="w-[1px] bg-gray-500 mt-[30px] ml-[13px]"></div>
                <div className=" w-[149px] h-[43px] mt-[40px] ml-[13px] text-lg font-semibold">Guest</div>
                <div>
                <button className=" bg-BgOwnBlue  w-[129px] h-[33px] mt-[40px] ml-[13px] font-semibold text-lg">Explore Now</button>
                </div>
            </div>
        </div>
        </div>
        <div className=" items-center flex  w-[1200px] rounded-lg bg-BgPartner shadow-md mt-[42%] h-[200px] ml-[140px] space-x-9 justify-center" style={{zIndex:1}}>
            <div className="w-[295px] h-[120px] mt-[42px] ml-[10px] text-center ">
            <div className=" w-[35px] h-[15px] mt-[23px] ml-[120px]">
                <img className=" lazy" src={dekho} alt="img" />
            </div>
            <div className=" text-BgOwnBlue text-2xl mt-[20px] font-semibold">Plan Your Vacations</div>
            </div>
            <div className="w-[295px] h-[120px] mt-[42px] ml-[10px]  text-center ">
            <div className=" w-[35px] h-[15px] mt-[23px] ml-[120px]">
                <img className=" lazy" src={contery} alt="img" />
            </div>
            <div className=" text-BgOwnBlue text-2xl mt-[20px] font-semibold">Plan your Vacations</div>
            </div>
            <div className="w-[295px] h-[120px] mt-[42px] ml-[10px]  text-center ">
            <div className=" w-[35px] h-[15px] mt-[23px] ml-[120px]">
                <img className=" lazy" src={plane} alt="img" />
            </div>
            <div className=" text-BgOwnBlue text-2xl font-semibold mt-[20px]" >Plan your Vacations</div>
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
                <div className="w-[124px] h-[37px]   "><img className=" lazy" src={trivago} alt="" /></div>
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
        <Explore/>
        <Subscribe/>
        <Footer/>
        </>
    );
}