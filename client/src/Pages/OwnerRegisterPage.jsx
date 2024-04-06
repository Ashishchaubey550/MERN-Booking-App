// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from 'axios';

// export default function OwnerRegisterPage() {

//     const [formData, setFormData] = useState({});
//     // const [error,setError] = useState(null);
//     // const [loading, setLoading] = useState(null);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//         console.log(formData)
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // setLoading(true);
//         // Perform form validation and submit data to the backend
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//          // Submit data to the backend
//          try {
//             const response = await axios.post('/api/auth/signup', formData);
//             console.log(response.data);
//             alert("Signup successful!");
//         } catch (error) {
//             console.error(error);
//             alert("Signup failed. Please try again.");
//         }
//         // const data = await response.json();
//         // if(data.success === false){
//         //     setError(data.message);
//         //     setLoading(false);
//         //     return;
//         // }
//         // setLoading(false);
//         console.log(formData);
//     };
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="w-full h-screen overflow-x-hidden flex items-center justify-center"
//         >
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-200 to-blue-100"/>
//             <motion.div
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-white text-center mb-12"
//             >
//             </motion.div>
//             <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="w-full bg-white shadow-lg rounded-lg p-8 flex flex-col items-center justify-center relative"
//             >
//                 <div className="text-black text-3xl md:text-4xl font-bold mb-8">Owner Sign Up</div>
//                 <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-2/4 flex flex-col space-y-4 items-center">
//                     <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 w-full">
//                         <input
//                             name="firstname"
//                             value={formData.firstname}
//                             // id="firstName"
//                             onChange={handleChange}
//                             className="block w-full md:w-2/5 rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
//                             type="text"
//                             placeholder="First Name"
//                             required
//                         />
//                         <input
//                             value={formData.lastname}
//                             name="lastname"
//                             onChange={handleChange}
//                             className="block w-full md:w-2/5 rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
//                             type="text"
//                             placeholder="Last Name"
//                             required
//                         />
//                     </div>
//                     <input
//                         value={formData.email}
//                         name="email"
//                         onChange={handleChange}
//                         type="email"
//                         placeholder="Your Email"
//                         className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                     <input
//                         value={formData.dob}
//                         name="dob"
//                         onChange={handleChange}
//                         type="date"
//                         placeholder="Date of Birth"
//                         className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                     <input
//                         value={formData.password}
//                         name="password"
//                         onChange={handleChange}
//                         type="password"
//                         placeholder="Password"
//                         className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                     <input
//                         value={formData.confPassword}
//                         name="confPassword"
//                         onChange={handleChange}
//                         type="password"
//                         placeholder="Confirm Password"
//                         className="block w-full rounded-sm p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                 </form>
//                 {/* <div className="flex items-center space-x-2 mt-4">
//                     <input type="checkbox" className="h-5 w-5 text-blue-500" />
//                     <label htmlFor="remember" className="text-sm text-gray-700">Remember Me</label>
//                 </div>
//                 <div className="flex items-center space-x-2 mt-2">
//                     <input type="checkbox" className="h-5 w-5 text-blue-500" />
//                     <label htmlFor="terms" className="text-sm text-gray-700">I agree to all Terms and Privacy Policy</label>
//                 </div> */}
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-full md:w-2/4 py-3 rounded-md mt-6 transition duration-300 ease-in-out transform hover:scale-105" >
//                 Sign Up
//                 </button>
//                 {/* <div className="flex justify-center space-x-4 mt-4">
//                     <button className="bg-blue-900 text-white py-3 px-6 rounded-md">Sign In with Facebook</button>
//                     <button className="bg-red-600 text-white py-3 px-6 rounded-md">Sign In with Google</button>
//                 </div>
//                 <div className="flex justify-center items-center mt-4">
//                     <div className="text-lg text-gray-700">Already Have An Account?</div>
//                     <Link to="/OwnerLoginPage" className="bg-blue-500 text-lg text-white py-2 px-4 ml-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">Login</Link>
//                 </div> */}
//             </motion.div>
//         </motion.div>
//     );
// }
///////////////////////////////////////////////////////////////                        

import React, {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function OwnerRegisterPage() {
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        dob:'',
        password:'',
        confirmPassword:''
    });
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);
        // Perform form validation and submit data to the backend
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
         // Submit data to the backend
         try {
            const response = await axios.post('/api/auth/signup', formData);
            console.log(response.data);
            alert("Signup successful!");
        } catch (error) {
            console.error(error);
            // alert("Signup failed. Please try again.");
            alert("User already exists");
        }
        // const data = await response.json();
        // if(data.success === false){
        //     setError(data.message);
        //     setLoading(false);
        //     return;
        // }
        // setLoading(false);
        console.log(formData);
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-32">
        <div className="mb-4">
            <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
            <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
        </div>
        <button disabled={loading} type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
            {loading? 'Loading...' : 'Sign Up'}
        </button>
        <div className="flex justify-center items-center mt-4">
                    <div className="text-lg text-gray-700">Already Have An Account?</div>
                   <Link to="/OwnerLoginPage" className="text-blue-500 text-lg  py-2 px-4 ml-4 rounded-md hover:text-blue-700 transition duration-300 ease-in-out">Login</Link>
                 </div>
    </form>
    );
}

export default OwnerRegisterPage
