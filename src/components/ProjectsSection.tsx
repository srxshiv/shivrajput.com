import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence, useScroll, useTransform } from "framer-motion";

import '../App.css'

const projects = [
  {
    title: "DevsOwl",
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1771333552/z8hginpogt2glymf9sle.png", 
    description:
      "A centralized developer portfolio aggregator that visualizes cross-platform data (GitHub, leetcode etc.) to create a dynamic 'proof-of-work' profile. It features automated data synchronization using GraphQL, SEO-friendly dynamic routing, and a high-performance database schema.",
    techstack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
      "Tailwind",
    ],
    github: "https://github.com/SSharma1103/devora",
    live: "https://devsowl.com/",
    features: [
      "GitHub Open Source & LeetCode data visualization",
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
    title: "Wispr Flow",
    image: "https://res.cloudinary.com/ddyehcaeo/image/upload/v1766927655/Screenshot_2025-12-28_at_6.43.16_PM_ydntxb.png", 
    description:
      "A desktop-native voice-to-text application that enables real-time transcription directly into any active input field. It leverages Tauri to bridge a React frontend with a Rust backend, handling system-level tasks like global hotkey management (Option+K), OS accessibility permissions, and simulated keyboard events for seamless dictation.",
    techstack: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "Web Audio API",
    ],
    github: "https://github.com/srxshiv/wispr_flow_tauri.git",
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

const techIcons: Record<string, string> = {
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
  Rust: "🦀",
  Tauri: "♉",
  "Web Audio API": "🔊", 
};

export function ProjectsSection() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // EXACT parallax from your original code
  const xParallaxDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xParallaxMobile = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const allTechs = Array.from(
    new Set(projects.flatMap((project) => project.techstack))
  ).sort();

  const filteredProjects = selectedTechs.length === 0
    ? projects
    : projects.filter((project) =>
        selectedTechs.some((tech) => project.techstack.includes(tech))
      );

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => setSelectedTechs([]);
  const toggleShowAllProjects = () => setShowAllProjects(!showAllProjects);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-[100vh] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* EXACT Original Parallax Title */}
        <motion.h2
          className="pointer-events-none absolute left-0 top-[3rem] md:top-[6rem] text-[25vw] md:text-[22vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none whitespace-nowrap"
          style={{
            x: isMobile ? xParallaxMobile : xParallaxDesktop
          }}
        >
          PROJECTS
        </motion.h2>

        {/* Tech Filter Buttons - Made subtler to prevent jumping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mb-12 md:mb-16 mt-8 md:mt-24 px-2"
        >
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center items-center mb-6 md:mb-8">
            {allTechs.map((tech) => {
              const isSelected = selectedTechs.includes(tech) || selectedTechs.length === 0;
              return (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300
                    ${isSelected
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-md"
                      : "bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
                    }`}
                >
                  <span className="text-sm">{techIcons[tech] || "🔧"}</span>
                  <span>{tech}</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            {selectedTechs.length > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 transition-colors hover:bg-gray-200 dark:hover:bg-zinc-700 shadow-sm"
              >
                <X size={16} />
                {!isMobile && <span>Clear Filters</span>}
              </button>
            )}

            <button
              onClick={toggleShowAllProjects}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black transition-colors hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm"
            >
              {showAllProjects ? (
                <>
                  <ChevronLeft size={16} />
                  {!isMobile && <span>View Carousel</span>}
                </>
              ) : (
                <>
                  {!isMobile && <span>Show All Projects</span>}
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Projects Display - Smooth Toggle using AnimatePresence */}
        <AnimatePresence mode="wait">
          {showAllProjects ? (
            /* GRID VIEW */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            /* CAROUSEL VIEW */
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 px-2 md:px-0"
            >
              <button 
                onClick={() => scrollCarousel('left')}
                className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur border border-black/10 dark:border-white/10 shadow-lg hover:bg-white dark:hover:bg-black transition-all"
              >
                <ChevronLeft size={24} className="text-black dark:text-white" />
              </button>

              <div
                ref={carouselRef}
                className="flex overflow-x-auto scrollbar-hide pb-8 gap-6 snap-x snap-mandatory"
              >
                {filteredProjects.map((project, index) => (
                  <div key={project.title} className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollCarousel('right')}
                className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur border border-black/10 dark:border-white/10 shadow-lg hover:bg-white dark:hover:bg-black transition-all"
              >
                <ChevronRight size={24} className="text-black dark:text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Clean, functional card component used for BOTH Grid and Carousel to ensure consistency
function ProjectCard({ project, index }: { project , index: number }) {
  return (
    <div className="group relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 bg-zinc-900">
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40"
      />
      
      {/* Permanent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
        
        {/* Always visible title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
          {project.title}
        </h3>

        {/* Tech Stack always visible slightly faded */}
        <div className="flex flex-wrap gap-2 mb-4 transform transition-all duration-300 group-hover:-translate-y-2">
          {project.techstack.slice(0, 4).map((tech: string) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-wide">
              {tech}
            </span>
          ))}
          {project.techstack.length > 4 && (
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-white/60">
              +{project.techstack.length - 4}
            </span>
          )}
        </div>

        {/* Hidden content that slides up smoothly on hover */}
        <div className="h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:h-auto group-hover:opacity-100 group-hover:mb-2">
          <p className="text-sm md:text-base text-zinc-300 line-clamp-3 mb-6">
            {project.description}
          </p>

          <div className="flex gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-black/50 text-white text-sm font-bold rounded-full border border-white/30 hover:bg-black/80 transition-colors"
              >
                <Github size={16} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}