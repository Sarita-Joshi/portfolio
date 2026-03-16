import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from "framer-motion";

const COLLAPSED_BULLETS = 3;

function ExperienceCard({ exp }: { exp: any }) {
  const [open, setOpen] = useState(false);

  const shouldShowToggle =
    (exp?.achievements?.length || 0) > COLLAPSED_BULLETS ||
    (exp?.description?.length || 0) > 160;

  const visibleAchievements = open
    ? exp.achievements
    : exp.achievements.slice(0, COLLAPSED_BULLETS);

  return (
    <div className="md:ml-0 md:ml-auto md:w-3/4 md:pl-8">
      <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-lg hover:shadow-cyan-300/10 hover:scale-105 transition-all duration-300">
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

        {/* Description (clamped on mobile when closed) */}
        <div className="relative">
          <p
            className={[
              "text-gray-300 leading-relaxed mb-4",
              // If you don't have the Tailwind line-clamp plugin, replace with inline styles (see below).
              open ? "" : "line-clamp-4 md:line-clamp-none",
            ].join(" ")}
            /* Fallback if you don't use line-clamp plugin:
            style={open ? {} : {
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }} */
          >
            {exp.description}
          </p>

          {/* Soft fade only on mobile & when collapsed */}
          {!open && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 md:hidden bg-gradient-to-t from-gray-800/90 to-transparent rounded-b-2xl" />
          )}
        </div>

        {/* Achievements (trimmed on mobile when closed) */}
        <ul className="space-y-2">
          {visibleAchievements.map((achievement: string, achIndex: number) => (
            <li key={achIndex} className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-200 text-sm">{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Toggle button (mobile only) */}
        {shouldShowToggle && (
          <button
            onClick={() => setOpen(v => !v)}
            className="mt-4 md:hidden inline-flex items-center gap-1 text-sm font-medium text-cyan-300 hover:text-cyan-200"
            aria-expanded={open}
            aria-label={open ? "View less" : "View more"}
          >
            {open ? (
              <>
                View less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View more <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

const Experience = () => {

  const experiences = [
  {
    title: "Software Engineering Intern – Speech AI",
    company: "Mercedes-Benz R&D North America",
    location: "Long Beach, CA",
    period: "Jan 2025 – May 2025",
    description:
      "Developed automation and AI validation tools for in-vehicle speech and NLP systems powering next-generation MBUX experiences.",
    achievements: [
      "Engineered a Python-based test automation platform integrating LLMs to validate dialog accuracy, reducing regression time by 85%. (4 min -> 30 sec)",
      "Automated QA for 250+ speech scenarios via multi-process pipelines, ECU communication, log analysis, and audio data processing to streamline testing workflows.",
      "Performed data aggregation and trend analysis on speech logs and accuracy metrics using Python and Pandas to generate BI reports for evaluation.",
      "Partnered with engineers to debug model and system interactions, improving test reliability and coverage by 48%.",
    ],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Bajaj Finserv Health Ltd",
    location: "India",
    period: "Jan 2021 – Dec 2023",
    description:
      "Led cross-functional engineering and initiatives, building data-driven backend systems and AI automation for a large-scale healthcare platform.",
    achievements: [
      "Developed distributed microservices and event-driven architectures across 22+ systems, supporting 300k+ events/day, improving scalability and uptime.",
      "Built LLM-driven chatbots and automation workflows (OpenAI, LangChain, Salesforce) for ticket triaging and auto-resolving 30% of customer support queries and saving 320+ hrs/month.",
      "Designed and deployed high-traffic search APIs (Elasticsearch, Redis, Node.js) with NLP-based ranking, achieving sub-30 ms latency and 70% CTR, serving 1M+ requests daily",
      "Enhanced claim tracking and CX analytics to identify service bottlenecks and operational KPIs driving a 15% improvement in satisfaction scores.",
      "Implemented data pipelines and model monitoring in Azure using Docker, Kubernetes, and CI/CD to operationalize ML workflows.",
      "Enhanced observability with Grafana and Prometheus dashboards, reducing daily errors by 75% and accelerating root-cause analysis.",
  
    ],
    current: false,
  },
  {
    title: "Software Engineering Intern",
    company: "Bajaj Finserv Health Ltd",
    location: "India",
    period: "Sep 2020 – Jan 2021",
    description:
      "Contributed to backend and data infrastructure development supporting analytics and predictive modeling efforts.",
    achievements: [
      "Built a real-time document validation microservice and data models for claims processing, cutting review time by 20%.",
      "Built sales propensity and lead-targeting models on 2M+ records, boosting marketing conversion rates by 2×.",
      "Developed ETL pipelines and REST APIs integrating Kafka, Spark, and Azure SQL, improving data accessibility and transfer efficiency by 25%.",
      "Created test automation and QA coverage (Jest, Postman, Selenium) increasing reliability and reducing deployment defects by 30%.",
    ],
    current: false,
  },
];

return (
  <section id="experience" className="pt-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
    <div className="max-w-7xl mx-auto">
      
      {/* Section Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Professional Experience
        </h2>
        <p className="text-xl text-gray-300">
          Journey in technology, AI, and scalable systems
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative mb-16">
        <div className="hidden md:block absolute left-4 md:left-1/4 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>

        {/* Timeline Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div
                className={`hidden md:block absolute left-2 md:left-1/4 md:transform md:-translate-x-1/2 w-4 h-4 bg-gray-900 border-4 rounded-full ${
                  exp.current ? "border-green-400" : "border-blue-400"
                }`}
              ></div>

              {/* Date Badge */}
              <div className="hidden md:block ml-12 md:ml-0 md:ml-auto md:pl-8">
                <span className="bg-gray-700 text-blue-400 px-4 py-1 rounded-full text-lg font-semibold whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Card */}
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

};

export default Experience;
