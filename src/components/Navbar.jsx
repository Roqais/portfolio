import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (path) => {
        setActiveItem(path);
        setIsOpen(false);
        navigate(path);
    };

    return (
        <nav className="bg-white font-poppins text-customPurple dark:bg-gray-900 w-full z-20 fixed top-0 start-0 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-200 dark:border-gray-600">
                <h1 className=' text-xl font-semibold tracking-wide'>Roqais M.</h1>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" onClick={() => handleClick('/ContactME')}
                        className="text-white hidden md:block bg-[#5540AF] hover:bg-[#453490] focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Contact ME</button>
                    <button onClick={handleToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {['/', '/projects', '/Experience'].map((path, index) => {
                            const labels = ['Home', 'Projects', 'Experience'];
                            const isActive = path === activeItem;
                            const isDisabled = isActive && window.innerWidth >= 768;
                            return (
                                <li key={index}>
                                    <Link
                                        to={path}
                                        onClick={() => handleClick(path)}
                                        className={`block py-2 px-3 rounded ${isDisabled ? 'pointer-events-none cursor-default' : 'md:hover:bg-transparent md:hover:text-black'} font-medium md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${isActive ? 'text-black' : ''}`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {labels[index]}
                                    </Link>
                                </li>
                            );
                        })}
                        {isOpen &&
                            <div className='flex justify-start'>
                                <button onClick={() => handleClick('/ContactME')} className='text-white md:hidden block mt-3 h-10 w-28 bg-red-800 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>Contact ME</button>
                            </div>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
