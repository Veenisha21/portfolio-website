import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaUsers, FaCalendarAlt } from 'react-icons/fa';

const activitiesData = [
  {
    role: "Treasurer",
    organization: "Kalakrit Club ABESEC",
    date: "June 2025 - July 2026",
    description: "Led financial management, budgeting, and expense tracking as Treasurer of Kalakrit Club, maintaining transparent records and allocating funds for events.",
    icon: <FaUsers className="text-primary" size={20} />
  },
  {
    role: "Core Contributor",
    organization: "Deepotsav ABESEC",
    date: "Annual Event",
    description: "Contributed to planning, organizing, and executing campus-wide Diwali celebrations, managing logistics and coordinating events.",
    icon: <FaCalendarAlt className="text-secondary" size={20} />
  }
];

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Extracurricular" subtitle={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activitiesData.map((activity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              {/* Background gradient effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full -z-10 group-hover:from-primary/10 transition-colors duration-500"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activity.role}</h3>
                  <p className="text-sm font-medium text-gray-400">{activity.organization}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {activity.description}
              </p>

              <div className="inline-block px-3 py-1 rounded bg-white/5 text-xs font-medium text-gray-400">
                {activity.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
