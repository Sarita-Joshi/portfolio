import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Github, ExternalLink, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { allProjects } from '../data/all_projects';

const TagList = ({ tags = [] }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
      >
        {tag}
      </span>
    ))}
  </div>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState<string>('');
  const [project, setProject] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const proj = allProjects.find((pr) => pr.id.toString() === id);
      if (proj) {
        setProject(proj);
        setMarkdown(proj.content || '');
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <article className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
            <div className="p-8 md:p-12">
              {/* Top Tags and Featured */}
              {(project.tags?.length ?? 0) > 0 && (
                <div className="flex items-center justify-between mb-6">
                  <TagList tags={project.tags.slice(0, 3)} />
                  {project.featured && (
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  )}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {project.title || 'Untitled Project'}
              </h1>

              {/* Description */}
              {project.description && (
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
              )}

              {/* Date & Metrics */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {project.date && (
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Duration</h3>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                  </div>
                )}
                {project.metrics && (
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Key Metrics</h3>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {project.metrics}
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mb-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Markdown Content */}
              {markdown && (
                <div className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return !inline ? (
                          <pre className="bg-black text-green-300 p-4 rounded-md overflow-x-auto">
                            <code {...props}>{children}</code>
                          </pre>
                        ) : (
                          <code className="bg-gray-800 px-1 rounded">{children}</code>
                        );
                      },
                    }}
                    remarkPlugins={[remarkGfm]}
                  >
                    {markdown}
                  </ReactMarkdown>
                </div>
              )}

              {/* Bottom Tags */}
              {(project.tags?.length ?? 0) > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                  <TagList tags={project.tags} />
                </div>
              )}
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
