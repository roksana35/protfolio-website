import image1 from '../assets/education_3976625.png';
import image2 from '../assets/graduation-cap_17471801.png';
import image3 from '../assets/mark_15083206.png';

const Education = () => {
  const educationData = [
   
    {image:image1,
      degree: 'Higher Secondary Certificate (H.S.C)',
      institution: 'Kumudini Government College, Tangail',
      year: '2019-2020',
    },
    {image:image2,
      degree: 'Bachelor of Arts (BA) in Political Science',
      institution: 'National University',
      year: 'Currently Studying(Will be Graduate in 2027)',
    },
    {image:image3,
      degree: 'Web Development ',
      institution: 'Programming hero',
      year: '2023-2024',
    },
    // Add more education data here if needed
  ];

  return (
    <section className="lg:py-16 bg-neutral-900 text-white">
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold font-arimo text-center mb-8">
        Education & <span className='text-[#10cc7b]'>Qualifications</span>
      </h2>
      <div className="flex flex-col md:flex-row  lg:flex-row justify-center items-center gap-8">
        {educationData.map((education, index) => (
          <div
          key={index}
          className={`w-[280px] mx-auto bg-neutral-700 justify-center items-center shadow-lg rounded-lg p-6 ${
            index === 1 ? 'h-[310px]' : 'h-[280px]'
          }`}
        >
          <div className='flex justify-center items-center w-full h-[100px]'>
          <img
            src={education.image}
            alt={education.degree}
            className="w-16 h-16 mb-4 "
          />
          </div>
          <h2 className="text-xl font-semibold text-center">{education.degree}</h2>
          <p className="text-gray-300 text-center">{education.institution}</p>
          <p className="text-gray-400 text-center">{education.year}</p>
        </div>
        ))}
      </div>
    </div>
  </section>
  )
};

export default Education;
