import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaCertificate } from 'react-icons/fa';

const certsData = [
  {
    title: "AWS Services Fundamentals",
    issuer: "AWS Academy",
    date: "Dec 2024",
    iconColor: "text-orange-500",
    bgGlow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Academy",
    date: "Dec 2024",
    iconColor: "text-orange-400",
    bgGlow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]"
  },
  {
    title: "HCL Upskill India",
    issuer: "HCL GUVI Platform",
    date: "Sep 2025",
    iconColor: "text-blue-500",
    bgGlow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Certifications" subtitle={true} />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certsData.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group glass p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 ${cert.bgGlow} hover:-translate-y-1 hover:border-white/20`}
            >
              <div className={`mt-1 p-3 rounded-full bg-white/5 ${cert.iconColor}`}>
                <FaCertificate size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gradient transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded text-gray-300">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
