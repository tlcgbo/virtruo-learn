// src/components/Explore.jsx
import React from 'react';

const Explore = () => {
  const categories = [
    { id: 1, title: 'Mathematics', description: 'Learn about algebra, geometry, and more.' },
    { id: 2, title: 'Science', description: 'Explore physics, chemistry, and biology.' },
    { id: 3, title: 'Arts', description: 'Discover various art forms and techniques.' },
    // Add more categories as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <div key={category.id} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Explore Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
