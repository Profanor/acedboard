"use client";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Define the props type for the component
interface Dropdown {
  label: string;
  bulletPoints: string[];
}

interface ArticleProps {
  headerText: string;
  dropdowns: Dropdown[];
}

const Article: React.FC<ArticleProps> = ({ headerText, dropdowns }) => {
  // State to manage the open/close state of each dropdown
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>(Array(dropdowns.length).fill(false));

  const toggleDropdown = (index: number) => {
    // Create a copy of the current state
    const newOpenDropdowns = [...openDropdowns];
    // Toggle the specific dropdown
    newOpenDropdowns[index] = !newOpenDropdowns[index];
    // Update the state with the new array
    setOpenDropdowns(newOpenDropdowns);
  };

  return (
    <div className="p-1 rounded-lg border-gradient max-w-full">
      <article className="p-6 bg-white rounded-lg">
        {/* Header Text */}
        <header className="mb-4 text-xl text-black font-semibold flex justify-start">
          {headerText}
        </header>

        {dropdowns.map((dropdown, index) => (
          <div key={index}>
            {/* Dropdown */}
            <div
              className="p-3 mt-4 bg-white border border-footerColor rounded-lg flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-gradient">{dropdown.label}</span>
              <FaChevronDown className={`text-black transition-transform ${openDropdowns[index] ? 'rotate-180' : ''}`} />
            </div>

            {/* Bullet Points with smooth transition */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openDropdowns[index] ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="list-disc pl-6 text-black flex flex-col items-start whitespace-pre-line">
                {dropdown.bulletPoints.map((point, pointIndex) => (
                  <li className='mt-3' key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </article>

      {/* Gradient Border with Border Radius */}
      <style jsx>{`
        .border-gradient {
          background: linear-gradient(85.23deg, #6495ED 4.62%, #DE3163 91.89%);
          padding: 1px; /* This creates the "border" */
          border-radius: 16px;
        }
        .border-gradient > article {
          border-radius: 15px; /* Slightly less to ensure the inner content fits well */
        }
        .text-gradient {
          background: linear-gradient(85.23deg, #6495ED 4.62%, #DE3163 91.89%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Article;
