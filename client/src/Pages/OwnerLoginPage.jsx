import { useState } from "react";
import { Link } from "react-router-dom";
export default function OwnerLoginPage(){
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email,setemail] = useState('');
    const [dob , setDob] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    return(
        <div className=" w-screen h-screen  justify-center">
                <div className=" mt-14 ml-20 text-black text-3xl text-center justify-center font-bold">
                    Owner Login
                </div>
            <form className=" w-[100%] flex mt-12 ml-30 gap-x-32 justify-center">
                <div className=" w-[30%] flex flex-col ">
                    <input 
                    value={firstName}
                    onChange={ev => setFirstName(ev.target.value)}
                    className="block w-full rounded-sm mt-12 p-2 border border-black" type="text" placeholder="First Name" />
                    <input 
                    value={email}
                    onChange={ev=>setemail(ev.target.value)}
                    type="email" placeholder="your@email" className="block w-full rounded-sm mt-12 p-2 border border-black"  />
                    <input 
                    value={password}
                    onChange={ev=>setPassword(ev.target.value)}
                    type="password" placeholder="Password" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                </div>
                <div  className=" w-[30%] flex flex-col">
                    <input type="text" 
                    value={lastName}
                    onChange={ev=>setLastName(ev.target.value)}
                    placeholder="Last Name" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                    <input
                    value={dob}
                    onChange={ev=>setDob(ev.target.value)}
                    type="date" placeholder="Date of Birth" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                    <input 
                    value={confPassword}
                    onChange={ev=>setConfPassword(ev.target.value)}
                    type="password" placeholder="Confirm Password" className="block w-full rounded-sm mt-12 p-2 border border-black" />
                </div>
                </form>
                <Link to={'/accountPage'}>
                <button className=" w-[30%] bg-BgOwnBlue ml-[35%] mt-8 font-bold ">Login</button>
                </Link>
                <div className=" w-full flex mt-10 items-center justify-center ">
                <div className="  ml-8  text-lg underline">
                    Already Have An Account?
                </div>
                <Link to={'/OwnerregisterPage'} className=" w-1   bg-BgOwnBlue text-lg rounded-lg border">SignUp</Link>
                </div>
                <div className=" flex gap-x-14 ml-30 mt-5 justify-center">
                    <button className=" bg-OnerBtn w-[25%] text-white p-2 ">Log In with Facbook</button>
                    <div>

                    </div>
                    <button className=" bg-OnerBtn w-[25%] text-white p-2">Log In With Google</button>
                </div>
        </div>
    );
}