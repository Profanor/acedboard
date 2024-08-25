import React from 'react';
import Button from '../button/button';

const InputWithButton: React.FC = () => {
  return (
    <div className="relative flex items-center">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search..."
        className="bg-white text-black p-2 pl-4 pr-16 rounded-lg border border-[#C2C7D066] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Custom Button */}
      <Button
        size="small"
        customStyles="absolute right-0 top-0 h-full px-4 flex items-center justify-center rounded-r-lg"
        borderRadius="12px"
      >
        Search
      </Button>
    </div>
  );
};

export default InputWithButton;
