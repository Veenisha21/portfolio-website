import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" subtitle={true} />
        
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[64px]"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-lg text-gray-300 leading-relaxed space-y-6"
          >
            <p>
              I am a <span className="text-white font-semibold">B.Tech Computer Science and Technology (AIML)</span> student 
              at ABES Engineering College. I am deeply passionate about the intersection of <span className="text-gradient font-semibold">Web Development</span> and <span className="text-gradient font-semibold">Artificial Intelligence</span>.
            </p>
            
            <p>
              My focus lies in building modern, interactive, and highly responsive frontend applications while simultaneously exploring the 
              creation of scalable, AI-driven solutions. I thrive on bringing creative ideas to life through code.
            </p>

            <p>
              Beyond technical skills, I am a strong believer in the power of teamwork. Whether serving as the Treasurer of the Kalakrit Club 
              or coordinating large-scale campus events like Deepotsav, I constantly leverage my communication, problem-solving, and 
              organizational skills to deliver successful outcomes. I am always eager to learn, adapt, and tackle new challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
