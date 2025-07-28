import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

import '../App.css'

const projects = [
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
  },
  {
    title: "Github-Profile-Analyzer",
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1753450510/Screenshot_2025-07-25_at_7.04.02_PM_kqoyag.png",
    description:
      "A tool to see all the repoistories of a user and their contributions history visually.",
    techstack: [
      "React",
      "Tailwind",
      "TypeScript",
      "shadcn",
    ],
    github: "https://github.com/srxshiv/Github-Profile-Analyzer.git",
    live: "https://gitprofileanalyzer.vercel.app",
  },
];

const techIcons: Record<string, string> = {
  React: "⚛️",
  "Node.js": "🟢",
  Express: "🚂",
  MongoDB: "🍃",
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
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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
    return () =>{
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    } 
  }, []);
  

  const allTechs = Array.from(
    new Set(projects.flatMap((project) => project.techstack))
  ).sort();

  const filteredProjects =
    selectedTechs.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTechs.some((tech) => project.techstack.includes(tech))
        );

  const toggleTech = (tech: string) => {
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
        {/* Title Section - Mobile Adjusted */}
        <h2
          className="pointer-events-none absolute left-1/2 top-[3rem] md:top-[10rem] -translate-x-1/2 text-[25vw] md:text-[22vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none"
          style={{
            transform: isMobile 
              ? `translateX(calc(-${scrollY * 0.5}px))`  // Slower scroll effect on mobile
              : `translateX(calc(-${scrollY * 1.2}px))`,
            transition: "transform 0.1s ease-out",
          }}
        >
          PROJECTS
        </h2>

        {/* Tech Filter Buttons - Mobile Adjusted */}
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
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full transition-all duration-200 font-medium text-xs md:text-sm ${
                    isSelected
                      ? "bg-black text-white dark:bg-white/40 dark:text-black"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="text-sm md:text-lg">{techIcons[tech] || "🔧"}</span>
                  <span>{tech}</span>
                </button>
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
                className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={14} className="md:size-4" />
                {!isMobile && <span>Clear filters</span>}
              </motion.button>
            )}
            <motion.button
              onClick={toggleShowAllProjects}
              className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all text-xs md:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? (
                <>
                  <ChevronLeft size={14} className="md:size-4" />
                  {!isMobile && <span>Close All Projects</span>}
                </>
              ) : (
                <>
                  {!isMobile && <span>Show All Projects</span>}
                  <ChevronRight size={14} className="md:size-4" />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Projects Display - Mobile Adjusted */}
        {showAllProjects ? (
          // Grid layout for all projects - Mobile Adjusted
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-6 lg:px-12">
  {filteredProjects.map((project, index) => {    
    return (
      <motion.div
        key={`${project.title}-${index}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
        whileHover={{ y: isMobile ? 0 : -8 }}
        className="group/item relative h-auto min-h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden transition-transform duration-300 ease-out"
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 filter blur-sm group-hover/item:blur-none group-hover/item:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-500 group-hover/item:bg-black/60" />

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-300 group-hover/item:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.08 }}
            className="text-white"
          >
            {/* Title - clickable only on mobile */}
            <h3 
              className="text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 group-hover/item:mb-3 group-hover/item:-translate-y-1 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)] md:line-clamp-none"
              onClick={() => isMobile && setIsExpanded(!isExpanded)}
            >
              {project.title}
            </h3>

            {/* Description - clickable only on mobile */}
            <div 
              className={`relative ${isMobile ? 'cursor-pointer' : ''}`}
              onClick={() => isMobile && setIsExpanded(!isExpanded)}
            >
              <p className={`
                text-white/90 text-sm md:text-base mb-3 md:mb-4 
                transition-all duration-300 group-hover:text-white 
                group-hover:mb-5 group-hover:-translate-y-0.5 
                [text-shadow:_0_1px_3px_rgba(0,0,0,0.7)]
                ${isMobile && !isExpanded ? 'line-clamp-3' : ''}
              `}>
                {project.description}
              </p>
              {isMobile && !isExpanded && (
                <div className="absolute bottom-0 right-0 shadow-lg rounded-full w-1/3 h-6 flex items-center justify-end p-4">
                  <ChevronDown className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Tech stack - unchanged */}
            <div className="flex flex-nowrap md:flex-wrap gap-2 mb-3 md:mb-4 transition-all duration-300 group-hover/item:mb-5 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {project.techstack.map((tech) => (
                <span
                  key={tech}
                  className="flex-shrink-0 px-2 py-1 rounded-full bg-white/20 backdrop-blur text-xs transition-colors duration-300 group-hover/item:bg-white/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons - unchanged */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.08 + 0.2 }}
              className={`flex gap-3 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'} translate-y-0 md:translate-y-2 group-hover/item:translate-y-0 transition-all duration-300`}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white text-black text-sm md:text-base rounded-full hover:bg-gray-200 transition duration-200 flex-shrink-0"
              >
                <ExternalLink size={14} className="md:w-4" />
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/70 border border-white/30 text-sm md:text-base rounded-full hover:bg-black transition duration-200 flex-shrink-0"
              >
                <Github size={14} className="md:w-4" />
                Code
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  })}
</div>
        ) : (
          // Carousel layout - Mobile Adjusted
<div className="relative px-2 md:px-0">
  {/* Left Arrow */}
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

  {/* Carousel Content */}
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
              {/* Title with mobile expand functionality */}
              <h3 
                className="text-2xl font-semibold mb-2 transition-all duration-300 group-hover:mb-3 group-hover:-translate-y-1 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)] md:line-clamp-none"
                onClick={() => isMobile && setIsExpanded(!isExpanded)}
              >
                {project.title}
              </h3>

              {/* Description with mobile expand functionality */}
              <div 
                className={`relative ${isMobile ? 'cursor-pointer' : ''}`}
                onClick={() => isMobile && setIsExpanded(!isExpanded)}
              >
                <p className={`
                  text-gray-300 mb-4 transition-all duration-300 
                  group-hover:text-gray-100 group-hover:mb-5 
                  group-hover:-translate-y-0.5 [text-shadow:_0_1px_3px_rgba(0,0,0,0.6)]
                  ${isMobile && !isExpanded ? 'line-clamp-3' : ''}
                `}>
                  {project.description}
                </p>
                {isMobile && !isExpanded && (
                  <div className="absolute bottom-0 right-0 shadow-lg rounded-full w-1/3 h-6 flex items-center justify-end p-4">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                )}
              </div>

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

  {/* Right Arrow */}
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
