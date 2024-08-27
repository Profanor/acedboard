import React from 'react';
import Article from '../article/article';
import InputWithButton from '../inputField/inputField';
import ImageWithText from '../image/imageWithText';

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
  const imageData = [
    { headerText: "What is a Project?", descriptionText: `In Acedboard, a project is the second level in the organizational unit. A project is a group of tasks and or
      people working together for a specific goal, outcome within a set time.`, imageUrl: "/images/firstimage.png" },

    { headerText: "Creating a Project", descriptionText: "Once you have selected the three dots, select the new project to get started.", 
      imageUrl: "/images/firstimage.png" },

    { headerText: "Naming your projects and select view modes", descriptionText: "Best practices for naming.", imageUrl: "/images/image2.png" },
    { headerText: "Testing and Debugging", descriptionText: "Techniques for testing and debugging.", imageUrl: "/images/image2.png" },
    { headerText: "Testing and Debugging", descriptionText: "Techniques for testing and debugging.", imageUrl: "/images/image2.png" },
    
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
          {imageData.map((item, index) => (
            <div key={index} className="flex flex-col items-center mt-8">
              <ImageWithText
                headerText={item.headerText}
                descriptionText={item.descriptionText}
                imageUrl={item.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainBody;
