import MenStories from "../assets/MenStories.png";
import { FiStar, FiHeart } from 'react-icons/fi';
export default function OurStories() {
    const gradientStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", 
        width: "83%", 
        height: "100%", 
        background: "radial-gradient(ellipse at 50% 50%, #4AA5D2 50%, rgba(108, 179, 215, 0) 100%)",
        zIndex: -1,
        clipPath: "circle(50% at 50% 50%)"
    };

    return (
        <div className="flex w-full min-h-[650px] justify-center items-center bg-explorebg">
            <div className="w-full md:w-[630px] h-[500px] relative">
                <div className="w-full md:w-[600px] text-center h-[500px] mx-auto relative">
                    <div style={gradientStyle}>
                    </div>
                    <img src={MenStories} alt="Menstories" className="absolute inset-0 w-full h-[90%] object-cover rounded-b-full mt-12" style={{ zIndex: 1 }} />
                    <div className="absolute top-[40%] left-[4%] flex items-center justify-center w-[120px] h-[186px] rounded-xl bg-white bg-opacity-90 z-10">
                        <div className=" justify-center items-center text-center">
                            
                        </div>
                    <div className=" gap-2 flex flex-col">
                    <p className=" w-[72px] font-semibold text-3xl h-[26px] text-center text-BgOwnBlue text-opacity-100">600%</p>
                    <p className="w-[96px] text-center font-normal text-lg h-[26px]">Destinations</p>
                    </div>
                    </div>
                    <div className="absolute mt-[400px] ml-[420px] flex items-center justify-center w-[146px] h-[78px] rounded-lg bg-white z-10 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className=" mt-[-25px] ml-[-30px] w-6 h-6 text-BgOwnBlue">
                        <path fillRule="blue" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                    </svg>
                    <div className=" gap-2 flex flex-col">
                    <p className=" w-[79px] font-semibold text-3xl h-[26px] text-center">5000+</p>
                    <p className="">Customars</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-xl w-full md:w-[461px] h-[440px] items-start gap-2">
                <p className="w-[173px] h-[18px] font-semibold text-lg leading-4 p-3 text-left text-BgOwnBlue">Our Experience</p>
                <p className="w-[400px] h-[114px] p-2 text-left font-semibold text-5xl left-14 text-gray-900 ">Our Stories Have Adventures</p>
                <p className="w-[400.58px] p-3 h-[90px] text-start font-normal text-sm leading-6">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
                <div className="flex justify-center items-center my-10 w-full">
                    <div className="w-[125px] rounded-3xl flex flex-col items-center justify-center h-[130px] bg-white bg-opacity-70 m-auto">
                        <p className="font-bold text-3xl">16K+</p>
                        <p className="font-normal text-center text-lg">Success Journey</p>
                    </div>
                    <div className="w-[125px] rounded-3xl  flex flex-col items-center justify-center h-[130px] bg-white bg-opacity-70 m-auto">
                        <p className="font-bold text-3xl">17+</p>
                        <p className="font-normal text-lg text-center">Awards Winning</p>
                    </div>
                    <div className="w-[125px] rounded-3xl flex flex-col items-center justify-center h-[130px] bg-white bg-opacity-70 m-auto">
                        <p className="font-bold text-3xl">10+</p>
                        <p className="font-normal text-center text-lg">Years Of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
