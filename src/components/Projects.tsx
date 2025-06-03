import { ArrowRight, Star, Github, ExternalLink, Slice } from 'lucide-react';
import { Link } from 'react-router-dom';
import {allProjects} from "../data/all_projects";
import { motion } from "framer-motion";

const Projects = () => {

return (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-[80%] mx-auto">

      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Real-world applications in data engineering, ML, and system automation
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {allProjects
          .filter(project => project.featured)
          .slice(0, 3)
          .map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category[0]}
                  </span>
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
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
                  <button className="flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors duration-200">
                    <Github className="mr-1 w-4 h-4" />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link
          to="/projects"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
        >
          View All Projects
        </Link>
      </motion.div>
    </div>
  </section>
);

};

export default Projects;
