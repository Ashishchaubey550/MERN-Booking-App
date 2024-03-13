import { useState } from "react";

export default function OwnerLoginPage(){
    const [firstName , setFirstName] = useState('');
    return(
        <div className=" w-[100%] h-screen bg-BgOwnBlue overflow-x-hidden  flex">
            <div className=" flex w-[50%]">
                <div className=" w-full mt-[100px] text-center  text-white text-xl">
                List Your Property with LifeVista Vacation.com
                </div>
            </div>
            <div className=" w-full bg-white">
                <div className=" mt-14 ml-20 text-black text-3xl text-center">
                    Owner SignUp
                </div>
                <div className=" w-[100%] flex mt-12 ml-32 gap-x-32">
                <div className=" w-[30%] flex flex-col ">
                    <input className="block w-full rounded-sm mt-12 p-2 border border-black" type="text" placeholder="First Name" />
                    <input type="email" placeholder="your@email" className="block w-full rounded-sm mt-12 p-2 mb-5 border border-black"  />
                    <input type="password" placeholder="Confirm Password" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                </div>
                <div  className=" w-[30%] flex flex-col">
                    <input type="text" 

                    placeholder="Last Name" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                    <input type="date" placeholder="Date of Birth" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                    <input type="password" placeholder="Password" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                </div>
                </div>
                <div className=" mt-12 ml-32 flex gap-x-2">
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                    <div className=" text-cyan-500" >Remember Me</div>
                </div>
                <div className=" mt-3 ml-32 flex gap-x-2">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </div>
                    <div className=" text-cyan-500">I agree to all Terms and Privacy Policy</div>
                </div>
                <div>
                <button className=" bg-BgOwnBlue ml-48 mt-8 w-[60%]">Sign Up</button>
                </div>
                <div className=" flex gap-x-14 ml-48 mt-5">
                    <button className=" bg-OnerBtn w-[30%] text-white p-2 ">Sign In with Facbook</button>
                    <div>

                    </div>
                    <button className=" bg-OnerBtn w-[30%] text-white p-2">Sign In With Google</button>
                </div>
                <div className=" w-full flex mt-10 items-center justify-center ">
                <div className="  ml-8  text-lg">
                    Already Have An Account?
                </div>
                <button className=" w-16  bg-BgOwnBlue text-lg rounded-lg border">Login</button>
                </div>
            </div>
        </div>
    );
}