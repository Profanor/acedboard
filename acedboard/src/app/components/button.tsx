import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyles?: string;
  size?: 'small' | 'medium' | 'large';
  fontSize?: string | number; // font size can be string (class name) or number
  fontWeight?: string | number; // font weight can be string (class name) or number 
}

const Button: React.FC<ButtonProps> = ({
  children,
  customStyles,
  size = 'medium',
  fontSize,
  fontWeight,
  ...props
}) => {
  // Defined size-based classes
  const sizeClasses = {
    small: 'py-1 px-2',
    medium: 'py-2 px-4',
    large: 'py-3 px-6',
  };

  return (
    <button
      className={`bg-custom-gradient text-white rounded ${sizeClasses[size]} ${customStyles}`}
      style={{
        fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
        fontWeight: typeof fontWeight === 'number' ? fontWeight : undefined,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
