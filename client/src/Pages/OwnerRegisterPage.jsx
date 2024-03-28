import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OwnerRegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    function handleButton(){
        alert('Sign Up Succlessfull')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-screen overflow-x-hidden flex items-center justify-center"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200 to-blue-100"/>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-center mb-12"
            >
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-white shadow-lg rounded-lg p-8 flex flex-col items-center justify-center relative"
            >
                <div className="text-black text-3xl md:text-4xl font-bold mb-8">Owner Sign Up</div>
                <form className="w-full md:w-3/4 lg:w-2/4 flex flex-col space-y-4 items-center">
                    <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 w-full">
                        <input
                            value={firstName}
                            onChange={ev => setFirstName(ev.target.value)}
                            className="block w-full md:w-2/5 rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                        <input
                            value={lastName}
                            onChange={ev => setLastName(ev.target.value)}
                            className="block w-full md:w-2/5 rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <input
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        type="email"
                        placeholder="Your Email"
                        className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <input
                        value={dob}
                        onChange={ev => setDob(ev.target.value)}
                        type="date"
                        placeholder="Date of Birth"
                        className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <input
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        type="password"
                        placeholder="Password"
                        className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <input
                        value={confPassword}
                        onChange={ev => setConfPassword(ev.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                        className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                    />
                </form>
                <div className="flex items-center space-x-2 mt-4">
                    <input type="checkbox" className="h-5 w-5 text-blue-500" />
                    <label htmlFor="remember" className="text-sm text-gray-700">Remember Me</label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <input type="checkbox" className="h-5 w-5 text-blue-500" />
                    <label htmlFor="terms" className="text-sm text-gray-700">I agree to all Terms and Privacy Policy</label>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white w-full md:w-2/4 py-3 rounded-md mt-6 transition duration-300 ease-in-out transform hover:scale-105" onClick={handleButton}>Sign Up</button>
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="bg-blue-900 text-white py-3 px-6 rounded-md">Sign In with Facebook</button>
                    <button className="bg-red-600 text-white py-3 px-6 rounded-md">Sign In with Google</button>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <div className="text-lg text-gray-700">Already Have An Account?</div>
                    <Link to="/OwnerLoginPage" className="bg-blue-500 text-lg text-white py-2 px-4 ml-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">Login</Link>
                </div>
            </motion.div>
        </motion.div>
    );
}
