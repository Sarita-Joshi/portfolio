import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechnicalSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const majorSkills = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      color: "text-blue-400"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      color: "text-yellow-400"
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      color: "text-cyan-400"
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      color: "text-blue-500"
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      color: "text-blue-500"
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      color: "text-orange-500"
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      color: "text-purple-400"
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      color: "text-cyan-500"
    }
  ];
  

  const skillCategories = {
    "Programming Languages": {
      skills: [
        { name: "Python", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className=" w-4 h-4"/>
         },
        { name: "JavaScript", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className=" w-4 h-4"/>
         },
        { name: "TypeScript", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className=" w-4 h-4"/>
         },
        { name: "SQL", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" className=" w-4 h-4"/>
         },
        { name: "HTML5", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className=" w-4 h-4"/>
         },
        { name: "CSS3", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className=" w-4 h-4"/>
         }
      ],
      concepts: [ "OOP", "Async/Await", "Data Structures & Algorithms", "Debugging", "Error Handling"],
      color: "border-purple-300/30 bg-purple-300/10",
      theme: "text-purple-300",
      gradient: "from-purple-500 to-pink-500",
    },
  
    "API and Web development": {
      skills: [
        
        { name: "FastAPI", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" className=" w-4 h-4"/>
         },
         { name: "Flask", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" className=" w-4 h-4"/>
         },
         { name: "Node.js", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className=" w-4 h-4"/>
         },
         { name: "Express", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className=" w-4 h-4"/>
         },
         { name: "React.js", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className=" w-4 h-4"/>
         },
        { name : "TailwindCSS", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className=" w-4 h-4"/>
        },
         
      ],
      concepts:[
        "REST",
        "Pydantic",
        "Middleware",
        "Hooks & State", 
        "Server-Side Rendering",
        "API Auth"
    ],
      color: "border-cyan-300/30 bg-cyan-300/10",
      theme: "text-cyan-300",
      gradient: "from-cyan-500 to-blue-500",
    },
  
    "Cloud and Database Management": {
      skills: [
        { name: "Azure", logo:  
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" className="w-4 h-4"/>
        },
        { name: "AWS", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className=" w-4 h-4"/>
         },
        { name: "Salesforce", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" className=" w-4 h-4"/>
         },
        { name: "MongoDB", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className=" w-4 h-4"/>
         },
        { name: "MySQL", logo: 
          <i className="devicon-mysql-original w-4 h-4"></i>
         },
        { name: "PostgreSQL", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className=" w-4 h-4"/>
         },
        { name: "CosmosDB", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cosmosdb/cosmosdb-original.svg" className=" w-4 h-4"/>
         },
        { name: "ElasticSearch", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" className=" w-3 h-3"/>
         },
        { name: "AzureSQL", logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" className=" w-3 h-3"/> }
      ],
      concepts:["Query Optimization", "Sharding", "Replication", "Vector DBs"],
      color: "border-green-300/30 bg-green-300/10",
      theme: "text-green-300",
      gradient: "from-green-500 to-emerald-500",
    },
  
    "ML & AI Tools": {
      skills: [
        { name: "Pandas", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" className=" w-4 h-4"/>
         },
        { name: "NumPy", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" className=" w-4 h-4"/>
         },
        { name: "PyTorch", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" className=" w-4 h-4"/>
         },
        { name: "TensorFlow", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" className=" w-4 h-4"/>
         },
        { name: "Scikit-learn", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" className=" w-4 h-4"/>
         },
        { name: "Transformers", logo: <img src="/assets/logos/hf.svg" className=" w-4 h-4"/> },
        { name: "LangChain", logo: <img src="/assets/logos/langchain.png" className=" w-5 h-5"/>},
      ],
      concepts:["LLMs", "RAG", "Prompt Tuning", "Embeddings", "Token Limit", "Fine-tuning"],
      color: "border-blue-300/30 bg-blue-300/10",
      theme: "text-blue-300",
      gradient: "from-blue-500 to-cyan-500",
    },
  
    "Data Engineering": {
      skills: [
        { name: "Apache Spark", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" className=" w-4 h-4"/>          
         },
        { name: "Kafka", logo: 
          <i className="devicon-apachekafka-original w-4 h-4"></i>
         },
        { name: "Airflow", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg" className=" w-4 h-4"/>
         },
         { name: "Databricks", logo: <img src="/assets/logos/databricks.png" className=" w-4 h-4"/> },
         { name: "Blob Storage", logo: <img src="/assets/logos/blob.png" className=" w-4 h-4"/> },
        { name: "Synapse", logo: <img src="/assets/logos/synapse.png" className=" w-4 h-4"/> },
        { name: "Powerbi", logo: <img src="/assets/logos/powerbi.png" className=" w-4 h-4"/> }
      ],
      concepts:[ "ETL/ELT", "Batch vs Streaming", "Data Warehouse", "Airflow DAGs", "A/B Testing"],
      color: "border-pink-300/30 bg-pink-300/10",
      theme: "text-pink-300",
      gradient: "from-pink-500 to-red-500"
    },

      
    "DevOps & Tools": {
      skills: [
        { name: "Docker", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className=" w-4 h-4"/>
         },
        { name: "Kubernetes", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" className=" w-4 h-4"/>
         },
        { name: "Git", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className=" w-4 h-4"/>
         },
        { name: "Azure DevOps", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg" className=" w-4 h-4"/>
         },
        { name: "Grafana", logo: <img src="/assets/logos/graphana.png" className=" w-4 h-4"/> },
        { name: "Kibana", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg" className=" w-4 h-4"/>
         },
        { name: "Prometheus", logo: 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" className=" w-4 h-4"/>
         }
      ],
      concepts:[ "CI/CD", "Containerization","Helm", "GitHub Actions", "Monitoring", "Pod Logs", "IaC"],
      color: "border-orange-300/30 bg-orange-300/10",
      theme: "text-orange-300",
      gradient: "from-yellow-500 to-orange-500"
    },
  };
  

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
    <section ref={sectionRef} id="skills" className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">
            Expertise in data engineering, ML, and cloud technologies
          </p>
        </div>
      
      {/* Animated Skill Carousel */}
      <div className="mb-16 overflow-hidden">
        <div className="relative bg-gray-800/10 backdrop-blur-sm  border border-gray-700/10 py-4">
          <div className="flex animate-pulse pl-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          
          <div className="overflow-hidden">
            <div className={`flex space-x-8 animate-scroll`}>
              {[...majorSkills, ...majorSkills, ...majorSkills].map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col pt-4 items-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                >
                  <img src={skill.logo} className="w-8 h-8 filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"/>
                  
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categorized Skill Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillCategories).map(([category, { skills, color, theme, gradient, concepts }], index) => (
          <Card 
            key={category} 
            className={`border-gray-700/50 bg-gray-800/80 border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-300/10 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader className="pb-3">
              <CardTitle className={`pb-3 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className={`${color} text-white flex items-center gap-2 text-base hover:scale-105 transition-transform duration-200 cursor-pointer`}
                >
                  {skill.logo}
                  {skill.name}
                </Badge>
                ))}
                {concepts.map((concept) => (
                  <Badge 
                    key={concept} 
                    variant="outline" 
                    className={`text-xs ${theme} border border-gray-600 bg-gray-800/40 hover:scale-105 transition-transform duration-200`}
                  >
                    {concept}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
