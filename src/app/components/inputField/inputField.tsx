import React from 'react';
import Button from '../button/button';

const InputWithButton: React.FC = () => {
  return (
    <div className="relative flex items-center max-w-sm">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Find in templates"
        className="bg-white text-black p-2 pl-4 pr-20 rounded-lg border-4 border-gray-200 focus:outline-none w-full"
      />
      
      {/* Custom Button */}
      <Button
        size="small"
        customStyles="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 flex items-center justify-center rounded-r-lg"
        borderRadius="6px"
      >
        Search
      </Button>
    </div>
  );
};

export default InputWithButton;
