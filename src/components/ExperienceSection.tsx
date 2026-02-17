import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Harshey Health Care Hospital",
    position: "Full Stack Developer",
    duration: "Dec 2022 - Jan 2023",
    location: "Remote",
    description:
      "Engineered a comprehensive Clinic Management System supporting 2–3 doctors and managing 200+ patient records to digitize daily operations.",
    achievements: [
      "Implemented secure token-based authentication for patient management, significantly reducing manual scheduling time.",
      "Designed RESTful APIs to optimize database operations for medical histories and billing.",
      "Achieved sub-200ms data retrieval speeds through optimized MongoDB queries."
    ],
    tech: ["ReactJS", "Express.js", "MongoDB", "Node.js", "REST APIs"],
  },
  {
    company: "Messy Programmer",
    position: "AI Fullstack Developer",
    duration: "Jan 2026 - Present",
    location: "Cooch Behar, West Bengal",
    description:
      "Building high-performance AI-driven fullstack applications end-to-end using a TypeScript-first stack with modern cloud and automation tooling.",
    achievements: [
      "Engineered scalable fullstack apps using Next.js, React, Node.js, and TypeScript, with Dockerized services for consistent deployments.",
      "Architected backend systems with PostgreSQL, MongoDB, and Firebase, implementing secure OAuth 2.0 authentication and data workflows.",
      "Developed complex workflow automations using n8n, Zapier, and Pipedream with custom APIs and webhooks.",
      "Integrated GoHighLevel ecosystems and built internal tools using Retool, Payload CMS, and Directus.",
      "Built and deployed cross-platform mobile apps using React Native."
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Docker",
      "OAuth 2.0",
      "n8n",
      "Zapier",
      "Pipedream",
      "GoHighLevel",
      "Retool",
      "Payload CMS",
      "Directus",
      "React Native"
    ],
  },
];


export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-[100vh] py-32 px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <h2
          className="pointer-events-none absolute right-[140rem] top-0 -translate-x-1/2 text-[30vw] md:text-[20vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none"
          style={{
            transform: `translateX(calc(${scrollY * 1.7}px))`,
            transition: "transform 0.1s ease-out",
          }}
        >
          EXPERIENCE
        </h2>

        <div className="relative md:mt-[10rem] mt-12">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

              {/* Content */}
              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-2">
                        <Building size={16} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}