import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: 'Indian Institute of Technology Madras',
    degree: 'B.Tech in Civil Engineering',
    year: '2023 - Present',
    grade: 'CGPA: 8.63',
  },
  {
    school: 'Burnpur Riverside School, Chittaranjan',
    degree: 'Class 12 CBSE',
    year: '2023',
    grade: 'Percentage: 96.2%',
  },
  {
    school: 'Burnpur Riverside School, Chittaranjan',
    degree: 'Class 10 CBSE',
    year: '2021',
    grade: 'Percentage: 89.6%',
  },
];

const Education = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school + edu.year}
              className="bg-dark-blue rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-80"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{edu.school}</h3>
              <p className="text-xl text-gray-300 mb-1">{edu.degree}</p>
              <p className="text-gray-400">{edu.year}</p>
              <p className="text-gray-400 font-semibold mt-2">{edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;