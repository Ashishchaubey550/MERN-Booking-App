import bluesuit from "../assets/bluesuit.jpeg";
import TestimoCard from "./TestimoCard";
import GreyMen from "../assets/GreyMen.jpeg";
import GreySuit from "../assets/GreySuit.jpeg";

export default function Testimonial() {
return (
    <div className="flex flex-col bg-explorebg justify-center items-center w-full min-h-[1100px]">
    <div className="justify-center items-center text-center w-full md:w-[572px]">
        <p className="font-semibold text-3xl leading-8 p-2 text-BgOwnBlue m-auto text-center md:h-[33px]">
        Testimonial
        </p>
        <p className="text-gray-900 text-opacity-80 text-[65px] leading-[72px] p-5 m-auto text-center font-semibold md:w-[572px]">
        What They Say About Us ?
        </p>
    </div>
    <div className="flex flex-wrap justify-center items-center w-full md:w-[80%]">
        <div className="w-full md:w-[301px] h-[566px] md:mr-4 mb-[11%]">
        <TestimoCard
            imgSrc={GreyMen}
            imgH="355px"
            DivH="430px"
            DivW="286px"
            imgW="241px"
        />
        </div>
        <div className="w-full md:w-[418px] h-[776px] md:mr-4 mb-4 md:mb-0">
        <TestimoCard
            imgSrc={GreySuit}
            imgH="546px"
            imgW="418px"
            DivH="668px"
            DivW="1002px"
        />
        </div>
        <div className="w-full md:w-[301px] h-[566px] mb-28">
        <TestimoCard
            imgSrc={bluesuit}
            imgH="355px"
            imgW="241px"
            DivH="430px"
            DivW="286px"
        />
        </div>
    </div>
    </div>
);
}
