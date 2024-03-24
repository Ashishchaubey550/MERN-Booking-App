import React, { useEffect, useState } from 'react';
import lifevista from "../assets/lifevista.png";
import { Link } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className={`fixed top-0 left-0 w-full align-middle z-10 transition-colors duration-300 ${scrolled ? 'bg-[#4AA5D2] shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <img src={lifevista} className="h-[62px] w-[249px]" alt="LifeVista" />
        </Link>
        <div className="flex items-center space-x-12">
          <Link to="/" className={`text-${scrolled ? 'white' : 'white'} hover:text-gray-300`}>Home</Link>
          <Link to="/AboutUs" className={`text-${scrolled ? 'white' : 'white'} hover:text-gray-300`}>About Us</Link>
          <Link to="/Browse" className={`text-${scrolled ? 'white' : 'white'} hover:text-gray-300`}>Browse</Link>
          <Link to="/Deals&Specials" className={`text-${scrolled ? 'white' : 'white'} hover:text-gray-300`}>Deals & Specials</Link>
          <Link to="/Newlistings" className={`text-${scrolled ? 'white' : 'white'} hover:text-gray-300`}>New Listings</Link>
          <Link to="/FAQ" className={`text-${scrolled ? 'white' : 'white'} hover:text-gray-300`}>FAQ</Link>
          <Link to="/OwnerRegisterPage" className={`text-${scrolled ? 'white' : 'white'} hover:text-gray-300`}>Owner Login</Link>
        </div>
      </div>
    </div>
    // <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
    //         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
    //             <Link to="/">
    //                 <img src={lifevista} className="h-12 md:h-16" alt="LifeVista" />
    //             </Link>
    //             <div className="flex items-center space-x-4 md:space-x-8">
    //                 <div className="md:hidden">
    //                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-gray-900 focus:outline-none">
    //                         <BiMenu className="h-6 w-6" /> {/* Use the BiMenu icon */}
    //                     </button>
    //                 </div>
    //                 <div className={`md:flex items-center space-x-8 ${menuOpen ? 'block' : 'hidden'}`}>
    //                     <Link to="/" className={`text-${scrolled ? 'gray-700' : 'white'} hover:text-gray-900`}>Home</Link>
    //                     <Link to="/AboutUs" className={`text-${scrolled ? 'gray-700' : 'white'} hover:text-gray-900`}>About Us</Link>
    //                     <Link to="/Browse" className={`text-${scrolled ? 'gray-700' : 'white'} hover:text-gray-900`}>Browse</Link>
    //                     <Link to="/Deals&Specials" className={`text-${scrolled ? 'gray-700' : 'white'} hover:text-gray-900`}>Deals & Specials</Link>
    //                     <Link to="/Newlistings" className={`text-${scrolled ? 'gray-700' : 'white'} hover:text-gray-900`}>New Listings</Link>
    //                     <Link to="/FAQ" className={`text-${scrolled ? 'gray-700' : 'white'} hover:text-gray-900`}>FAQ</Link>
    //                     <Link to="/OwnerRegisterPage" className={`text-${scrolled ? 'gray-700' : 'white'} hover:text-gray-900`}>Owner Login</Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    );
}
