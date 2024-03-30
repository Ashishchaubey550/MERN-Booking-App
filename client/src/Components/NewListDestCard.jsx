export default function NewListDestCard({ imgUrl, BtnTit, PlaceName, Desc }) {
    return (
        <div className="m-auto">
            <div className="w-[279px] h-[370px] relative rounded-xl overflow-hidden">
                <img src={imgUrl} alt="Destination" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 flex flex-col justify-end px-6 py-4">
                    <p className="font-semibold text-2xl leading-7 text-white">{PlaceName}</p>
                    <p className="font-normal leading-4 text-[14px] text-white">{Desc}</p>
                    <button className="mt-4 rounded-lg bg-BgOwnBlue text-white py-2 px-4 hover:bg-white hover:text-BgOwnBlue border border-transparent transition duration-300 ease-in-out transform hover:scale-105">
                        {BtnTit}
                    </button>
                </div>
            </div>
        </div>
    );
}
