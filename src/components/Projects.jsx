import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'FAQ Component',
    description: 'An interactive FAQ section built with animations to enhance user engagement and experience.',
    github: 'https://github.com/yourusername/faq-component',
  },
  {
    name: 'YouTube Clone',
    description: 'A simplified version of YouTube with video playback functionality using React and modern UI techniques.',
    github: 'https://github.com/yourusername/youtube-clone',
  },
  {
    name: 'Joke Generator',
    description: 'Generates random jokes using an external API, built with React hooks and state management.',
    github: 'https://github.com/yourusername/joke-generator',
  },
  {
    name: 'Pokedex',
    description: 'A dynamic Pokedex app built with APIs to search and display Pokemon data.',
    github: 'https://github.com/yourusername/pokedex',
  },
  {
    name: 'Customizable Dashboard',
    description: 'In progress. An application with customizable widgets for user data.',
    github: 'https://github.com/yourusername/customizable-dashboard',
  },
  {
    name: 'E-commerce Website',
    description: 'A static e-commerce landing page, showcasing modern UI/UX design principles.',
    github: 'https://github.com/yourusername/ecommerce-website',
  },
  {
    name: 'UserLogin',
    description: 'A fully functional user login interface with routing and state management.',
    github: 'https://github.com/yourusername/user-login',
  },
  {
    name: 'iTodo',
    description: 'A task management application with a sleek design and animations to improve productivity.',
    github: 'https://github.com/yourusername/itodo',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-black rounded-lg border-2 border-transparent overflow-hidden shadow-lg mb-8 md:h-64 flex flex-col md:flex-row transition-all"
      whileHover={{
        scale: 1.03, // Slightly lift the card on hover
        borderColor: '#ff9505', // Border color changes on hover
        backgroundColor: '#1c1c1e', // Subtle background color shift on hover
        boxShadow: '0px 0px 15px rgba(255, 149, 5, 0.7)', // Glowing effect around the card
      }}
      transition={{ duration: 0.4 }} // Smooth transition for the animations
    >
      <div className="md:w-1/3 relative overflow-hidden">
        {/* Placeholder for image */}
        <div className="w-full h-full bg-gray-800 flex justify-center items-center">
          <p className="text-neon-purple text-6xl font-bold">#</p>
        </div>
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <motion.h3
            className="text-2xl font-semibold mb-2 text-white transition-all"
            whileHover={{ color: '#ff9505' }} // Title color change on hover
          >
            {project.name}
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-4 transition-all"
            whileHover={{ color: '#ff9505' }} // Description color change on hover
          >
            {project.description}
          </motion.p>
        </div>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-neon-purple text-white py-2 px-4 rounded transition-colors duration-300 transform hover:bg-purple-500 hover:-translate-y-1"
          whileHover={{
            scale: 1.05, // Button scales up slightly on hover
            boxShadow: '0px 0px 8px rgba(255, 149, 5, 0.7)', // Glow effect on the button
          }}
          whileTap={{ scale: 0.95 }} // Tap effect for the button
        >
          View on GitHub
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-neon-purple">Projects</h2>
        {/* Render the animated project card for each project */}
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;




