// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function OwnerLoginPage() {
//     const [firstName , setFirstName] = useState('');
//     const [lastName , setLastName] = useState('');
//     const [email,setemail] = useState('');
//     const [dob , setDob] = useState('');
//     const [password , setPassword] = useState('');
//     const [confPassword , setConfPassword] = useState('');

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//             <div className="  text-black text-3xl font-bold mb-10 animate__animated animate__bounceInDown">
//                 Owner Login
//             </div>
//             <form className="flex gap-8 animate__animated animate__fadeIn">
//                 <div className="flex flex-col">
//                     <input 
//                         value={firstName}
//                         onChange={ev => setFirstName(ev.target.value)}
//                         className="input-field" 
//                         type="text" 
//                         placeholder="First Name" 
//                     />
//                     <input 
//                         value={email}
//                         onChange={ev=>setemail(ev.target.value)}
//                         type="email" 
//                         placeholder="Your Email" 
//                         className="input-field"
//                     />
//                     <input 
//                         value={password}
//                         onChange={ev=>setPassword(ev.target.value)}
//                         type="password" 
//                         placeholder="Password" 
//                         className="input-field"
//                     />
//                 </div>
//                 <div className="flex flex-col">
//                     <input 
//                         value={lastName}
//                         onChange={ev=>setLastName(ev.target.value)}
//                         type="text" 
//                         placeholder="Last Name" 
//                         className="input-field" 
//                     />
//                     <input 
//                         value={dob}
//                         onChange={ev=>setDob(ev.target.value)}
//                         type="date" 
//                         placeholder="Date of Birth" 
//                         className="input-field" 
//                     />
//                     <input 
//                         value={confPassword}
//                         onChange={ev=>setConfPassword(ev.target.value)}
//                         type="password" 
//                         placeholder="Confirm Password" 
//                         className="input-field"
//                     />
//                 </div>
//             </form>
//             <Link to={'/accountPage'}>
//                 <button className="btn">Login</button>
//             </Link>
//             <div className="mt-5 text-lg underline">
//                 Already Have An Account? <Link to={'/OwnerregisterPage'}>Sign Up</Link>
//             </div>
//             <div className="flex gap-8 mt-5">
//                 <button className="social-btn">Log In with Facebook</button>
//                 <button className="social-btn">Log In With Google</button>
//             </div>
//         </div>
//     );
// }
//////////////////////////////////////////////////
import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const OwnerLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
//   const history = useHistory();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password,
      });
      // Assuming the response contains user data
      console.log(response.data);
      // Redirect or do something else on successful login
    //   history.push('/accountPage');
    navigate('/accountPage');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-32">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
      </form>
    </div>
  );
};

export default OwnerLoginPage;