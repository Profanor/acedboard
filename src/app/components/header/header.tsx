"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../button/button';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white text-black p-4 md:p-8 flex items-center justify-between mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/icons/logo.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* Navigation Links and Buttons for Desktop */}
      <div className="hidden md:flex items-center justify-between flex-grow">
        {/* Navigation Links */}
        <nav className="flex flex-grow justify-center space-x-4">
          {['Features', 'Solution', 'Case Study', 'Resources'].map((item) => (
            <a key={item} href={`#${item}`} className="text-[#333] text-xs font-normal p-2 rounded flex items-center hover:text-blue-800 transition-colors">
              {item}
              <svg className="ml-1" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
          <a href="#pricing" className="text-[#333] text-xs font-normal p-2 rounded hover:text-blue-800 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Sign In and Button */}
        <div className="flex items-center space-x-4 ml-auto">
          <a href="#sign-in" className="text-[#333] text-xs hover:text-blue-800 p-2 rounded-md hover:bg-blue-50 transition-colors">
            Sign In
          </a>
          <Button
            size="medium"
            customStyles="text-white"
            fontSize={12}
            borderRadius="12px"
          >
            Start for Free
          </Button>
        </div>
      </div>

      {/* Hamburger Menu and Sign In for Mobile */}
      <div className="flex items-center space-x-4 md:hidden">
        <a href="#sign-in" className="text-[#333] text-xs hover:text-blue-800 p-2 rounded-md hover:bg-blue-50 transition-colors">
          Sign In
        </a>
        <button
          onClick={toggleDrawer}
          className="text-black text-2xl focus:outline-none"
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-white p-6 shadow-lg flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between mb-8">
              <Image src="/icons/logo.svg" alt="Logo" width={100} height={100} />
              <button
                onClick={toggleDrawer}
                className="text-black text-2xl focus:outline-none"
                aria-label="Close menu"
              >
                <HiOutlineX />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
              {['Features', 'Solution', 'Case Study', 'Resources', 'Pricing'].map((item) => (
                <a key={item} href={`#${item}`} className="text-[#333] text-xs font-normal p-2 rounded">
                  {item}
                </a>
              ))}
            </nav>

            {/* Buttons */}
            <div className="mt-8">
              <a href="#sign-in" className="block text-[#333] text-xs hover:text-blue-800 p-2 rounded-md hover:bg-blue-50 transition-colors">
                Sign In
              </a>
              <Button
                size="medium"
                customStyles="text-white mt-4 w-full"
                fontSize={12}
                borderRadius="12px"
              >
                Start for Free
              </Button>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="flex-grow bg-black opacity-50"
            onClick={toggleDrawer}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
