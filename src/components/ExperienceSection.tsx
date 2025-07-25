import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Freelance Gig",
    position: "Website Developer",
    duration: "2022 - 2022",
    location: "Remote",
    description: "Created a Portfolio Website for a client ",
    achievements: ["Only using Vanila html , css and javascript"],
    tech: ["Html", "CSS", "javascript"],
  }
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
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <h2
          className="pointer-events-none absolute left-1/2 top-[28rem] -translate-x-1/2 text-[30vw] md:text-[15vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none"
          style={{
            transform: `translate(-50%, calc(-${scrollY * 0.3}px))`,
            transition: "transform 0.1s ease-out",
          }}
        >
          EXPERIENCE
        </h2>

        <div className="relative">
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
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-surface shadow-lg z-10"></div>

              {/* Content */}
              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-surface border border-border rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-accent-blue font-medium mb-2">
                        <Building size={16} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-text-secondary">
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

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-surface-secondary text-text-secondary rounded-full border border-border"
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
