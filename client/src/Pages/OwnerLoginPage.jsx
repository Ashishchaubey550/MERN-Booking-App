import { useState } from "react";
import { Link } from "react-router-dom";

export default function OwnerLoginPage() {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email,setemail] = useState('');
    const [dob , setDob] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="  text-black text-3xl font-bold mb-10 animate__animated animate__bounceInDown">
                Owner Login
            </div>
            <form className="flex gap-8 animate__animated animate__fadeIn">
                <div className="flex flex-col">
                    <input 
                        value={firstName}
                        onChange={ev => setFirstName(ev.target.value)}
                        className="input-field" 
                        type="text" 
                        placeholder="First Name" 
                    />
                    <input 
                        value={email}
                        onChange={ev=>setemail(ev.target.value)}
                        type="email" 
                        placeholder="Your Email" 
                        className="input-field"
                    />
                    <input 
                        value={password}
                        onChange={ev=>setPassword(ev.target.value)}
                        type="password" 
                        placeholder="Password" 
                        className="input-field"
                    />
                </div>
                <div className="flex flex-col">
                    <input 
                        value={lastName}
                        onChange={ev=>setLastName(ev.target.value)}
                        type="text" 
                        placeholder="Last Name" 
                        className="input-field" 
                    />
                    <input 
                        value={dob}
                        onChange={ev=>setDob(ev.target.value)}
                        type="date" 
                        placeholder="Date of Birth" 
                        className="input-field" 
                    />
                    <input 
                        value={confPassword}
                        onChange={ev=>setConfPassword(ev.target.value)}
                        type="password" 
                        placeholder="Confirm Password" 
                        className="input-field"
                    />
                </div>
            </form>
            <Link to={'/accountPage'}>
                <button className="btn">Login</button>
            </Link>
            <div className="mt-5 text-lg underline">
                Already Have An Account? <Link to={'/OwnerregisterPage'}>Sign Up</Link>
            </div>
            <div className="flex gap-8 mt-5">
                <button className="social-btn">Log In with Facebook</button>
                <button className="social-btn">Log In With Google</button>
            </div>
        </div>
    );
}
