import  { useState } from 'react';

const SkillSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript','React'],
    Backend: ['Node.js', 'Express.js', 'Next.js'],
    Tools: ['Git', 'Github', 'VS Code'],
    Database: ['MongoDB', 'Firebase'],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.keys(skills).map((category) => (
            <div
              key={category}
              className={`  bg-gradient-to-r from-[#124e80] via-[#59136e] to-[#0b4553] bg-indigo-600 shadow-lg rounded-lg py-6 transition-all duration-300 ${
                selectedCategory === category ? 'h-auto' : 'h-20'
              } hover:bg-opacity-75`}
            >
              <h3
                className="text-lg text-center text-white font-semibold cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </h3>
              {selectedCategory === category && (
                <div className="mt-4">
                  {skills[category].map((skill) => (
                    <p className="text-center text-white" key={skill}>
                      {skill}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
