import Mobile from "../assets/Mobile_App.jpg"; 
import SSAPP from "../assets/SSAPP.png";
import { FaApple, FaAndroid } from 'react-icons/fa'; 

export default function MobileApp() {
    return (
        <div className="w-full h-[720px] relative">
            <img src={Mobile} alt="Mobile App" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-custom backdrop-blur-sm">
                <div className="w-[1032px] h-[560px] flex items-center text-center justify-evenly">
                    <img src={SSAPP} alt="Mobile App Logo" />
                    <div className="w-[532px] text-left">
                        <p className="font-bold text-4xl leading-[46px] text-white">LifeVista Vacation Mobile App</p>
                        <p className="text-white font-extrabold text-[16px] leading-5">Available on IOS & Android</p>
                        <p className="p-3 font-semibold size-sm text-white leading-[25px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <div className="flex justify-center space-x-2">
                            <button className="bg-white rounded-[40px] w-[260px] h-[70px]">
                                <p className="font-extrabold text-[16px] p-5 text-BgOwnBlue flex items-center">
                                    <FaApple className="mr-2 w-[22px] h-[26px]" /> Download For IOS
                                </p>
                            </button>
                            <button className="bg-white rounded-[40px] w-[260px] h-[70px]">
                                <p className="font-extrabold text-[16px] p-5  text-BgOwnBlue flex items-center">
                                    <FaAndroid className="mr-2 w-[22px] h-[26px]" /> Download For Android
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
