import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { motion } from "framer-motion";


const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "California State University, Fullerton",
      location: "Fullerton, CA",
      period: "Jan 2024 - May 2025",
      gpa: "4/4",
      coursework: [
        "Advanced Algorithms & Data Structures",
        "Machine Learning & Deep Learning",
        "Distributed Systems & Cloud Computing",
      ],
      current: true,
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Pune University",
      location: "Pune, India",
      period: "Aug 2016 - May 2020",
      gpa: "9.5/10",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering",
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
  <section id="education" ref={sectionRef} className="py-20 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Education
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          Academic foundation in computer science and engineering
        </p>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-gray-800/80 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm shadow-lg hover:shadow-cyan-300/10 hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-400 font-semibold">{edu.institution}</h4>
                  </div>
                </div>
                {edu.current && (
                  <span className="bg-green-800 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{edu.location}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{edu.period}</span>
                </div>
                <div className="text-sm text-gray-400">
                  <span className="font-medium">GPA: </span>
                  <span className="text-green-400 font-semibold">{edu.gpa}</span>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-3">
                  Relevant Coursework:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm transition-transform duration-200 hover:scale-105"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

};

export default Education;
