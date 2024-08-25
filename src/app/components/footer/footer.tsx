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
    <footer className="bg-white border-t border-t-transparent border-t-gradient">
      <div className="max-w-screen-xl mx-auto p-4">
        {/* Container for Logo, Subscription Section, and Ready to Get Started */}
        <div className="flex items-start justify-between">
          {/* Logo and Subscription Section */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <div className="flex-shrink-0 mb-4">
              <Image src="/icons/logo.svg" alt="Logo" width={130} height={130} />
            </div>

            {/* Newsletter Subscription Section */}
            <div className="flex flex-col items-start">
              <p className="text-gray-700 text-lg mt-4 whitespace-pre-line">
                Subscribe to our <br />newsletter
              </p>
              <EmailSubscription onSubmit={handleSubscription} />
            </div>
          </div>

          {/* Ready to Get Started and Button */}
          <div className="flex items-center space-x-6">
            <p className="text-gray-700 text-lg">Ready to get started?</p>
            <Button
              size="medium"
              customStyles="text-white"
              fontSize={14}
              borderRadius="6px"
            >
              Start for Free
            </Button>
          </div>
        </div>

        {/* Footer Links and Social Media Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <p className="text-gray-700 text-sm">All Rights Reserved &copy; acedboard {new Date().getFullYear()}</p>
            <p className="text-gray-700 text-sm md:ml-4 mt-2 md:mt-0">
              <a href="/terms-of-use" className="hover:underline">Terms of Use</a> | <a href="/privacy-policy" 
                className="hover:underline">Privacy Policy</a>
            </p>
          </div>
          <div className="flex space-x-8 mt-4 md:mt-0 md:ml-auto">
            {/* Social Media Icons */}
            <a href="https://facebook.com" aria-label="Facebook">
              <Image src="/icons/facebook.svg" alt="Facebook" width={12} height={12} />
            </a>
            <a href="https://youtube.com" aria-label="Youtube">
              <Image src="/icons/youtube.svg" alt="Youtube" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Image src="/icons/x.svg" alt="Twitter" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Border */}
      <style jsx>{`
        .bg-light-purple {
          background-color: #EEE8F9;
        }

        .border-t-gradient {
          border-image-source: linear-gradient(85.23deg, #6495ED 4.62%, #DE3163 91.89%);
          border-image-slice: 1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
