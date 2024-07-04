

const Banner = () => {
  return (
    <section
      className="hero-section flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] relative"
     
    >
      <div className="container mx-auto md:m-10 md:p-8 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="hero-content-box p-6">
              <span className="text-4xl font-roboto font-bold mb-2">
                I am Roksana Akter
              </span>
              <h1 className=" text-2xl font-bold mb-4">Web Developer </h1>
              <div className=" md:hidden text-center mb-4">
                <img decoding="async" src="https://i.ibb.co/3Mq8X5N/Whats-App-Image-2024-07-02-at-1-46-55-PM.jpg" alt="ThemeJunction" className="rounded-full shadow-2xl max-w-xs mx-auto" />
              </div>
              <p className="lead mb-6">
              I'm a skilled web developer specializing in crafting responsive, dynamic, and intuitive digital solutions. With expertise in HTML, CSS, JavaScript, React, and Node.js, I create seamless user experiences that align with client objectives. Passionate about leveraging innovative frameworks to drive business growth through impactful web development.
              </p>
              <div className="button-box flex flex-wrap items-center">
                <a href="/email.pdf.docx" className="btn border-none bg-gradient-to-r from-[#124e80] via-[#59136e] to-[#0b4553] bg-indigo-600 text-white py-2 px-4 rounded mr-4 mb-4 hover:bg-gradient-to-r hover:from-[#3b1361] hover:via-[#433ba0] hover:to-[#424280]" download={"email.pdf.docx"}>
                  Download Resume
                  <i aria-hidden="true" className="tj flaticon flaticon-download ml-2"></i>
                </a>
                <ul className="flex space-x-4 mb-4">
                  <li>
                    <a href="https://www.facebook.com/" className="text-white">
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <div className="hero-image-box text-center">
              <img decoding="async" src="https://i.ibb.co/3Mq8X5N/Whats-App-Image-2024-07-02-at-1-46-55-PM.jpg" alt="ThemeJunction" className="rounded-lg shadow-2xl md:max-w-[400px] mx-auto border-2 border-[#3f3985] hover:transform hover:rotate-6 hover:border-[#6050dc] transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
