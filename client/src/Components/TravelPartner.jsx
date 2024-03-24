import Airbnb from "../assets/Airbnb.png"
import trivago from "../assets/trivago.png"
import Swiss from "../assets/Swiss.png"
import flyemirates from "../assets/fly-emirates.png"
import TurkishAir from "../assets/TurkishAir.png"
export default function TravelPartner(){
    return(  
         <div className="flex">
            <div className=" flex bg-explorebg flex-row w-full h-[249px] justify-evenly items-center">
            <img src={flyemirates} alt="" className="mt-16 w-[107px] h-[100px] text-explorebg opacity-90" />
            <img src={trivago} alt="" className="mt-16 w-[123px] h-[37px] text-explorebg opacity-90"/>
            <img src={Airbnb} alt="" className="mt-16 w-[120px] h-[37px] text-explorebg opacity-90" />
            <img src={TurkishAir} alt="" className="mt-16 w-[128px] h-[110px]  text-gray-600  opacity-70" />
            <img src={Swiss} alt="" className="mt-16 w-[165px] h-[37px] text-gray-600 opacity-70" />
        </div> 
        </div>
    );
}