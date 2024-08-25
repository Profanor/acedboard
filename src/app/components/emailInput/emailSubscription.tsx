"use client";
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface EmailSubscriptionProps {
  placeholder?: string;
  onSubmit?: (email: string) => void;
}

const EmailSubscription: React.FC<EmailSubscriptionProps> = (
    { placeholder = "Email address", 
      onSubmit }) => {
      const [email, setEmail] = React.useState("");

    const handleSubmit = () => {
      if (onSubmit && email) {
        onSubmit(email);
    }
  };

  return (
    <div className="text-black relative flex items-center mt-8">
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-sm p-2 border-b border-gray-300 outline-none"
      />
      <button
        className="relative ml-2 py-2 px-4 text-white flex items-center justify-center"
        onClick={handleSubmit}
        style={{
          backgroundImage: 'linear-gradient(to right, #6495ED, #DE3163)', // Left to right gradient
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          border: '1px solid #gray-800',
          borderBottom: 'none',
          width: '70px',
          height: '40px',
          marginTop: '0',
        }}
      >
        <FaChevronRight size={10} /> {/* Chevron icon */}
      </button>
    </div>
  );
};

export default EmailSubscription;
