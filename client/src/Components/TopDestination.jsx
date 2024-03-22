import Viatnam from "../assets/Viatnam.jpeg"
import Viatnam3 from "../assets/Viatnam3.jpeg"
import Viatnam4 from "../assets/Viatnam4.jpeg"
import Viatnam5 from "../assets/Viatnam5.jpeg"
import Viatnam6 from "../assets/Viatnam6.jpeg"
import ViatnamWaterFall from "../assets/ViatnamWaterFall.jpeg"

export default function TopDestination(){
    return(
    <div className="w-full h-[850px] bg-bgCatorgies flex flex-col justify-center m-auto items-center">
        <div className=" m-auto justify-center text-center items-center  w-[551px] h-[168px]">
            <p className=" font-semibold w-[479px] m-auto p-3 text-6xl leading-[69px] text-BgOwnBlue text-center h-[70px]">Top Destinations</p>
            <p className=" m-auto p-6 font-normal leading-4 text-[16px] w-[483px] h-[17px] text-gray-400">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
            <div className="w-[551px] h-[35px] m-auto justify-between items-center ">
                <button className="w-[100px] m-1  border-[2px] rounded-[31px] border-BgOwnBlue h-[35px]"><p className=" text-center leading-[14px] font-normal p-0 m-auto text-BgOwnBlue w-[63px] h-[15px] " >London</p></button>
                <button className="w-[104px] m-1  border-[2px] rounded-[31px] border-BgOwnBlue h-[35px]"><p className=" text-center leading-[14px] font-normal p-0 m-auto text-BgOwnBlue w-[63px] h-[15px] ">Bangkok</p></button>
                <button className="w-[101px] m-1 border-[2px] rounded-[31px] border-BgOwnBlue h-[35px]"><p className=" text-center leading-[14px] font-normal p-0 m-auto text-BgOwnBlue w-[60px] h-[15px] ">England</p></button>
                <button className=" w-[117px] m-1  border-[1.05px] rounded-[31px] border-BgOwnBlue h-[35px]"><p className=" text-center leading-[14px] font-normal p-0 m-auto text-BgOwnBlue w-[63px] h-[15px] ">Singapore</p></button>
                <button className="w-[72px] rounded-3xl border-[1.05px] border-BgOwnBlue m-1
                h-[35px]"><p className=" text-BgOwnBlue text-center leading-[14px]  text-sm font-normal p-0 m-auto w-[31px] h-[15px]">Italy</p></button>
            </div>
        </div>
        <div className="w-full flex mt-14 h-[550px]  text-center gap-6  justify-center items-center m-auto">
            <div className=" flex  gap-6 ">
                <div className=" flex  flex-col m-auto gap-6 justify-center items-center">
                    <div className=" relative m-auto items-center justify-center">
                        <div className=" absolute bg-BgOwnBlue rounded-xl mt-3 ml-3 text-center w-[44px] h-[25px] inset-0 flex items-center justify-center">
                        <p className="  absolute text-white w-[23px] h-[15px] m-auto text-sm font-medium leading-3">3.5</p>
                        </div>
                        <p className=" absolute w-[85px] h-[21px] m-auto text-center justify-center mt-[210px] ml-5 text-white font-semibold text-xl leading-5 ">Vientam</p>
                        <p className=" absolute w-[56px] h-[15px] m-auto text-center justify-center mt-[235px] ml-5 text-white leading-3 text-sm font-normal">Worefall</p>
                        <img src={Viatnam6} alt="" className="w-[283px] rounded-3xl h-[262px]" />
                    </div>
                    <div className=" relative m-auto items-center justify-center">
                        <div className=" absolute bg-BgOwnBlue rounded-xl mt-3 ml-3 text-center w-[44px] h-[25px] inset-0 flex items-center justify-center">
                        <p className="  absolute text-white w-[23px] h-[15px] m-auto text-sm font-medium leading-3">3.5</p>
                        </div>
                        <p className=" absolute w-[85px] h-[21px] m-auto text-center justify-center mt-[210px] ml-5 text-white font-semibold text-xl leading-5 ">Vientam</p>
                        <p className=" absolute w-[56px] h-[15px] m-auto text-center justify-center mt-[235px] ml-5 text-white leading-3 text-sm font-normal">Worefall</p>
                        <img src={Viatnam5} alt="" className=" rounded-3xl w-[282px] h-[262px]" />
                        
                    </div>
                </div>
                <div className="relative m-auto items-center justify-center">
                    <div className=" absolute bg-BgOwnBlue rounded-xl mt-3 ml-3 text-center w-[44px] h-[25px] inset-0 flex items-center justify-center">
                        <p className="  absolute text-white w-[23px] h-[15px] m-auto text-sm font-medium leading-3">3.5</p>
                    </div>
                    <p className=" absolute w-[85px] h-[21px] m-auto text-center justify-center mt-[490px] ml-5 text-white font-semibold text-xl leading-5">Vientam</p>
                    <p className=" absolute w-[56px] h-[15px] m-auto text-center justify-center mt-[515px] ml-5 text-white leading-3 text-sm font-normal ">Worefall</p>
                    <img src={ViatnamWaterFall} alt="" className="rounded-3xl w-[387px] h-[549px]" />
                </div>

            </div>
            <div className="  gap-3  flex flex-col ">
                <div className=" relative justify-center m-auto gap-6 items-center">
                    <div className=" absolute bg-BgOwnBlue rounded-xl mt-3 ml-3 text-center w-[44px] h-[25px] inset-0 flex items-center justify-center">
                        <p className="  absolute text-white w-[23px] h-[15px] m-auto text-sm font-medium leading-3">3.5</p>
                    </div>
                    <p className=" absolute w-[85px] h-[21px] m-auto text-center justify-center mt-[190px] ml-5 text-white font-semibold text-xl leading-5">Vientam</p>
                    <p className=" absolute w-[56px] h-[15px] m-auto text-center justify-center mt-[215px] ml-5 text-white leading-3 text-sm font-normal ">Worefall</p>
                    <img src={Viatnam} alt="" className="w-[492px] h-[262px] rounded-3xl" />
                </div>
                <div className=" flex justify-center gap-6 items-center m-auto">
                    <div className="  relative">
                        <div className=" absolute bg-BgOwnBlue rounded-xl mt-3 ml-3 text-center w-[44px] h-[25px] inset-0 flex items-center justify-center">
                        <p className="  absolute text-white w-[23px] h-[15px] m-auto text-sm font-medium leading-3">3.5</p>
                        </div>
                        <p className=" absolute w-[85px] h-[21px] m-auto text-center justify-center mt-[230px] ml-5 text-white font-semibold text-xl leading-5">Vientam</p>
                        <p className=" absolute w-[56px] h-[15px] m-auto text-center justify-center mt-[250px] ml-5 text-white leading-3 text-sm font-normal ">Worefall</p>
                        <img src={Viatnam3} alt="" className="w-[178px] rounded-3xl h-[275px]" />
                    </div>
                    <div className="  relative">
                        <div className=" absolute bg-BgOwnBlue rounded-xl mt-3 ml-3 text-center w-[44px] h-[25px] inset-0 flex items-center justify-center">
                        <p className="  absolute text-white w-[23px] h-[15px] m-auto text-sm font-medium leading-3">3.5</p>
                        </div>
                        <p className=" absolute w-[85px] h-[21px] m-auto text-center justify-center mt-[230px] ml-5 text-white font-semibold text-xl leading-5">Vientam</p>
                        <p className=" absolute w-[56px] h-[15px] m-auto text-center justify-center mt-[255px] ml-5 text-white leading-3 text-sm font-normal ">Worefall</p>    
                        <img src={Viatnam4} alt="" className=" rounded-3xl w-[282px] h-[275px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}