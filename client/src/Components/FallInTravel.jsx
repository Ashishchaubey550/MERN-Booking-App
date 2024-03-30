import Card from "./FallTravelCard";
import data from "../Dummy Data/FallInTravel.json"

export default function FallInTravel(){
    return(
        <div className="flex flex-col pt-10  w-full h-[632px] bg-explorebg m-auto items-center  justify-between">
            <div className=" flex w-[1223px] h-[92px] m-auto items-center justify-between">
                <div className="  w-[1123px] h-[92px]">
                    <p className=" font-semibold text-[32px] leading-9 p-1 text-black">Fall Into Travel</p>
                    <p className=" w-[851px] font-normal text-[16px] leading-5 text-black p-1">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the vacation tools to get you to your destination.</p>
                </div>
                <button className="w-[80px] h-[40px] rounded border border-green-400 p-3"><p className=" font-normal text-sm leading-4 text-black">See All</p></button>
            </div>
            <div className=" flex w-[1232px] h-[420px] items-center justify-center m-auto">
            {data.map((d, index)=>(
                            <Card
                                imgUrl = {d.imgUrl}
                                BtnTit = {d.BtnTit}
                                PlaceName = {d.PlaceName}
                                Desc = {d.Desc}
                            />
            ))};
            </div>
        </div>
    );
}