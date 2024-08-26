"use client";
import React from 'react';
import Image from 'next/image';
import Button from '../button/button';
import EmailSubscription from '../emailInput/emailSubscription';

const Footer: React.FC = () => {
  const handleSubscription = (email: string) => {
    console.log(`Subscribed with: ${email}`);
  };

  return (
    <footer className="bg-white border-t border-t-gradient">
      <div className="container mx-auto px-4 py-8">

        {/* Container for Logo, Subscription Section, Platform, Features, Company, and Resources */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Logo and Newsletter Subscription */}
          <div className="flex-shrink-0 flex flex-col mb-8 md:mb-0">
            <Image src="/icons/logo.svg" alt="Logo" width={130} height={130} />
            <p className="text-gray-700 text-lg mt-4 md:mt-8">
              Subscribe to our <br />newsletter
            </p>
            <EmailSubscription onSubmit={handleSubscription} />
          </div>

          {/* Platform, Features, Company, Resources */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 mb-4">
                Platform
              </h4>
              <ul className="text-black font-normal space-y-2">
                <li>Automation</li>
                <li>Integration</li>
                <li>Security</li>
                <li>Proconomics</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 mb-4">
                Features
              </h4>
              <ul className="text-black font-normal space-y-2">
                <li>List</li>
                <li>Board</li>
                <li>Workload</li>
                <li>Calendar</li>
                <li>Teams</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 mb-4">
                Company
              </h4>
              <ul className="text-black font-normal space-y-2">
                <li>About Us</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 mb-4">
                Resources
              </h4>
              <ul className="text-black font-normal space-y-2">
                <li>FAQs</li>
                <li>Video Library</li>
                <li>24/7 Support</li>
                <li>Pricing</li>
              </ul>
            </div>
          </div>

          {/* Ready to Get Started */}
          <div className="flex flex-col items-end mb-8">
            <div className="flex items-center space-x-4">
              <p className="text-gray-700 text-lg">Ready to get started?</p>
              <Button
                size="medium"
                customStyles="text-white"
                fontSize={14}
                borderRadius="6px"
              >
                Start for free
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links and Social Media Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <p className="text-gray-700 text-sm">All Rights Reserved &copy; acedboard {new Date().getFullYear()}</p>
            <p className="text-gray-700 text-sm md:ml-6 mt-2 md:mt-0">
              <a href="/terms-of-use" 
              className="hover:underline">Terms of Use</a> | <a href="/privacy-policy" 
              className="hover:underline">Privacy Policy</a>
            </p>
          </div>
          <div className="flex space-x-6 md:space-x-8 mt-4 md:mt-0 md:ml-auto">
            {/* Social Media Icons */}
            <a href="https://facebook.com" aria-label="Facebook" className="inline-block">
              <Image src="/icons/facebook.svg" alt="Facebook" width={12} height={12} />
            </a>
            <a href="https://youtube.com" aria-label="Youtube" className="inline-block">
              <Image src="/icons/youtube.svg" alt="Youtube" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="inline-block">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="inline-block">
              <Image src="/icons/x.svg" alt="Twitter" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Border */}
      <style jsx>{`
        .border-t-gradient {
          border-image-source: linear-gradient(85.23deg, #6495ED 4.62%, #DE3163 91.89%);
          border-image-slice: 1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
