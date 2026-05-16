import { FaGithub, FaLinkedin, FaCode, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t border-white/5 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">
            Designed & Developed with <span className="text-primary">♥</span> by 
            <span className="text-white font-medium ml-1">Veenisha</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <SocialLink href="https://github.com/Veenisha21" icon={<FaGithub />} />
          <SocialLink href="https://www.linkedin.com/in/veenisha" icon={<FaLinkedin />} />
          <SocialLink href="https://www.codechef.com/users/veenisha_23b1" icon={<FaCode />} />
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 group"
          title="Back to Top"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
