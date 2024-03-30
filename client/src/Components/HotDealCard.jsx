export default function HotDealCard({ImgURL , offer , Price , Validity , Desc , Beds,Bath , Sleep}){
    return(
        <div className=" w-[288px] ml-2 rounded-lg border justify-evenly items-center  border-gray-300 mt-7 h-[444px]">
            <img src={ImgURL} alt="" className=" m-auto items-center mt-2 justify-center" />
            <p className=" text-left p-2 font-semibold leading-[16px] text-[14px]">{offer}</p>
            <span className=" p-2 font-semibold text-[10px] leading-[15px] text-gray-400">{Price}</span>
            <p className=" p-2 font-medium leading-[14px] text-[10px] text-black">{Validity}</p>
            <p className=" p-2 font-light text-[10px] leading-[14px] text-black">{Desc}</p>
            <div className=" flex ">
                <div className="w-[62px] h-[15px]">
                    <p className=" p-1">{Beds}</p>
                </div>
                <div>
                    <p className=" p-1">{Bath}</p>
                </div>
                <div>
                    <p className=" p-1">{Sleep}</p>
                </div>
            </div>
            <button className=" mt-2 ml-3 w-[100px] h-[31px] rounded-[30px] bg-BgOwnBlue"><p className="">Book Now</p></button>
            <button className=" mt-2 ml-3 w-[100px] h-[31px] rounded-[30px] bg-white border border-BgOwnBlue"><p className=" font-bold text-[11px] leading-[13px] text-BgOwnBlue">Deals</p></button>
        </div>
    );
}