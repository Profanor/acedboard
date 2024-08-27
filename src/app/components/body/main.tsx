import React from 'react';
import Article from '../article/article';
import InputWithButton from '../inputField/inputField';

const MainBody: React.FC = () => {
  // Define dropdown data
  const dropdowns = [
    {
      label: 'Projects',
      bulletPoints: [
        "What is a Project?",
        "Creating a New Project",
        "Naming your projects",
        "Simple Project Operations",
        "Adding Members to a Project",
        "Simple Project Operations",
        "Simple Project Operations"
      ]
    },
    {
      label: 'Workspace',
      bulletPoints: []
    },
    {
      label: 'Task Priority',
      bulletPoints: []
    },
    {
      label: 'Files',
      bulletPoints: []
    }
  ];

  // Array of images and dummy texts
  const imagesAndTexts = [
    { text: "What is a Project?", image: "/images/firstimage.png" },
    { text: "Creating a Project", image: "/images/firstimage.png" },
    { text: "Naming your projects", image: "/images/image2.png" },
    { text: "Testing and Debugging", image: "/images/image2.png" },
    { text: "Launch Preparations", image: "/images/image2.png" },
    { text: "Going Live", image: "/images/image3.png" },
    { text: "User Feedback", image: "/images/image3.png" },
    { text: "Iterative Improvements", image: "/images/image4.png" },
    { text: "Scaling Operations", image: "/images/image5.png" },
    { text: "Introducing New Features", image: "/images/image5.png" },
    { text: "Monitoring System Health", image: "/images/image5.png" },
    { text: "Security Enhancements", image: "/images/image5.png" },
    { text: "Customer Support", image: "/images/image5.png" },
    { text: "Performance Tuning", image: "/images/image5.png" },
    { text: "Regular Updates", image: "/images/image5.png" },
    { text: "User Training", image: "/images/firstimage.png" },
    { text: "Project Retrospective", image: "/images/firstimage.png" }
  ];

  return (
    <main className="p-8 bg-white min-h-screen mt-16 md:mt-24 lg:mt-32"> 
      {/* Introductory Section */}
      <section className="mb-8 ml-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl text-black font-bold mb-4 sm:mb-0">
            How Can We{' '}
            <span className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">
              Help You
            </span>{' '}
            Today?
          </h1>
          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <InputWithButton />
          </div>
        </div>
        <p className="text-lg text-gray-500 mt-4">
          Explore our latest articles, insights, and updates.
        </p>
      </section>

      {/* Images and Article Section */}
      <section className="flex flex-col sm:flex-row sm:justify-between mt-4">
        <div className="flex flex-col max-w-xs sm:w-1/2 mt-6 sm:mb-0 ml-4">
          <Article 
            headerText={'Articles in this section'} 
            dropdowns={dropdowns} 
          />
        </div>
        <div className="flex flex-col sm:w-1/2 sm:pr-4">
          {imagesAndTexts.map((item, index) => (
            <div key={index} className="flex flex-col items-center mt-4">
              <p className="text-center text-lg text-black font-medium mb-4">{item.text}</p>
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className="w-full md:w-3/4 lg:w-full"
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainBody;
