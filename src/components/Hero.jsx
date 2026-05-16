import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const titles = [
  "AI/ML Student",
  "Full Stack Developer",
  "React Developer",
  "Problem Solver"
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-secondary font-medium tracking-wide mb-4"
            >
              Hi there, I am
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Veenisha
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 mb-8 text-2xl md:text-3xl text-gray-300 font-medium flex items-center justify-center md:justify-start"
            >
              <span className="mr-2">I am a</span>
              <div className="relative overflow-hidden h-full flex items-center w-64">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-gradient font-bold"
                  >
                    {titles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
            >
              <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 rounded-full glass glass-hover text-white font-medium">
                Contact Me
              </a>
              {/* Optional: Download Resume button */}
              {/* <a href="/resume.pdf" download className="px-8 py-3 rounded-full glass glass-hover text-white font-medium">
                Resume
              </a> */}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              <SocialIcon href="https://github.com/Veenisha21" icon={<FaGithub size={24} />} />
              <SocialIcon href="https://www.linkedin.com/in/veenisha" icon={<FaLinkedin size={24} />} />
              <SocialIcon href="https://www.codechef.com/users/veenisha_23b1" icon={<FaCode size={24} />} />
              <SocialIcon href="mailto:veenishachikara@gmail.com" icon={<FaEnvelope size={24} />} />
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-primary to-secondary">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-card">
                {/* 
                  TODO: The image should now load automatically if you placed it correctly.
                */}
                <img 
                  src="/profile.jpg" 
                  alt="Veenisha" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;
