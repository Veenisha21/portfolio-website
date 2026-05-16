import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: "B.Tech - Computer Science and Technology (AIML)",
    institution: "ABES Engineering College, Ghaziabad",
    board: "AKTU",
    duration: "2023 - 2024",
    score: "CGPA: 7.2"
  },
  {
    degree: "Senior Secondary",
    institution: "Rainbow School, Saharanpur",
    board: "CBSE",
    duration: "2022 - 2023",
    score: "Percentage: 72%"
  },
  {
    degree: "Matriculate",
    institution: "Rainbow School, Saharanpur",
    board: "CBSE",
    duration: "2020 - 2021",
    score: "Percentage: 72%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Education" subtitle={true} />

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[43px] top-1.5 w-8 h-8 bg-background rounded-full border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                <FaGraduationCap className="text-primary text-sm" />
              </div>

              <div className="glass p-6 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-primary mt-1 md:mt-0 bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {edu.duration}
                  </span>
                </div>
                
                <h4 className="text-lg text-gray-300 mb-1">{edu.institution}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>Board: {edu.board}</span>
                  <span className="text-white font-medium">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
