import HotDealCard from "./HotDealCard";
import data from "../Dummy Data/HotDealCard.json";

export default function HotDeal() {
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    // Chunking the data array into arrays of size 4
    const chunkedData = chunkArray(data, 4);

    return (
        <div className="w-full h-auto bg-explorebg text-left">
            <div className="w-[1224px] m-auto ">
                <p className="font-bold text-3xl leading-10 text-black p-2">Hot Deals & Specials at LifeVista Vacation</p>
                <div className="flex">
                    <p className="font-semibold text-xl leading-6 text-black p-2">Select Deals & Specials in:</p>
                    <button className="h-9 mt-1 border border-blue-500 bg-white rounded-md text-blue-500 p-2"><p className="font-normal text-sm leading-4 text-blue-500">All Cities / Communities</p></button>
                </div>
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
                    {/* Mapping through chunkedData to display cards */}
                    {chunkedData.map((chunk, index) => (
                        <div key={index}>
                            {chunk.map((d, i) => (
                                <HotDealCard
                                    key={i}
                                    ImgURL={d.ImgURL}
                                    offer={d.offer}
                                    Price={d.Price}
                                    Validity={d.Validity}
                                    Desc={d.Desc}
                                    Beds={d.Beds}
                                    Bath={d.Bath}
                                    Sleep={d.Sleep}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
