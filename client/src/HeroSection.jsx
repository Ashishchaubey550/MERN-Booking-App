
import Header from "./Header.jsx";
import HeroBack from "./Components/HeroBack.jsx"
import contery from "./assets/contery.png"
import dekho from "./assets/dekho.png"
import plane from "./assets/plane.png"
import Airbnb from "./assets/Airbnb.png"
import FlyEmi from "./assets/FlyEmi.png"
import Swiss from "./assets/Swiss.png"
import trivago from "./assets/trivago.png"
import TurkishAir from "./assets/TurkishAir.png"


// import Footer from "./Components/Footer.jsx";
export default function HeroSection(){
    return(
        <>
        <div className="loader overflow-x-hidden">
                <HeroBack/>
        <div className=" absolute top-0">
        <Header/>
        <div className=" items-center flex justify-center w-[762px] ml-[368px] mt-[20px] h-[208px] absolute font-semibold text-7xl text-white">
        Find Next Place
        </div>
        <div className=" items-center flex justify-center w-[762px] ml-[368px] mt-[100px] h-[208px] absolute font-semibold text-7xl text-white">
        To Visit
        </div>
        <div className=" items-center flex justify-center w-[706px] h-[48px] ml-[390px] mt-[250px] absolute font-semibold text-sm text-white">
        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie,
        </div>
        <div  className=" items-center flex justify-center w-[706px] h-[48px] ml-[390px] mt-[275px] absolute font-semibold text-sm text-white">
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
        <div className=" flex  w-[1200px] bg-BgPartner shadow-md mt-[42%] h-[200px] ml-[140px] space-x-9 justify-center" style={{zIndex:1}}>
            <div className="w-[295px] h-[120px] mt-[42px] ml-[10px] text-center  bg-red-200 ">
            <div className=" w-[35px] h-[15px] mt-[23px] ml-[120px]">
                <img src={dekho} alt="img" />
            </div>
            <div className=" text-BgOwnBlue text-2xl mt-[20px] font-semibold">Plan Your Vacations</div>
            </div>
            <div className="w-[295px] h-[120px] mt-[42px] ml-[10px] bg-red-200 text-center ">
            <div className=" w-[35px] h-[15px] mt-[23px] ml-[120px]">
                <img src={contery} alt="img" />
            </div>
            <div className=" text-BgOwnBlue text-2xl mt-[20px] font-semibold">Plan your Vacations</div>
            </div>
            <div className="w-[295px] h-[120px] mt-[42px] ml-[10px] bg-red-200 text-center ">
            <div className=" w-[35px] h-[15px] mt-[23px] ml-[120px]">
                <img src={plane} alt="img" />
            </div>
            <div className=" text-BgOwnBlue text-2xl font-semibold mt-[20px]" >Plan your Vacations</div>
            </div>
        </div>
        </div>
        <div  className="w-[1600px] h-[280px] bg-BgPartner">
        </div>
{/* ************************************************************Partner---------------------------- */}
        <div className="w-[1530px] h-[140px]  bg-blue-500 flex justify-evenly text-center items-center">
                <div className="w-[107px] h-[37px]  ">
                    <img src={FlyEmi} alt="" />
                </div>
                <div className="w-[124px] h-[37px]   "><img src={trivago} alt="" /></div>
                <div className="w-[120px] h-[37px]  "><img className=" text-black bg-black" src={Airbnb} alt="" /></div>
                <div className="w-[128px] h-[37px]  "><img src={TurkishAir} alt="" /></div>
                <div className="w-[165px] h-[37px]"><img src={Swiss} alt="" /></div>
            </div>
{/* ------------------------------------------------------Product---------------------------------- */}
        </div>
        <div className=" w-[1250px] h-[697px] ml-[170px] mt-[143px] bg-BgPartner">
                <div className=" text-BgOwnBlue w-[330px] h-[32px] pt-3 ml-[456px] text-2xl font-semibold text-center opacity-[100%]">Must-Visit Destinations</div>
                <div className=" w-[901px] h-[144px] mt-[55px] ml-[151px] font-semibold text-6xl text-center text-HomeText">Exploring the Most Popular Gems Around the Globe</div>
        </div>
        </>

    );
}