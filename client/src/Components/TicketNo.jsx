import dekho from "../assets/dekho.png"
import plane from "../assets/plane.png"
export default function TicketNo() {
    return (
            <div className="">
            <div className=" items-center flex m-auto w-[900px] rounded-3xl bg-BgPartner text-center shadow-md h-[180px] justify-center" style={{zIndex:1, position:'relative', top:'60px'}}>
            <div className="w-[295px] h-[137px] m-auto justify-center  p-2 items-center text-center ">
            <div className=" w-[35px] h-[35px] m-auto justify-center items-center ">
                <img className=" lazy" src={dekho} alt="img" />
            </div>
            <p className=" text-BgOwnBlue w-[278px] h-[32px] text-3xl m-auto text-center leading-8 font-semibold">Plan Your Vacations</p>
            <p className=" text-gray-500 w-[295px] h-[53px] font-normal leading-6 text-lg text-center">Unlock your dream getaway with our expert travel planning services</p>
            </div>
            <div className="w-[311px] h-[135px] items-center justify-center m-auto text-center ">
            <div className=" w-[35px] h-[35px] m-auto ">
                <img className=" lazy" src={plane} alt="img" />
            </div> 
            <p className=" text-BgOwnBlue text-3xl font-semibold m-auto text-center leading-8" >Travel around country</p>
            <p className="w-[288px] h-[53px] font-normal text-gray-500 leading-6 text-center">Explore the country's wonders, from coast to coast. Your adventure awaits</p>
            </div>
        </div> 
        </div>
    );
}
