
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              Sarita Joshi
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
            “Engineer blending AI, backend systems, and data infrastructure to turn ideas into intelligent, scalable products — from ETL and analytics to autonomous LLM agents and blockchain platforms.”
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li><a href="#hero" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Coffee className="text-cyan-400 w-10 h-10" />
              Get In Touch
            </h3>
            
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:joshisarita1311@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/sarita-joshi"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-8 h-7" />
              </a>
              <a
                href="https://github.com/Sarita-Joshi"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Github className="w-8 h-7" />
              </a>
            </div>
            <p className="text-gray-300 text-md">
              Open to opportunities in Data Engineering, ML Engineering, and Full-Stack Development
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-5 pt-5 text-center">
          <p className="text-gray-400">
            © 2024 Sarita Joshi. Built with React & Tailwind CSS. 
            <span className="text-blue-400 ml-2">Always learning, always building.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
