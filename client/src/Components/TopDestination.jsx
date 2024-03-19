import Viatnam from "../assets/Viatnam.jpeg"
import Viatnam3 from "../assets/Viatnam3.jpeg"
import Viatnam4 from "../assets/Viatnam4.jpeg"
import Viatnam5 from "../assets/Viatnam5.jpeg"
import Viatnam6 from "../assets/Viatnam6.jpeg"
import ViatnamWaterFall from "../assets/ViatnamWaterFall.jpeg"

export default function TopDestination(){
    return(
        <div className="w-full  h-[750px] mt-[60px] bg-exploreCont">
            <div className="w-full  h-[168px] mt-[3px]  flex flex-col justify-center items-center text-center space-y-2">
                <div className=" w-full justify-center items-center h-[70px] mt-[3%] text-BgOwnBlue font-semibold text-6xl text-center">
                Top Destinations
                </div>
                <div className="w-full  h-[17px] mt-[24px] text-center items-center justify-center">
                Sost Brilliant reasons Entrada should be your one-stop-shop!
                </div>
                <div className="w-full  h-[35px] mt-[170px] space-x-3">
                    <button className="w-[80px] h-[25px] bg-BgOwnBlue p-auto border-s rounded-xl gap-2 text-center">London</button>
                    <button className="w-[80px] h-[25px] bg-BgOwnBlue p-auto border-s rounded-xl gap-2 text-center">Bangkok</button>
                    <button className="w-[80px] h-[25px] bg-BgOwnBlue p-auto border-s rounded-xl gap-2 text-center">England</button>
                    <button className="w-[80px] h-[25px] bg-BgOwnBlue p-auto border-s rounded-xl gap-2 text-center">Singapore</button>
                    <button className="w-[80px] h-[25px] bg-BgOwnBlue p-auto border-s rounded-xl gap-2 text-center">Italy</button>
                </div>
            </div>
            <div className=" items-center justify-center text-center ml-[-100px]  h-full w-full">
            <div className="w-[350px]  items-center justify-center h-[511px] mt-[50px] ml-[450px]">
                <p className=" absolute font-semibold text-white w-[85px] h-[21px] mt-[400px] ml-[200px]">Vientam</p>
                <p className=" bg-BgOwnBlue absolute w-[30px] mt-[20px] h-[25px] ml-[220px] rounded-xl text-center">3.5</p>
                <img src={ViatnamWaterFall} alt="image" className=" justify-center items-center lazy rounded-2xl ml-[200px]" />
            </div>
            <div className="w-full justify-center h-[300px] mt-[-510px] ml-[810px]">
                <p className=" absolute font-semibold text-white w-[85px] h-[21px] mt-[170px] ml-[230px]">Vientam</p>
                <p className=" bg-BgOwnBlue absolute w-[30px] mt-[20px] h-[25px] ml-[230px] rounded-xl text-center">3.5</p>
                <img src={Viatnam} alt="image" className=" lazy w-[300px] h-[200px] ml-[220px] rounded-3xl" />
            </div> 
            <div className=" flex flex-col justify-center items-center ">
            <div className="w-[118px] h-[400px] mt-[36px] ml-[810px]">
                <p className=" bg-BgOwnBlue absolute w-[30px]  mt-[-100px] h-[25px] ml-[-70px] rounded-xl text-center">3.5</p>
                <p className=" absolute font-semibold text-white w-[85px] h-[21px] mt-[60px] ml-[-80px]">Vientam</p>
                <img src={Viatnam6} alt="image" className=" lazy mt-[-115px] ml-[-80px] h-[210px] rounded-2xl" />
            </div> 
            <div className="w-[182px] h-3 mt-[-406px] ml-[870px]">
                <p className=" bg-BgOwnBlue absolute w-[30px] mt-[-100px] h-[25px] ml-[60px] rounded-xl text-center">3.5</p>
                <p className=" absolute font-semibold text-white w-[85px] h-[21px] mt-[70px] ml-[61px]">Vientam</p>
                <img src={Viatnam5} alt="image" className=" lazy ml-[50px] mt-[-110px] w-[300px] h-[210px] rounded-2xl" />
            </div>
            </div>
            <div className=" flex flex-col justify-evenly ml-[40px]">
            <div className="w-full  h-[130px] ml-[40px]">
                <p className=" bg-BgOwnBlue absolute w-[30px] mt-[-320px] h-[25px] ml-[320px] rounded-xl text-center">3.5</p>
                <p className=" absolute font-semibold text-white w-[85px] h-[21px] mt-[-160px] ml-[320px]">Vientam</p>
                <img src={Viatnam4} alt="image" className="w-[250px] h-[217px] mt-[-340px] ml-[310px] lazy rounded-2xl" />
            </div>
            <div className="w-full h-[50px]  ml-[40px]">
                <p className=" bg-BgOwnBlue absolute w-[30px] mt-[-220px] h-[25px] ml-[320px] rounded-xl text-center">3.5</p>
                <p className=" absolute font-semibold text-white w-[85px] h-[21px] mt-[-65px] ml-[310px]">Vientam</p>
                <img src={Viatnam3} alt="image" className=" lazy w-[250px] mt-[-240px] ml-[310px] h-[200px] rounded-2xl" />
            </div>
            </div>
            </div>
        </div>
    );
}