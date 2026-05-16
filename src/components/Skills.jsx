import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "SQL"]
  },
  {
    title: "Programming",
    skills: ["Java", "C"]
  },
  {
    title: "Core Subjects",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "DBMS"]
  },
  {
    title: "Extra",
    skills: ["Data Science"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Technical Skills" subtitle={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={itemVariants}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
