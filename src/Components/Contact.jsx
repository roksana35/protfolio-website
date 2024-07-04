
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        // .sendForm('service_zrwxsbs', 'template_vfud5vg', form.current, {
        //   publicKey: 'zKRMraun3NqJ1k0iD',
        // })
        .sendForm('service_zrwxsbs', 'template_vfud5vg', form.current, 'zKRMraun3NqJ1k0iD')
        .then(
          () => {
            alert('Message Send Successfully');
          },
          (error) => {
            alert( 'message not send');
          },
        );
        e.target.reset()
    };

  return (
    <section className="py-16 bg-custom-gradient  text-white">
      <div className="container sm:flex-cl md:flex gap-6 md:gap-16 bg-gradient-to-r from-[#2c1636] to-[#2c1636]  shadow-lg rounded-lg py-10 px-6 mx-auto ">
          
          <div className="md:flex-1 ">
          <h2 className=" md:flex-1 md:text-4xl font-bold font-roboto mx-auto text-center mb-8  ">Let’s work together!</h2>
          <form className="card-body" ref={form} onSubmit={sendEmail}>
        <div className="form-control">
        <label className="label">
            <span className="label-text text-white font-semibold">Name</span>
          </label>
          <input type="text" className='w-full input input-bordered px-4 mb-2 bg-gray-800 rounded' name='client-name'  placeholder="Your Name"  required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text text-white font-semibold">Email</span>
          </label>
          <input type="email" name='email' className='w-full input input-bordered px-4 mb-2 bg-gray-800 rounded'   placeholder="Your Email"  required />
        </div>
        <div>
        <label className="label">
            <span className="label-text text-white font-semibold px-4">Message</span>
          </label>
        <textarea name='message' className="textarea textarea-bordered w-full bg-gray-800" placeholder="Message"></textarea>
        </div>
        
        <div className="form-control mt-6 ">
        <input type="submit" value="Send Message"  className='btn btn-outline btn-primary'/>
        </div>
      </form>
            </div>
            <div className="md:flex-1 md:mt-28 mx-auto space-y-6">
            <div className="mb-2 items-center flex gap-6"><MdEmail className='text-2xl'/>
            <div className='flex flex-col'>
            <span className='text-xl'>Email</span> <a href="mailto:your-email@example.com" className="text-blue-400">roksanaakter7235@gmail.com</a>
            </div>
            </div>
            <div className='flex gap-6 items-center mb-2 '><FaPhone  className='text-2xl'/>
            <div className='flex flex-col'>
                <span className='text-xl'>Phone</span>
                <p>+8801311307235</p>
            </div>
            </div>
            <div className='flex gap-6 items-center mb-2 '><FaMapMarkerAlt className='text-2xl'/>
            <div className='flex flex-col'>
                <span className='text-xl'>Address</span>
                <p>Tangail District,Dhaka,Bangladesh</p>
            </div>
            </div>
            <div className='flex gap-4'>
            <p className="mb-2"> <a href="https://www.facebook.com/alfi.s.nabila/" className="text-blue-400"><FaFacebook className='text-2xl text-white'/></a></p>
            <p className="mb-2"> <a href="https://github.com/roksana35" className="text-blue-400"><FaGithub className='text-2xl text-white'/></a></p>

            </div>
            
            
          </div>
            </div>
           
      
    </section>
  );
};

export default Contact;
