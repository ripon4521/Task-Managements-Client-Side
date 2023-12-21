import  { useState } from 'react';
import { FaBars } from "react-icons/fa";
import logo from '../../../../public/Logo/Frame 60809.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  const toggleMenuOne = () => {
    setMenuOne(!menuOne);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

// Product', href: '/products' },
  // { name: 'Features', href: '#' },
  // { name: 'Company', href: '#' },
  // { name: 'Pricing


  return (
    <section className='font-dmsnas'>
      <div className="h-auto ">
        {/* NAVBAR */}
        <nav className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0" x-data="{isOpen: false, menuOne:false}">
          {/* CONTAINER */}
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
            {/* SVG LOGO - YOU CAN REPLACE THIS */}
            <a className='flex items-center' href="#">
             <img className='w-10' src={logo} alt="" />
             <span className='text-2xl font-dmsnas font-bold'>Beress</span>
            </a>
            {/* MENU CONTENT 1 */}
            <div className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? 'show' : 'hidden'}`}>
              {/* DROPDOWN */}
              <a href="#" className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800">
              Product
              </a>
              <a href="#" className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800">
              Features
              </a>
              <a href="#" className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800">
                Pricing
              </a>
              <a href="#" className="font-inter lg: rounded-lg pb-8 lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800">
                FAQs
              </a>
            </div>
            {/* MENU CONTENT 2 */}
            <div className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${isOpen ? 'show' : 'hidden'}`}>
              <Link to="/signup" className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800">
                Sign Up
              </Link>
              <Link
                className="font-inter rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800"
                to="/login"
              >
                Login
              </Link>
            </div>
            {/* BURGER MENU */}
            <a href="#" className="absolute right-5 lg:hidden" onClick={toggleNavbar}>
             <FaBars></FaBars>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
