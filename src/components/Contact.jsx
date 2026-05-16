import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCopy } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("veenishachikara@gmail.com");
    toast.success("Email copied to clipboard!", {
      position: "bottom-right",
      theme: "dark",
      autoClose: 2000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree integration placeholder. 
      // Replace the URL with your actual Formspree endpoint string (e.g., "https://formspree.io/f/your_id")
      const formspreeUrl = "https://formspree.io/f/placeholder"; 
      
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent successfully!", { theme: "dark" });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Formspree URL is not configured. Please add your Formspree ID in Contact.jsx.", { theme: "dark" });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", { theme: "dark" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-black/20">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get In Touch" subtitle={true} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
            <p className="text-gray-400 mb-10 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg text-white font-medium">veenishachikara@gmail.com</p>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                  title="Copy Email"
                >
                  <FaCopy size={18} />
                </button>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg text-white font-medium">+91 6396095873</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg text-white font-medium">Ghaziabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Hello Veenisha, I would like to talk about..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
