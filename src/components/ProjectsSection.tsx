import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import '../App.css'

const projects = [
  {
    title: "Devora",
    // TODO: Replace this image URL with a screenshot of your Devora dashboard
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1765887179/Screenshot_2025-12-16_at_5.40.07_PM_dmtbc3.png", 
    description:
      "A centralized developer portfolio aggregator that visualizes cross-platform data (GitHub & LeetCode) to create a dynamic 'proof-of-work' profile. It features automated data synchronization using GraphQL, SEO-friendly dynamic routing, and a high-performance database schema.",
    techstack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
      "Tailwind",
    ],
    github: "https://github.com/SSharma1103/devora",
    live: "https://devora-six.vercel.app/",
    features: [
      "GitHub & LeetCode data visualization",
      "Automated data synchronization",
      "SEO-friendly dynamic routing",
      "Secure OAuth authentication"
    ]
  },
  {
    title: "Heyllo.ai",
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1753271374/Screenshot_2025-07-23_at_5.19.20_PM_gkuvmm.png",
    description:
      "An AI-driven interview prep app that simulates real-time call interviews, dynamically generating follow-up questions based on your responses. After the session, it provides structured feedback and performance insights to help you improve confidently.",
    techstack: [
      "Next.js",
      "React",
      "Firebase",
      "Tailwind",
      "TypeScript",
      "shadcn",
      "LLM/AI-Integration",
    ],
    github: "https://github.com/srxshiv/heyllo.ai",
    live: "https://heylloai.vercel.app",
    features: [
      "Real-time AI interview simulation",
      "Dynamic follow-up question generation",
      "Structured performance feedback",
      "Progress tracking dashboard"
    ]
  },
  {
    title: "Uniwizz",
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1753271528/IMG_0490_md8el5.jpg",
    description:
      "A college-exclusive marketplace platform where students can buy/sell items, offer freelance services, and chat in real-time. Features include official university email verification, OTP-based login, image uploads, and a seamless user experience. Deployed on a VPS. Test it out - test@muj.manipal.edu pass-123456",
    techstack: [
      "React",
      "MongoDB",
      "JavaScript",
      "Tailwind",
      "Express",
      "WebSocket",
      "Node.js",
    ],
    github: "https://github.com/srxshiv/UniWizz-frontend",
    live: "https://www.uniwizz.in",
    features: [
      "University email verification system",
      "Real-time chat with WebSocket",
      "Marketplace for buying/selling",
      "Freelance services platform",
      "Image upload functionality"
    ]
  },
  {
    title: "Broke No More",
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1753394494/Screenshot_2025-07-25_at_3.20.32_AM_l33ytb.png",
    description:
      "A personal finance visualizer that helps users track spending through intuitive pie charts and graphs. It supports setting budgets, adding transactions, and categorizing expenses for clear, organized financial insights.",
    techstack: [
      "Next.js",
      "React",
      "MongoDB",
      "Tailwind",
      "TypeScript",
      "shadcn",
    ],
    github: "https://github.com/srxshiv/BrokeNoMore.git",
    live: "https://broke-no-more-seven.vercel.app",
    features: [
      "Interactive pie charts and graphs",
      "Budget setting and tracking",
      "Transaction categorization",
      "Financial insights dashboard"
    ]
  },
  {
    title: "Github-Profile-Analyzer",
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1753450510/Screenshot_2025-07-25_at_7.04.02_PM_kqoyag.png",
    description:
      "A tool to see all the repositories of a user and their contributions history visually.",
    techstack: [
      "React",
      "Tailwind",
      "TypeScript",
      "shadcn",
    ],
    github: "https://github.com/srxshiv/Github-Profile-Analyzer.git",
    live: "https://gitprofileanalyzer.vercel.app",
    features: [
      "Repository visualization",
      "Contribution history graphs",
      "User statistics display",
      "Interactive data charts"
    ]
  },
];

const techIcons = {
  React: "⚛️",
  "Node.js": "🟢",
  Express: "🚂",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  Prisma: "💎",
  GraphQL: "🕸️",
  TypeScript: "🔷",
  JavaScript: "🟨",
  Firebase: "🔥",
  Tailwind: "🎨",
  "Next.js": "▲",
  WebSocket: "🔌",
  shadcn: "🧩",
  "LLM/AI-Integration": "🧠",
  Redux: "📦",
};

export function ProjectsSection() {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    } 
  }, []);

  const toggleExpansion = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const allTechs = Array.from(
    new Set(projects.flatMap((project) => project.techstack))
  ).sort();

  const filteredProjects =
    selectedTechs.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTechs.some((tech) => project.techstack.includes(tech))
        );

  const toggleTech = (tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-[100vh] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h2
          className="pointer-events-none absolute left-1/2 top-[3rem] md:top-[10rem] -translate-x-1/2 text-[25vw] md:text-[22vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none"
          style={{
            transform: isMobile 
              ? `translateX(calc(-${scrollY * 0.5}px))`
              : `translateX(calc(-${scrollY * 1.2}px))`,
            transition: "transform 0.1s ease-out",
          }}
        >
          PROJECTS
        </h2>

        {/* Tech Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16 mt-8 md:mt-14 px-2"
        >
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center mb-6 md:mb-8">
            {allTechs.map((tech) => {
              const isSelected =
                selectedTechs.includes(tech) || selectedTechs.length === 0;
              return (
                <motion.button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-xs md:text-sm 
                    transition-colors duration-300 ease-out shadow-sm
                    ${
                      isSelected
                        ? "bg-black text-white dark:bg-white/40 dark:text-black shadow-md"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: isSelected
                      ? "0px 4px 12px rgba(0,0,0,0.25)"
                      : "0px 4px 8px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <span className="text-sm md:text-lg">
                    {techIcons[tech] || "🔧"}
                  </span>
                  <span>{tech}</span>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-3 md:gap-4 flex-wrap"
          >
            {selectedTechs.length > 0 && (
              <motion.button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-gray-100 dark:bg-gray-800 
                           text-gray-700 dark:text-gray-300 
                           transition-colors duration-300 ease-out 
                           hover:bg-gray-200 dark:hover:bg-gray-700 
                           shadow-sm hover:shadow-md"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                <X size={16} className="md:size-4" />
                {!isMobile && <span>Clear Filters</span>}
              </motion.button>
            )}

            <motion.button
              onClick={toggleShowAllProjects}
              className="flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-black text-white dark:bg-white dark:text-black 
                         transition-colors duration-300 ease-out 
                         hover:bg-gray-900 dark:hover:bg-gray-200 
                         shadow-sm hover:shadow-lg"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {showAllProjects ? (
                <>
                  <ChevronLeft size={16} className="md:size-4" />
                  {!isMobile && <span>Close All Projects</span>}
                </>
              ) : (
                <>
                  {!isMobile && <span>Show All Projects</span>}
                  <ChevronRight size={16} className="md:size-4" />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Projects Display */}
        {showAllProjects ? (
          // Grid layout with expandable cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-6 lg:px-12">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedCard === index;
              
              return (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  whileHover={{ y: isMobile ? 0 : -8 }}
                  layout
                  className={`group/item relative rounded-xl md:rounded-2xl overflow-hidden
                    transition-all duration-500 ease-out shadow-lg hover:shadow-2xl cursor-pointer
                    ${isExpanded ? 'h-auto min-h-[420px] md:min-h-[480px]' : 'h-[380px] md:h-[420px]'}
                    ${isExpanded ? 'col-span-full md:col-span-2 lg:col-span-1' : ''}`}
                  onClick={() => toggleExpansion(index)}
                >
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 
                        group-hover/item:scale-110"
                    />
                    {/* Dynamic Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300
                      ${isExpanded 
                        ? 'from-black/95 via-black/70 to-black/40'
                        : 'from-black/90 via-black/40 to-black/20 group-hover/item:from-black/95 group-hover/item:via-black/60 group-hover/item:to-black/30'
                      }`} />
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="text-white space-y-3"
                      layout
                    >
                      {/* Expand/Collapse Indicator */}
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1" />
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm
                            hover:bg-white/30 transition-colors"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <div className={isExpanded ? 'min-h-0' : 'min-h-[2.5rem] md:min-h-[3rem]'}>
                        <h3 className={`font-bold leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]
                          ${isExpanded ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg md:text-xl lg:text-2xl line-clamp-2'}`}>
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <motion.div 
                        layout
                        className={isExpanded ? 'min-h-0' : 'min-h-[4.5rem] md:min-h-[5rem]'}
                      >
                        <p className={`text-white/90 leading-relaxed [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)]
                          ${isExpanded 
                            ? 'text-base md:text-lg' 
                            : 'text-sm md:text-base line-clamp-3 md:line-clamp-4'
                          }`}>
                          {project.description}
                        </p>
                      </motion.div>

                      {/* Additional content when expanded */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="space-y-4"
                          >
                            {/* Key Features */}
                            {project.features && (
                              <div>
                                <h4 className="text-lg font-semibold mb-2 [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)]">
                                  Key Features
                                </h4>
                                <ul className="space-y-1 text-white/90 text-sm md:text-base">
                                  {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-white/60 mt-1">•</span>
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Tech Stack */}
                      <div className={`${isExpanded ? 'min-h-0' : 'min-h-[2rem]'} max-h-[6rem] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20`}>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techstack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded-full bg-white/15 backdrop-blur-sm
                                text-xs font-medium border border-white/20
                                hover:bg-white/25 transition-all duration-200
                                [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.08 }}
                        className={`flex gap-3 pt-2 ${
                          isMobile || isExpanded
                            ? 'opacity-100' 
                            : 'opacity-0 group-hover/item:opacity-100 translate-y-2 group-hover/item:translate-y-0'
                        } transition-all duration-300`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5
                            bg-white text-black text-sm font-semibold rounded-full
                            shadow-lg hover:shadow-xl hover:bg-gray-100
                            transition-all duration-200"
                        >
                          <ExternalLink size={14} className="md:w-4 md:h-4" />
                          Live Demo
                        </motion.a>
                        
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5
                            bg-black/50 backdrop-blur border border-white/30
                            text-white text-sm font-semibold rounded-full
                            shadow-lg hover:shadow-xl hover:bg-black/70 hover:border-white/50
                            transition-all duration-200"
                        >
                          <Github size={14} className="md:w-4 md:h-4" />
                          Code
                        </motion.a>
                      </motion.div>

                      {/* Click hint */}
                      {!isExpanded && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.7 }}
                          className="text-white/60 text-xs text-center mt-2 
                            [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]"
                        >
                          Click to read more
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          // Carousel layout (unchanged)
          <div className="relative px-2 md:px-0">
            <button 
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({
                    left: -carouselRef.current.offsetWidth * 0.8,
                    behavior: 'smooth'
                  });
                }
              }}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-black/10 dark:border-white/10 shadow-lg hover:bg-white dark:hover:bg-black transition-colors duration-200"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} className="text-black dark:text-white drop-shadow" />
            </button>

            <div
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide pb-4 md:pb-6 gap-4 md:gap-6 snap-x snap-mandatory pl-[5vw] md:pl-0"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] snap-start transform-gpu transition-all duration-300 will-change-transform hover:scale-[1.02]"
                >
                  <div className="relative h-[50vh] md:h-[60vh] rounded-xl md:rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-500 group-hover:bg-black/60" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:pb-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.08 }}
                        className="text-white"
                      >
                        <h3 className="text-2xl font-semibold mb-2 transition-all duration-300 group-hover:mb-3 group-hover:-translate-y-1 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 mb-4 transition-all duration-300 group-hover:text-gray-100 group-hover:mb-5 group-hover:-translate-y-0.5 [text-shadow:_0_1px_3px_rgba(0,0,0,0.6)] line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4 transition-all duration-300 group-hover:mb-5">
                          {project.techstack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs transition-colors duration-300 group-hover:bg-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.08 + 0.2 }}
                          className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-200"
                          >
                            <ExternalLink size={16} />
                            Live
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/30 rounded-full hover:bg-black/70 transition duration-200"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollBy({
                    left: carouselRef.current.offsetWidth * 0.8,
                    behavior: 'smooth'
                  });
                }
              }}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-black/10 dark:border-white/10 shadow-lg hover:bg-white dark:hover:bg-black transition-colors duration-200"
              aria-label="Next project"
            >
              <ChevronRight size={24} className="text-black dark:text-white drop-shadow" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}