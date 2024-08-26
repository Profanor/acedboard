import React from 'react';
import Article from '../article/article';

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

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      {/* Introductory Section */}
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore our latest articles, insights, and updates in the tech world.
        </p>
        <Article 
          headerText={'Articles in this section'} 
          dropdowns={dropdowns} 
        />
      </section>

      <section>
        
      </section>
    </main>
  );
};

export default MainBody;
