import image from "../assets/20241115_163032.jpg";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Banner = () => {
  return (
    <section
      className="hero-section flex items-center justify-center min-h-screen text-white bg-neutral-900 relative"
     
    >
      <div className="container mx-auto md:m-10 md:p-8 relative z-10">
        <div className="flex flex-wrap flex-col-reverse md:flex-row lg:flex-row items-center">
          <div className="w-full md:w-1/2 ">
            <div className="hero-content-box flex flex-col space-y-5 lg:pl-16 ">
              <div className="w-full md:w-1/2  text-center lg:text-left ">
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2, // "Web Developer" প্রথমে আসবে
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                  }}
                 className="ml-1 font-montserrat"> Web Developer</motion.p>
                <motion.p
                   initial={{ x: -100, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{
                     delay: 1.2, // "Hello I'm Roksana Akter" পরে আসবে
                     x: { type: "spring", stiffness: 60 },
                     opacity: { duration: 1 },
                   }}
                 className="text-4xl font-montserrat tracking-wide font-bold">Hello I'm <span className=" font-roboto font-bold mb-2 text-[#10cc7b]">
                Roksana Akter
              </span></motion.p>
                
              </div>
              
              
              <div className=" md:hidden text-center mb-4 w-full md:w-1/2 order-first md:order-last ">
                <img decoding="async" src={image} alt="ThemeJunction" className="rounded-full  w-[250px] h-[250px] mx-auto border-2 border-emerald-400 shadow-[0_0_50px_rgba(16,185,129,1)] transition-transform duration-300" />
              </div>
        
              <motion.p
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
                 delay: 1.4, // Description আরও পরে আসবে
                 x: { type: "spring", stiffness: 60 },
                 opacity: { duration: 1 },
               }}
               className="lead mb-6 font-montserrat text-center lg:text-left">
              I'm a skilled web developer specializing in crafting responsive, dynamic, and intuitive digital solutions. With expertise in HTML, CSS, JavaScript, React, and Node.js, I create seamless user experiences that align with client objectives. Passionate about leveraging innovative frameworks to drive business growth through impactful web development.
              </motion.p>
              <motion.div
               initial={{x:-100,opacity:0}}
               animate={{x:0,opacity:1}}
               transition={{delay:0.4,
                 x:{type:"spring",stiffness:60},
               opacity:{duration:1},
               ease:"easeIn",
               duration:0.5,
             }}
               className="button-box flex flex-wrap justify-center md:justify-start ">
                <a  href="/Junior Developer of Roksana Akter.pdf" className="btn border-2 border-[#10cc7b] bg-neutral-900 text-white hover:bg-[#10cc7b] hover:text-black hover:border-[#10cc7b]" download={"Junior Developer of Roksana Akter.pdf"}>
                  Download Resume <span className="text-xl"><IoMdDownload /></span>
                  <i aria-hidden="true" className="tj flaticon flaticon-download ml-2"></i>
                </a>
                {/* <ul className="flex space-x-4 mb-4">
                  <li>
                    <a href="https://www.facebook.com/" className="text-white">
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  
                </ul> */}
                 <div className='flex gap-4 mt-2 lg:ml-4'>
            <p className="mb-2 border-2 border-[#10cc7b] p-2 rounded-full"> <a href="https://www.facebook.com/alfi.s.nabila/" className="text-blue-400 "><FaFacebook className='text-2xl text-white'/></a></p>
           
            <p className="mb-2 border-2 border-[#10cc7b] p-2 rounded-full"> <a href="https://github.com/roksana35" className="text-blue-400"><FaGithub className='text-2xl text-white'/></a></p>
            <p className="mb-2 border-2 border-[#10cc7b] p-2 rounded-full"> <a href="https://www.linkedin.com/in/roksanaakter235/" className="text-blue-400"><FaLinkedin className='text-2xl text-white'/></a></p>

            </div>
              </motion.div>
            </div>
          </div>
          <div
           className="hidden md:block md:w-1/2">
            <div className="hero-image-box text-center">
              <motion.img
               initial={{x:100,opacity:0}}
               animate={{x:0,opacity:1}}
               transition={{delay:0.4,
                 x:{type:"spring",stiffness:60},
               opacity:{duration:1},
               ease:"easeIn",
               duration:0.5,
             }}
               decoding="async" src={image} alt="ThemeJunction" className="rounded-full  w-[350px] h-[350px] mx-auto border-2 border-emerald-400   transition-transform duration-300 shadow-[0_0_50px_rgba(16,185,129,1)]" />
              
            </div>
           
          </div>
        </div>
      </div>
    </section>
   

  );
};

export default Banner;
