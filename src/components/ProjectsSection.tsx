import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

const projects = [
 {
    title: "Heyllo.ai",
    image:
      "https://res.cloudinary.com/ddyehcaeo/image/upload/v1753271374/Screenshot_2025-07-23_at_5.19.20_PM_gkuvmm.png",
    description:
      "A conversational AI chatbot builder using Gemini API with full authentication and analytics.",
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
      "A student collaboration platform with live chat, updates, and community sharing features.",
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
      "Track every income, expense, and budget in a way that actually makes sense.",
    techstack: [
      "Next.js",
      "React",
      "MongoDB",
      "Tailwind",
      "TypeScript",
      "shadcn"
    ],
    github: "https://github.com/srxshiv/BrokeNoMore.git",
    live: "https://broke-no-more-seven.vercel.app",
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
    <section id="projects" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-thin text-text-primary mb-12 tracking-wide">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-8"></div>
        </motion.div>

        {/* Tech Filter Buttons - Removed blinking animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
            {allTechs.map((tech) => {
              const isSelected = selectedTechs.includes(tech) || selectedTechs.length === 0;
              return (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm ${
                    isSelected
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="text-lg">{techIcons[tech] || "🔧"}</span>
                  <span>{tech}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {selectedTechs.length > 0 && (
              <motion.button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={16} />
                <span>Clear filters</span>
              </motion.button>
            )}
            <motion.button
              onClick={toggleShowAllProjects}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? (
                <>
                  <ChevronLeft size={16} />
                  <span>Close All Projects</span>
                </>
              ) : (
                <>
                  <span>Show All Projects</span>
                  <ChevronRight size={16} />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Projects Display */}
        {showAllProjects ? (
          // Grid layout for all projects
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
{filteredProjects.map((project, index) => (
  <motion.div
    key={`${project.title}-${index}`}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
    whileHover={{ y: -8 }}
    className="group/item relative h-[400px] rounded-2xl overflow-hidden transition-transform duration-300 ease-out"
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition duration-300 group-hover/item:via-black/20" />

    <div className="absolute bottom-0 left-0 right-0 p-6 transition-padding duration-300 group-hover/item:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 + index * 0.08 }}
        className="text-white"
      >
        <h3 className="text-2xl font-semibold mb-2 transition-all duration-300 group-hover/item:mb-3 group-hover/item:-translate-y-1">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4 transition-all duration-300 group-hover/item:text-gray-100 group-hover/item:mb-5 group-hover/item:-translate-y-0.5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 transition-all duration-300 group-hover/item:mb-5">
          {project.techstack.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs transition-colors duration-300 group-hover/item:bg-white/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.08 + 0.2 }}
          className="flex gap-4 opacity-0 group-hover/item:opacity-100 translate-y-2 group-hover/item:translate-y-0 transition-all duration-300"
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
  </motion.div>
))}


          </div>
        ) : (
          // Carousel layout
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide px-6 md:px-12 pb-6 gap-6 snap-x snap-mandatory"
            >
{filteredProjects.map((project, index) => (
  <motion.div
    key={`${project.title}-${index}`}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
    className="group relative flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] snap-start transform-gpu transition-transform duration-300 will-change-transform hover:-translate-y-1 shadow-[0_0_23px_#ffffff15] hover:shadow-[0_0_30px_#ffffff40]"

  >
    <div className="relative h-[60vh] rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
      
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Text Container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transition-transform duration-500 group-hover:-translate-y-1">
        <h3
          className="text-2xl md:text-3xl font-semibold mb-2 transition duration-300 group-hover:text-glow"
        >
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 transition duration-300 group-hover:text-glow">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techstack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 + index * 0.1 + 0.3 }}
          className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-transform duration-200 hover:scale-105"
          >
            <ExternalLink size={16} />
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/30 rounded-full hover:bg-black/70 transition-transform duration-200 hover:scale-105"
          >
            <Github size={16} />
            Code
          </a>
        </motion.div>
      </div>
    </div>
  </motion.div>
))}



            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No projects found with the selected technologies.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}