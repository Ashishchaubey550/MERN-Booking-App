export default function TestimoCard({ imgW, imgH, imgSrc, DivH, DivW }) {
    return (
    <>
        <div className={`flex flex-col w-[${DivW}] h-[${DivH}] justify-center items-center`}>
        <img src={imgSrc} alt="blueSuit" className={`w-[${imgW}] rounded-2xl h-[${imgH}]`} />
        </div>
        {data.map((d, index) => (
        <div key={index} className="w-full md:w-[301px] h-[177px] mx-auto mb-8 md:mb-0">
            <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center w-full md:w-[256px] h-[64px]">
                <p className="w-full h-[32px] text-center font-semibold text-3xl leading-8">{d.name}</p>
                <p className="w-full h-[18px] text-center font-semibold text-lg leading-6 text-BgOwnBlue">{d.post}</p>
            </div>
            <h1 className="w-full h-[50px] text-center text-gray-500 text-opacity-80 font-normal text-lg leading-6">{d.info}</h1>
            </div>
            <div className="w-full h-[27px] flex justify-center items-center text-center mt-2">
            <p className="w-[18px] h-[14px] font-normal text-sm leading-[15px] text-gray-400 text-opacity-90">{d.Rate}</p>
            <span className="w-[152px] h-[27px]">{d.rating}</span>
            </div>
        </div>
        ))}
    </>
    );
}

const data = [
    {
        name:"Ashish",
        post:"Internal Creative Officer",
        info:"Our vacation rental surpassed all expectations. Pure bliss!",
        Rate:"5.0",
        rating:"⭐⭐⭐⭐⭐"
    },
]
// w-241px
 // h-355px