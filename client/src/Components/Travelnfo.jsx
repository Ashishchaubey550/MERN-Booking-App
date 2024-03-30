// import { Button } from "@mui/material";

export default function Travelnfo(){
    return(
        <div className=" w-full justify-center items-center m-auto" style={{zIndex:1, position:'relative'}}>
            <div className=" w-[987px] h-[198px] justify-center items-center m-auto mt-6 p-2 text-center bg-gray-300 bg-opacity-15 rounded-2xl">                  
                <div className=" flex w-[910px] h-[128px] justify-center items-center mt-7 rounded-2xl mr-auto ml-auto mb-auto p-2  bg-white">
                    <div className=" flex flex-col w-[199px] h-[63px] justify-center items-end m-auto  text-left">
                        <div className=" flex m-auto">
                        <div className="w-[13px] mt-2 mr-1  h-[16px] "> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[13px] h-[16px] text-BgOwnBlue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        </div>
                        <p className="w-[132px] h-[30px] font-semibold text-3xl leading-8 ">Location</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[11px] h-[5px">
                            <path fillRule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <p className="w-[178px] h-[24px]  leading-6 text-sm font-normal text-center ">Where do you wanna go?</p>
                    </div>
                    <div className="w-[49] h-[50px] border-[2px]"></div>
                    <div className=" flex flex-col w-[210px] h-[61px] justify-between items-end m-auto     text-left">
                        <div className=" flex m-auto">
                        <div className="w-[15px]  h-[15px] mt-2 mr-1 text-BgOwnBlue items-center justify-center text-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w--[15px] h--[15px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        </div>
                        <p className="w-[85px] h-[29px] font-semibold text-3xl leading-8 ">Date</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[11px] h-[5px">
                            <path fillRule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <p className="w-[210px] h-[24pxpx]  leading-6 text-sm font-normal text-right ">When do you wan to go there</p>
                    </div>
                    <div className="w-[49] h-[50px] border-[2px]"></div>
                    <div className=" flex flex-col w-[156px] h-[58pxpx] justify-between items-end m-auto  text-left">
                        <div className=" flex m-auto">
                        <div className="w-[15px]  h-[15px] mt-2 mr-1 text-BgOwnBlue"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[15px] h-[15px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        </div>
                        <p className="w-[110px] h-[30px] font-semibold text-3xl leading-8 ">People</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[11px] h-[5px">
                            <path fillRule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <p className="w-[134px] h-[24px]  leading-6 text-sm font-normal text-left ">How many people?</p>
                    </div>
                    <button className="w-[143px] h-[52px] rounded-2xl bg-BgOwnBlue m-auto "><p className="w-[92px] h-[17px]  font-bold m-auto p-0 text-sm leading-4 text-white">Explore Now</p></button>
                </div>
            </div>    

            </div>
    );
}
