

const Education = () => {
  const educationData = [
    {
      degree: 'Higher Secondary Certificate (H.S.C)',
      institution: 'Kumudini Government College, Tangail',
      year: '2020-2021',
    },
    // Add more education data here if needed
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="md:w-[800px] mx-auto  gap-6 bg-gradient-to-r from-purple-700 to-blue-800 bg-opacity-50 shadow-lg rounded-lg p-6 transition-all duration-300 hover:bg-opacity-75">
          <h2> Higher Secondary Certificate (H.S.C)</h2>
          <p>Kumudini Government College, Tangail</p>
          <p>2020-2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
