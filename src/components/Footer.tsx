
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4x-4 sm:px-6 lg:px-8">


      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              Sarita Joshi
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
            I turn complex AI and backend systems into intelligent products that speak the language of business: speed, insight, and growth.            </p>
          </div>
          
          <div>
          <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <Coffee className="text-cyan-400 w-10 h-10" />
              Get In Touch
            </h3>
            <p className="max-w-1/2 text-gray-400 text-sm mb-6 mt-3">
              Open to opportunities in Software Engineering with MLOps
            </p>
            
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:joshisarita1311@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/sarita-joshi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-8 h-7" />
              </a>
              <a
                href="https://github.com/Sarita-Joshi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Github className="w-8 h-7" />
              </a>
            </div>
            
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
