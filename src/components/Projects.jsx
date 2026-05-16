import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "FOODIEPEDIA",
    description: "A responsive web application utilizing HTML, CSS, JavaScript, and React. It features a robust search and filter system, categorized food listings, and a dynamic UI built with reusable React components.",
    image: "/foodiepedia.jpeg",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/Veenisha21",
    liveLink: "#"
  },
  {
    title: "VIRTUAL RESUME BUILDER",
    description: "An AI-powered web app that helps users create professional, job-optimized resumes. Built with HTML, CSS, Bootstrap for the frontend, and Python with OpenAI API for intelligent content generation.",
    image: "/virtual-resume.jpeg",
    techStack: ["Python", "OpenAI API", "Bootstrap", "HTML/CSS"],
    githubLink: "https://github.com/Veenisha21",
    liveLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Featured Projects" subtitle={true} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-primary/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1 line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-background bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
