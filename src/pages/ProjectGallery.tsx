
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Github, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { allProjects, categories } from '@/data/all_projects';
import { useState } from 'react';
import { motion } from "framer-motion";

const ProjectGallery = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredProjects = allProjects.filter(project => {
    if (selectedCategories.length === 0 || selectedCategories.includes("All")) return true;
    return selectedCategories.some(cat => project.category.includes(cat));
  });

  return (
    <div id='top' className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive portfolio showcasing data engineering, ML, and system automation projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full  text-sm font-medium mr-2 mb-2 hover:bg-gray-500/80 hover:text-white transition-all duration-200 text-sm
                ${selectedCategories.includes(cat) ? 'bg-gray-500/80' : 'bg-gray-800/80 text-gray-50'}`}
              onClick={() => {
                setSelectedCategories(prev =>
                  prev.includes(cat)
                    ? prev.filter(c => c !== cat)
                    : [...prev, cat]
                );
              }}
            >
              {cat}
            </button>
          ))}

        {selectedCategories.length > 0 && (
            <button
              className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-medium mr-2 mb-2"
              onClick={() => setSelectedCategories([])}
            >
              Clear Filters
            </button>
          )}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">

            <div className="grid md:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50"
  >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium px-3 py-1 mr-1 rounded-full text-sm font-medium">
                        {project.category[0]}
                      </span>
                      {project.featured && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                      <span className="text-sm font-medium text-gray-400">Key Metrics: </span>
                      <span className="text-sm text-blue-400 font-medium">{project.metrics}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-4">
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                      >
                        View Details <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                      {project.github && <Link className="pl-4 flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200"
                          to={project.github}
                        >
                        <Github className="mr-2 w-4 h-4" />
                        Code
                        <ExternalLink className="ml-2 w-4 h-4" />
                        </Link>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectGallery;
