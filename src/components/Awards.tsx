
import { Briefcase, Trophy, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { achievements } from '../data/achievements';
const Awards = () => {



  return (
        <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Enhanced Achievements Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">Recognition & Awards</h3>
            <p className="text-gray-300">4X Hackathon Winner - Innovative projects solving real-world problems</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30 hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                  <span className="text-yellow-400 text-sm font-medium bg-yellow-500/10 px-2 py-1 rounded">{achievement.year}</span>
                </div>
                
                <h5 className="text-blue-400 font-semibold mb-2 flex items-center">
                  {/* <ExternalLink className="w-4 h-4 mr-1" /> */}
                  {achievement.project}
                </h5>
                
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{achievement.description}</p>
                
                <div className="bg-green-500/10 rounded-lg p-2 mb-3">
                  <span className="text-green-400 text-sm font-medium">Impact: {achievement.impact}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {achievement.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
