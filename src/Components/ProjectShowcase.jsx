import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    {
      name: 'GlamourGlow Beauty',
      image: 'https://i.ibb.co/dcMwBQn/Screenshot-122.png', // Add the image path or URL here
      description: 'This is a beauty service web site. A user can book and add services if they want. Moreover, you can check the booked service status and take the service on time.',
      coreFeatures: [' Booking Service', 'Service Management', 'Check theService Status'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      liveLink: 'https://beauty-services-935c4.web.app/',
      clientCodeLink: 'https://github.com/roksana35/glamourglow-beauty-client',
      serverCodeLink: 'https://github.com/roksana35/glamourglow-beauty-server',
    },
    {
      name: 'Artisn CraftWork',
      image: 'https://i.ibb.co/V0F8dKy/Screenshot-123.png', // Add the image path or URL here
      description: 'Artisan CraftWork is a vibrant arts and crafts website showcasing various types of artistic creations. Visitors can explore a wide range of paintings available for sale, providing inspiration and new ideas for art enthusiasts..',
      coreFeatures: ['Dynamic and Responsive Interface', 'User Authentication', 'Comprehensive Art Collection'],
      technologies: ['Node.js',  'Firebase','React','MongoDB'],
      liveLink: 'https://velvety-sundae-e92108.netlify.app',
      clientCodeLink: 'https://github.com/roksana35/artisn-craftWork',
      serverCodeLink: 'https://github.com/roksana35/artisan-craftwork-server',
    },
    {
      name: 'TaskHive',
      image: 'https://i.ibb.co/6r06xVf/Screenshot-124.png', // Add the image path or URL here
      description: 'It is an online platform website. where a user can participate in tasks and collect coins. Even a login user can add tasks.',
      coreFeatures: [ 'Comprehensive User Dashboard','High Security and Performance' ,'Payment System '],
      technologies: ['React', 'Node.js', 'Jwt','Express.js'],
      liveLink: 'https://task-hive-d1851.web.app',
      clientCodeLink: 'https://github.com/roksana35/taskhive-client',
      serverCodeLink: 'https://github.com/roksana35/taskhive-server',
    },
  ];

  return (
    <section className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2 className=" text-2xl md:text-4xl font-bold text-center font-roboto mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className=" flex flex-col bg-[#300f3a] shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-roboto font-bold mb-2">{project.name}</h3>
              <p className="mb-4 font-roboto">{project.description}</p>
              <h4 className="font-semibold font-roboto text-xl mb-2">Core Features:</h4>
              <ul className="list-disc list-inside mb-4">
                {project.coreFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h4 className="font-semibold text-xl font-roboto mb-2">Technologies Used:</h4>
              <p className="mb-4">{project.technologies.join(', ')}</p>
              <div className="mt-auto flex items-center gap-4 p-3 justify-center space-y-2">
                <a href={project.liveLink} className="text-blue-400 btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Live Project
                </a>
                <a href={project.clientCodeLink} className="text-blue-400 btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Client Code
                </a>
                <a href={project.serverCodeLink} className="text-blue-400 btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Server Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
