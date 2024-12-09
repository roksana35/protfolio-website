import { motion } from 'framer-motion'; // framer-motion import করুন
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import JavaScript from '../assets/js.png';
import React from '../assets/pngwing.com (3).png';
import Taildwind from '../assets/pngwing.com (7).png';
import Bootstrap from '../assets/pngwing.com (6).png';
import Firebase from '../assets/pngwing.com (4).png';
import Node from '../assets/nodejs.png';
import Express from '../assets/pngwing.com.png';
import Git from '../assets/pngwing.com (1).png';
import Github from '../assets/pngwing.com (2).png';
import Mongodb from '../assets/pngwing.com (8).png';

const SkillSection = () => {
  const skillVariants = {
    hidden: { opacity: 0, x: -100 },  // Initial hidden state (left side)
    visible: {
      opacity: 1,
      x: 0,  // Final position (center)
      transition: { 
        duration: 0.5, 
        ease: 'easeOut', 
        delay: 0.2 // Set delay for stagger effect
      },  // Animation timing
    },
  };

  return (
    <section className="py-16 bg-neutral-900 ">
      <h1 className='text-3xl font-bold font-arimo text-white text-center mb-16'>My <span className='text-[#10cc7b]'>Skill</span></h1>
      {/* <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-center'>
        <div className='flex justify-center items-center'>
          <img src={html} alt="HTML" className='w-[90px] h-[90px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={css} alt="CSS" className='w-[80px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={JavaScript} alt="JavaScript" className='w-[70px] h-[70px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={React} alt="React" className='w-[80px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Taildwind} alt="Tailwind" className='w-[80px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Bootstrap} alt="Bootstrap" className='w-[80px] h-[80px]' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Node} alt="Node" className='w-[80px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Express} alt="Express" className='w-[110px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Mongodb} alt="MongoDB" className='w-[80px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Firebase} alt="Firebase" className='w-[80px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Git} alt="Git" className='w-[120px] h-[80px] ' />
        </div>
        <div className='flex justify-center items-center'>
          <img src={Github} alt="GitHub" className='w-[80px] h-[80px] ' />
        </div>
      </div> */}
      <div className="flex justify-center items-center">
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6'>
          <div className='flex justify-center items-center'>
            <img src={html} alt="HTML" className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={css} alt="CSS" className= 'w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={JavaScript} alt="JavaScript" className=' w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={React} alt="React" className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Taildwind} alt="Tailwind" className=' w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Bootstrap} alt="Bootstrap" className=' w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Node} alt="Node" className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Express} alt="Express" className='w-[80px] h-[60px] lg:w-[110px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Mongodb} alt="MongoDB" className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Firebase} alt="Firebase" className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Git} alt="Git" className='w-[80px] h-[60px] lg:w-[120px] lg:h-[80px]' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={Github} alt="GitHub" className='w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-white rounded-full' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
