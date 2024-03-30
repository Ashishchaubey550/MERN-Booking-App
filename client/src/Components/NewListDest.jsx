import Card from "./NewListDestCard";
import data from "../Dummy Data/NewListDest.json";

export default function FallInTravel() {
    return (
        <div className="flex flex-col scroll-mb-84 w-full h-[1000px] bg-explorebg m-auto items-center justify-between">
            <div className="flex w-[1223px] h-[92px] m-auto items-center justify-between">
                <div className="w-[1123px] mt-6 h-[92px]">
                    <p className="font-semibold text-[32px] leading-9 p-1 text-black">Discover your love</p>
                </div>
                <button className="w-[80px] h-[40px] rounded border border-green-400 p-3 hover:bg-green-400 hover:border-white  transition duration-600 ease-in-out">
                    <p className="font-normal text-sm leading-4 text-black">See All</p>
                </button>
            </div>
            <div className="flex flex-wrap space-y-3 justify-center w-[1232px] h-[780px] items-center">
                {data.map((d, index) => (
                    <Card
                        key={index}
                        imgUrl={d.imgUrl}
                        BtnTit={d.BtnTit}
                        PlaceName={d.PlaceName}
                        Desc={d.Desc}
                    />
                ))}
            </div>
        </div>
    );
}
