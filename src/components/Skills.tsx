
import React, { useEffect, useRef, useState } from 'react';
import { Brain, Cloud, Database } from 'lucide-react';

const Skills = () => {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6" />,
      skills: ["PyTorch", "TensorFlow", "BERT/GPT", "Scikit-learn", "NLP", "OpenAI API"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: ["Apache Spark", "Kafka", "ElasticSearch", "Databricks", "Apache Airflow", "ETL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Grafana"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const technologies = [
    { name: "Python", logo: "🐍" },
    { name: "JavaScript", logo: "🟨" },
    { name: "SQL", logo: "💾" },
    { name: "React", logo: "⚛️" },
    { name: "Node.js", logo: "🟢" },
    { name: "MongoDB", logo: "🍃" },
    { name: "Azure", logo: "☁️" },
    { name: "Docker", logo: "🐳" },
    { name: "Git", logo: "🔀" }
  ];

  const majorSkills = [
    { name: "Python", icon: "🐍", color: "text-blue-400" },
    { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "AWS", icon: "☁️", color: "text-orange-400" },
    { name: "Docker", icon: "🐳", color: "text-blue-500" },
    { name: "TensorFlow", icon: "🧠", color: "text-orange-500" },
    { name: "SQL", icon: "🗃️", color: "text-purple-400" },
    { name: "Kubernetes", icon: "⚙️", color: "text-cyan-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">
            Expertise in data engineering, ML, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700/50 text-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-600/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/*Animated Corousal*/}
        <div className="mb-16 overflow-hidden">
        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
          <div className="flex animate-pulse mb-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          
          <div className="overflow-hidden">
            <div className={`flex space-x-8 ${isVisible ? 'animate-scroll' : ''}`}>
              {[...majorSkills, ...majorSkills].map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                >
                  <div className={`text-4xl mb-2 ${skill.color} filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Technologies</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-700/50 rounded-lg p-3 text-center hover:bg-gray-600/50 transition-all duration-200 transform hover:scale-105"
              >
                <div className="text-2xl mb-1">{tech.logo}</div>
                <div className="text-xs text-gray-300 font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
