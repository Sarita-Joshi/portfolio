
import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about building intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl flex items-center justify-center border border-gray-600/30">
                <User className="w-32 h-32 text-gray-400" />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Data Engineer
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Currently pursuing my M.S. in Computer Science at CSU Fullerton while working as an Engineering Intern at Mercedes-Benz R&D. My passion lies in building scalable data systems and AI-powered solutions that make a real impact.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 4 years of experience in data engineering and machine learning, I've had the privilege of working on projects that process millions of data points daily and serve thousands of users. From fraud detection systems to voice-enabled healthcare solutions, I love tackling complex technical challenges.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">300K+</div>
                  <div className="text-gray-400 text-sm">Events Processed Daily</div>
                </div>
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">4X</div>
                  <div className="text-gray-400 text-sm">Hackathon Winner</div>
                </div>
              </div>

              <Link 
                to="/blog"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Read My Story <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
