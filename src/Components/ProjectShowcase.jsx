import React from "react";
import "../index.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Update for Swiper 8+
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectShowcase = () => {
  const projects = [
    {
      name:'UrbanDrive (Team Project)',
      image:'https://i.ibb.co.com/6v9Fkvv/Screenshot-411.png',
      description:'UrbanDrive is a car rental website .where user can easily booked car for take rent . Also they provide their car for rent through with UrbanDrive.',
      coreFeatures:['Hosting and Approval system with an Admin Panel to review.','Real-Time user support via Live Chat.','Multi Language Support which offers Bengali and English.'],
      technologies:['TypeScript', 'React', 'Node.js','Express.js', 'MongoDB','Tailwind CSS', 'Firebase','TanStack Query'],
      liveLink:'https://cheery-bubblegum-eecb30.netlify.app/',
      clientCodeLink:'https://github.com/aayman01/UrbanDrive-Client',
      serverCodeLink:'https://github.com/aayman01/UrbanDrive-Server'
    },
    {
      name: 'GlamourGlow Beauty',
      image: 'https://i.ibb.co/dcMwBQn/Screenshot-122.png', // Add the image path or URL here
      description: 'This is a beauty service web site. A user can book and add services if they want. Moreover, you can check the booked service status and take the service on time.',
      coreFeatures: [' Booking Service', 'Service Management', 'Check theService Status'],
      technologies: ['React', 'Node.js','Express.js', 'MongoDB','Tailwind CSS', 'Firebase','TanStack Query'],
      liveLink: 'https://beauty-services-935c4.web.app/',
      clientCodeLink: 'https://github.com/roksana35/glamourglow-beauty-client',
      serverCodeLink: 'https://github.com/roksana35/glamourglow-beauty-server',
    },
    {
      name: 'TaskHive',
      image: 'https://i.ibb.co/6r06xVf/Screenshot-124.png', // Add the image path or URL here
      description: 'It is an online platform website. where a user can participate in tasks and collect coins. Even a login user can add tasks.',
      coreFeatures: [ 'Comprehensive User Dashboard','High Security and Performance' ,'Payment System '],
      technologies: ['React', 'Node.js','Express.js', 'MongoDB','Tailwind CSS', 'Firebase','TanStack Query'],
      liveLink: 'https://task-hive-d1851.web.app',
      clientCodeLink: 'https://github.com/roksana35/taskhive-client',
      serverCodeLink: 'https://github.com/roksana35/taskhive-server',
    },
  
    {
      name: 'Artisn CraftWork',
      image: 'https://i.ibb.co/V0F8dKy/Screenshot-123.png', // Add the image path or URL here
      description: 'Artisan CraftWork is a vibrant arts and crafts website showcasing various types of artistic creations. Visitors can explore a wide range of paintings available for sale, providing inspiration and new ideas for art enthusiasts..',
      coreFeatures: ['Dynamic and Responsive Interface', 'User Authentication', 'Comprehensive Art Collection'],
      technologies: ['React', 'Node.js','Express.js', 'MongoDB','Tailwind CSS', 'Firebase'],
      liveLink: 'https://velvety-sundae-e92108.netlify.app',
      clientCodeLink: 'https://github.com/roksana35/artisn-craftWork',
      serverCodeLink: 'https://github.com/roksana35/artisan-craftwork-server',
    },
  ]

  return (
    <section className="py-16  text-white">
      <div className="container mx-auto px-4">
        <h2 className=" text-2xl md:text-4xl font-bold text-center font-arimo mb-8">My <span className="text-[#10cc7b]">Projects</span></h2>
        <Swiper
        // For fade transition
        
        modules={[Navigation, Pagination]} // Swiper এর প্রয়োজনীয় মডিউল যুক্ত করুন
        spaceBetween={30} // স্লাইডের মধ্যে দূরত্ব
        slidesPerView={3} // একসাথে কতটি স্লাইড দেখানো হবে
        navigation // পরবর্তী ও পূর্ববর্তী বাটন সক্রিয় করবে
        
        pagination={{ clickable: true,el: ".custom-pagination", }} // পেজিনেশন যোগ করবে
        autoplay={{ delay: 3000 }} // স্লাইড স্বয়ংক্রিয়ভাবে ৩ সেকেন্ড পর পর পরিবর্তন হবে
        breakpoints={{
          320:{ slidesPerView: 1 },
          375:{ slidesPerView: 1 },
          425:{ slidesPerView: 1 },
          640: { slidesPerView: 1 }, // 640px স্ক্রিনে ১টি স্লাইড দেখাবে
          768: { slidesPerView: 2 }, // 768px স্ক্রিনে ২টি স্লাইড দেখাবে
          1024: { slidesPerView: 3 }, // বড় স্ক্রিনে ৩টি স্লাইড দেখাবে
        }}
        
         
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            
              <SwiperSlide key={index}   className="bg-[#2d2c31] font-arimo flex flex-col shadow-md rounded-lg p-2 lg:p-4 flex-wrap h-[500px]">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-arimo font-bold mb-2">{project.name}</h3>
              <p className="mb-4 font-arimo">{project.description}</p>
              <h4 className="font-semibold font-arimo  text-xl mb-2">Core Features:</h4>
              <ul className="list-disc list-inside font-arimo mb-4">
                {project.coreFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h4 className="font-semibold text-xl font-arimo  mb-2">Technologies Used:</h4>
              <p className="mb-4">{project.technologies.join(', ')}</p>
              <div className=" grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center  lg:gap-2  ">
                <a href={project.liveLink} className="text-[#10cc7b] hover:bg-[#10cc7b] hover:border-[#10cc7b] hover:text-white lg:p-1 rounded-md border-2 border-[#10cc7b]" target="_blank" rel="noopener noreferrer">
                  Live Project
                </a>
                <a href={project.clientCodeLink} className="text-[#10cc7b] hover:bg-[#10cc7b] hover:border-[#10cc7b] hover:text-white lg:p-1 rounded-md border-2 border-[#10cc7b]" target="_blank" rel="noopener noreferrer">
                  Client Code
                </a>
                <a href={project.serverCodeLink} className="text-[#10cc7b] hover:bg-[#10cc7b] hover:border-[#10cc7b] hover:text-white lg:p-1 rounded-md border-2 border-[#10cc7b]" target="_blank" rel="noopener noreferrer">
                  Server Code
                </a>
              </div>
            </SwiperSlide>

          
            
          ))}

          </div>
          



        </Swiper>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className=" flex flex-col bg-[#2d2c31] shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
              <div className="mt-auto flex items-center lg:gap-4  justify-center space-y-2">
                <a href={project.liveLink} className="text-[#10cc7b] hover:bg-[#10cc7b] hover:border-[#10cc7b] lg:btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Live Project
                </a>
                <a href={project.clientCodeLink} className="text-[#10cc7b] sm:border-2 sm:border-[#10cc7b] hover:bg-[#10cc7b] hover:border-[#10cc7b] lg:btn  btn-outline" target="_blank" rel="noopener noreferrer">
                  Client Code
                </a>
                <a href={project.serverCodeLink} className="text-[#10cc7b] hover:bg-[#10cc7b] hover:border-[#10cc7b] lg:btn btn-outline" target="_blank" rel="noopener noreferrer">
                  Server Code
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ProjectShowcase;
