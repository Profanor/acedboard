import Image from 'next/image';
import Button from '../button';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black p-4 md:p-8 flex flex-col md:flex-row items-center justify-between mx-auto">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <Image src="/icons/logo.svg" alt="Logo" width={100} height={100} />
      </div>

      {/* Navigation and Buttons Container */}
      <div className="flex flex-col md:flex-row items-center flex-grow justify-between md:justify-between">

        {/* Navigation */}
        <nav className="relative flex flex-col md:flex-row items-center space-x-4 md:space-x-8 flex-grow justify-center">
          {['Features', 'Solution', 'Case Study', 'Resources'].map((item) => (
            <div key={item} className="relative group">
              <a href={`#${item}`} className="text-[#333] text-xs font-normal p-2 rounded flex items-center space-x-1">
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <svg
                  className="w-3 h-3 text-[#333] transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded mt-2 shadow-lg">
                {/* Dropdown content */}
                <a href={`#${item}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">item 1</a>
                <a href={`#${item}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">item 2</a>
              </div>
            </div>
          ))}
          <a href="#pricing" className="text-[#333] text-xs font-normal p-2 rounded">Pricing</a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-2 md:space-x-4">
          {/* Sign In Button */}
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
    </header>
  );
};

export default Header;
