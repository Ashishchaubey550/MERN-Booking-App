export default function FallTravelCard({ imgUrl, BtnTit , PlaceName , Desc }) {
    return (
        <div className=" m-auto">
            <div className="w-[296px] h-[420px] relative rounded-xl">
                <img src={imgUrl} alt="Melbourne" className="w-full h-full rounded-xl" />
                <p className=" font-semibold text-2xl leading-7 bottom-24 ml-6 m-auto items-center text-center absolute text-white">{PlaceName}</p>
                <p className=" font-normal leading-4 text-[14px] ml-6 bottom-20 absolute text-white">{Desc}</p>
                <button className="absolute bottom-4 rounded items-center ml-6  w-[248px] h-[48px] bg-BgOwnBlue justify-center">
                    <p className=" text-black leading-4 text-sm p-2 font-normal">{BtnTit}</p>
                </button>
            </div>
        </div>
    );
}
