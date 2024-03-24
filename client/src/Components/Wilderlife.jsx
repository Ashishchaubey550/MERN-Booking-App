import Ballon from "../assets/Ballon.jpg";
import Green from "../assets/Green.png";
import Skin from "../assets/Skin.png";
import Background from "../assets/Background.png";
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

export default function Wilderlife() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="relative w-full h-[590px] flex items-center justify-center">
            <img src={Ballon} alt="Hot Air Balloon" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-custom backdrop-blur-sm">
                <div className="flex justify-evenly gap-20 items-center m-auto relative"> {/* Added relative positioning */}
                    <div className="relative"> {/* Changed to relative positioning */}
                        <img src={Skin} alt="" className=" rotate-5 absolute w-[405px] h-[429px] z-0" style={{ top:'-10px' }} /> {/* Increased z-index */}
                        <img src={Green} alt="" className="w-[405px] h-[429px] mr-5 z-0" style={{ transform: 'rotate(-10deg)' }} /> {/* Increased z-index */}
                        <img src={Background} alt="" className="absolute w-[405px] h-[429px] z-10" style={{ top: '-5px', left: '-40px' }} /> {/* Decreased z-index and adjusted position */}
                    </div>
                    <div className="">
                        <div className="w-[130px] h-[30px] rounded-[30px] bg-white">
                            <p className="font-extrabold text-xs left-4 text-center text-BgOwnBlue p-2">Trending Now</p>
                        </div>
                        <p className="font-bold text-[33px] leading-10 text-white shadow-sm p-1">Wilderlife With LifeVista Vacation</p>
                        <div className="flex gap-x-2">
                            <p className="text-white font-semibold text-[14px] leading-4 p-1">Alaska, USA</p>
                            <div className="flex bg-gray-200 border"></div>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p className="font-bold text-[14px] leading-4 text-center p-1 text-white">4.9</p>
                            <p className="font-semibold text-[14px] leading-4 text-center p-1 text-white">(300 reviews)</p>
                        </div>
                        <p className="font-semibold leading-[25px] mt-6 text-[16px] left-[25px] w-[505px] p-1 text-white h-[73px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="flex m-auto items-center gap-x-4">
                            <button className="p-1 bg-white rounded-[40px] w-[200px] h-[50px] mt-11">
                                <h1 className="font-extrabold text-[16px] text-center leading-[22px] text-BgOwnBlue p-1">Check Now</h1>
                            </button>
                            <div className="h-[30px] mt-10 bg-gray-200 border"></div>
                            <button className="w-[50px] h-[50px] mt-10 border border-white bg-gray-600 rounded-full opacity-30" onClick={handleLike}>
                                <FaHeart className={`m-auto text-white w-[18px] h-[16px] ${isLiked ? 'text-red-500' : ''}`} />
                            </button>
                            <button className="w-[50px] h-[50px] mt-10 border border-white bg-gray-600 rounded-full opacity-30" onClick={handleLike}>
                                <FaHeart className={`m-auto text-white w-[18px] h-[16px] ${isLiked ? 'text-red-500' : ''}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
