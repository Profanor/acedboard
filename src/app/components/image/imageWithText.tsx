import React from 'react';

interface ImageWithTextProps {
  imageUrl: string;
  headerText: string;
  descriptionText: string;
  className?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, headerText, descriptionText, className }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Text content */}
      <div className="p-1">
        <h2 className="text-black text-xl font-bold">{headerText}</h2>
        <p className="text-[#74757A] text-base whitespace-preline">{descriptionText}</p>
      </div>
      {/* Image */}
      <img src={imageUrl} alt="Image" className="w-full h-auto object-contain mt-2" />
    </div>
  );
};

export default ImageWithText;
