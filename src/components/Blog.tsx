import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Real-time Data Pipelines with Apache Spark and Kafka",
      excerpt: "Deep dive into architecting scalable data pipelines that process hundreds of thousands of events daily with sub-second latency.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Data Engineering"
    },
    {
      id: 2,
      title: "Optimizing BERT Models for Production: Lessons from Healthcare NLP",
      excerpt: "Practical insights from fine-tuning BERT for medical terminology recognition and achieving 85% NER accuracy in production systems.",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "From Hackathon to Production: Scaling AI Solutions",
      excerpt: "How winning multiple hackathons taught me to rapidly prototype AI solutions and scale them for real-world deployment.",
      date: "January 15, 2024",
      readTime: "5 min read",
      category: "AI/ML"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sharing knowledge on data engineering, ML systems, and real-world AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <FileText className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
