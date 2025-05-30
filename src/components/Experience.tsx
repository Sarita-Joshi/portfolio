import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Engineering Intern – Vehicle Speech Recognition",
      company: "Mercedes-Benz R&D North America",
      location: "Long Beach, CA",
      period: "Jan 2025 – May 2025",
      description:
        "Engineering advanced speech recognition systems for next-generation MBUX integration in cloud-connected embedded environments.",
      achievements: [
        "Created E2E test automation tool reducing development testing time by 33%",
        "Designed multi-process Python workflows for ECU communication and audio processing",
        "Collaborated with regional teams in Agile environment for MBUX integration goals",
      ],
      current: true,
    },
    {
      title: "Data Engineer",
      company: "Bajaj Finserv Health Ltd",
      location: "India",
      period: "Jun 2021 - Dec 2023",
      description:
        "Led data engineering initiatives, building scalable systems and AI-powered solutions for healthcare technology platform.",
      achievements: [
        "Architected high-performance search engine with <30ms response times and 70% CTR",
        "Built real-time event-driven integration system processing 300K+ webhook events/day",
        "Developed GenAI chatbot automating 30% of tickets with <2% reopen rate",
        "Deployed production models using CI/CD, Kubernetes, and comprehensive monitoring",
      ],
      current: false,
    },
    {
      title: "Data Engineering Intern",
      company: "Bajaj Finserv Health Ltd",
      location: "India",
      period: "Sep 2020 – May 2021",
      description:
        "Built foundational data infrastructure and ETL pipelines for healthcare analytics and machine learning applications.",
      achievements: [
        "Engineered Spark ETL pipelines processing ~8GB/day via Kafka and ADF",
        "Powered sales propensity model for 2M+ leads, doubling campaign conversions",
        "Created Python toolkit for data ingestion adopted across engineering teams",
        "Optimized data lake workflows integrating Blob Storage, Synapse, and Databricks",
      ],
      current: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="pt-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300">
            Journey in data engineering, ML systems, and automotive technology
          </p>
        </div>

        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-4 md:left-1/4 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 last:mb-0 transform transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div
                className={`hidden md:block absolute left-2 md:left-1/4 md:transform md:-translate-x-1/2 w-4 h-4 bg-gray-900 border-4 rounded-full ${
                  exp.current ? 'border-green-400' : 'border-blue-400'
                }`}
              ></div>

              {/* Date Badge */}
              <div className="hidden md:block ml-12 md:ml-0 md:ml-auto md:pl-8">
                <span className="bg-gray-700 text-blue-400 px-4 py-1 rounded-full text-lg font-semibold whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Card */}
              <div className="md:ml-0 md:ml-auto md:w-3/4 md:pl-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-lg hover:shadow-cyan-300/10 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-sm font-medium text-blue-400">{exp.period}</span>
                    {exp.current && (
                      <span className="ml-2 bg-green-800 text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-blue-400 mb-1">{exp.company}</h4>
                  <p className="text-sm text-gray-400 mb-4">{exp.location}</p>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-200 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
