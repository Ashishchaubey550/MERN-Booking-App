import Airbnb from "../assets/Airbnb.png"
// import FlyEmi from "../assets/FlyEmi.png"
// import lifevista from "../assets/lifevista.png"
import trivago from "../assets/trivago.png"
import Swiss from "../assets/Swiss.png"
import flyemirates from "../assets/fly-emirates.png"
import TurkishAir from "../assets/TurkishAir.png"
export default function TravelPartner(){
    return(
        <div className=" flex bg-explorebg flex-row  w-full h-[149px]  m-auto justify-evenly items-center">
            <img src={flyemirates} alt="" className=" m-auto w-[107px] h-[100px] text-explorebg opacity-90" />
            <img src={trivago} alt="" className=" m-auto w-[123px] h-[37px] text-explorebg opacity-90"/>
            <img src={Airbnb} alt="" className=" m-auto w-[120px] h-[37px] text-explorebg opacity-90" />
            <img src={TurkishAir} alt="" className=" m-auto w-[128px] h-[110px]  text-gray-600  opacity-70" />
            <img src={Swiss} alt="" className=" m-auto w-[165px] h-[37px] text-gray-600 opacity-70" />
        </div>
    );
}