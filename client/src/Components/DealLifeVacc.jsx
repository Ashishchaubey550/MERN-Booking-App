import MountainVacc from "../assets/MountainVacc.png"
// import { FaTaxi , FeBus } from 'react-icons/fa';
import { FaBus , FaSearch , FaTaxi , FaSuitcaseRolling , FaMapMarkerAlt } from 'react-icons/fa'; 
export default function DealLifeVacc(){
    return(
        <div className=" flex flex-col w-full h-[695px] bg-explorebg   items-center" >
                <div className=" relative">
                <img src={MountainVacc} alt="" className=" w-[1170px] m-auto h-[500px]"  />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 flex items-center justify-center">
                </div>
                </div>
                <div className=" flex absolute w-[1110px] h-[275px] mt-[27.5%]   items-center justify-evenly bg-exploreCont rounded-md shadow-lg" style={{zIndex:2}}>
                <div className=" flex flex-col justify-between w-[464px] h-[166px] p-2  text-left">
                    <p className=" font-bold text-5xl text-GetText leading-[64px] ">LifeVista Vacation</p>
                    <p className=" font-semibold text-[16px] leading-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className=" flex flex-col w-[430px] h-[140px]  gap-2">
                    <div className=" items-center bg-white shadow-md  justify-center h-[40px] w-[212px] rounded-[3px] gap-10">
                        <div className="flex text-center justify-center p-3 items-center gap-1">
                            <FaBus className=" text-purple-500 w-[12px] h-[16px]"/>
                            <p className=" font-bold text-sm leading-4 text-purple-500">Public Transportations</p>
                        </div>
                    </div>
                    <div className=" flex   rounded-sm items-center justify-between   w-[430px] h-[40px]">
                        <div className=" bg-white shadow-md  w-[196px] h-[40px] justify-center items-center ">
                            <div className="flex justify-center items-center p-3 gap-1">
                            <FaSearch className="w-[17px] h-[16px]  text-teal-500" /> 
                            <p className=" font-bold text-sm leading-4 text-teal-500">Nature & Adventure</p>
                            </div>
                        </div>
                        <div className=" bg-white shadow-md  w-[224px] h-[40px]">
                        <div className="flex justify-center items-center p-3 gap-1">
                            <FaTaxi className="w-[17px] h-[16px]  text-yellow-500" /> 
                            <p className=" font-bold text-sm leading-4 text-yellow-500">Private Transportations</p>
                            </div>
                        </div>
                    </div>
                    <div className=" gap-3 flex">
                        <div className=" bg-white shadow-md w-[160px] h-[40px] rounded-sm  justify-center items-center">
                        <div className="flex justify-center items-center p-3 gap-1">
                            <FaSuitcaseRolling className="w-[16px] h-[15px]  text-red-500" /> 
                            <p className=" font-bold text-sm leading-4 text-red-500">Business Tours</p>
                        </div>
                        </div>
                        <div className=" bg-white shadow-md w-[160px] h-[40px] rounded-sm  justify-center items-center">
                        <div className="flex justify-center items-center p-3 gap-1">
                            <FaMapMarkerAlt className="w-[16px] h-[15px]  text-blue-500" /> 
                            <p className=" font-bold text-sm leading-4 text-blue-500">Local Visit</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}