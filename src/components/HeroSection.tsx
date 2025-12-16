import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import "../App.css";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [animationsComplete, setAnimationsComplete] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setAnimationsComplete(true);
    }, 1300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInFromTop {
          0% {
            transform: translateY(-40vh);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(40%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translate(100%, -50%);
            opacity: 0;
          }
          100% {
            transform: translate(0, -50%);
            opacity: 1;
          }
        }

        .animate-slide-top {
          animation: slideInFromTop 1s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInFromLeft 1s ease-out forwards;
        }

        .animate-slide-bottom {
          animation: slideInFromBottom 1.2s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInFromRight 1.1s ease-out forwards;
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
      >
        {/* CV Download Button - Mobile Adjusted */}
        <div className="absolute top-[5vh] md:top-[6vh] right-3 md:right-5 transform md:-translate-x-1/2 z-30">
          <a
            href="https://drive.google.com/file/d/1duCXXk6CCvQtwsI8yievs73X0xLVqvEc/view?usp=share_link"
            target="_blank"
            className="bg-emerald-400/80 hover:bg-emerald-600 text-black dark:text-white px-3 py-2 md:px-5 md:py-2 rounded-lg text-sm md:text-base font-medium shadow transition duration-300 hover:shadow-lg hover:shadow-emerald-400/60"
          >
            Download CV
          </a>
        </div>

        {/* Background Giant Name - Mobile Adjusted */}
        <h1
          className={`absolute max-sm:top-[40vh] text-[20vw] md:text-[20vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none text-center ${
            !animationsComplete ? "animate-slide-top" : ""
          }`}
          style={{
            transform: `translateY(-${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          SHIV RAJPUT
        </h1>

        {/* Left Side Hover About - Mobile Adjusted */}
        <div
          className={`absolute left-0 top-0 h-full w-full flex items-center z-20 pointer-events-none ${
            !animationsComplete ? "animate-slide-left" : ""
          }`}
          style={{
            transform: isMobile ? "none" : `translateX(-${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div
            className="relative ml-4 md:ml-8 pointer-events-auto"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={() => isMobile && setIsHovered(!isHovered)}
          >
            <div className="relative cursor-pointer group">
              <div className="w-3 h-16 md:w-4 md:h-24 bg-gradient-to-b from-emerald-300 to-blue-400 rounded-full shadow-lg shadow-emerald-300/60 group-hover:shadow-emerald-300/90 transition-all duration-10 group-hover:scale-110 animate-pulse"></div>
              <div
                className={`absolute left-8 md:left-12 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="px-2 py-1 md:px-3 md:py-1 rounded-lg bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow">
                  <span className="text-emerald-400 text-sm md:text-lg font-mono font-semibold whitespace-nowrap animate-pulse">
                    {isMobile ? "<tap to decode/>" : "<hover to decode/>"}
                  </span>
                </span>
              </div>
            </div>

            <div
              className={`absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="code-block rounded-xl p-4 md:p-8 w-72 md:w-[500px] backdrop-blur-lg bg-white/60 dark:bg-white/10 border border-zinc-300 dark:border-white/20 shadow-md transition-all text-zinc-800 dark:text-slate-200">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 border-b border-emerald-400/20 pb-2 md:pb-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-400"></div>
                  <span className="text-slate-600 dark:text-slate-400 text-xs md:text-sm font-mono ml-2 md:ml-3">
                    about-me.js
                  </span>
                </div>

                <div className="font-mono text-sm md:text-base space-y-2 md:space-y-3">
                  <div className="text-purple-600 dark:text-purple-400">
                    <span className="typewriter-text">const</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      developer
                    </span>{" "}
                    = {"{"}
                  </div>
                  <div className="ml-4 md:ml-6 space-y-1 md:space-y-2">
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        name
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Shiv Rajput"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        role
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Full Stack Developer"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        education
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "B.Tech in Computer Science"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        strengths
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        ["Problem Solving", "Creative Thinking", "Rapid
                        Prototyping"]
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        passion
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Building things from scratch & turning ideas into
                        products"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        location
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "India (Remote-Friendly 🌍)"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        availability
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Open for full-time, freelance, or startup collabs"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        mission
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "To solve real problems with clean code & bold ideas"
                      </span>
                    </div>
                  </div>
                  <div className="text-purple-600 dark:text-purple-400">
                    {"}"}
                  </div>
                  <div className="mt-4 md:mt-6 pt-2 md:pt-3 border-t border-emerald-400/20">
                    <div className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
                      <span className="text-emerald-400">// </span>
                      Let's build something unforgettable. Reach out anytime!
                      <span className="terminal-cursor"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar at Bottom - Mobile Adjusted */}
        <div
          className={`absolute bottom-0 w-full flex justify-center z-10 pointer-events-none ${
            !animationsComplete ? "animate-slide-bottom" : ""
          }`}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/avatar.png"
            alt="avatar"
            className="h-[60vh] md:h-[75vh] max-w-full object-contain grayscale opacity-90 pointer-events-none"
          />
        </div>

        {/* Socials - Mobile Adjusted */}
        <div
          className={`absolute right-2 md:right-4 top-1/2 z-30 ${
            !animationsComplete ? "animate-slide-right" : ""
          }`}
          style={{
            transform: isMobile
              ? "translate(0, -50%)"
              : `translate(${scrollY * 0.3}px, -50%)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="backdrop-blur-md bg-white/40 dark:bg-white/5 p-2 md:p-4 rounded-lg md:rounded-xl border border-zinc-300 dark:border-white/10 shadow-md flex flex-col items-center space-y-3 md:space-y-6">
            {[
              {
                href: "https://github.com/srxshiv",
                icon: <Github className="w-4 h-4 md:w-5 md:h-5" />,
              },
              {
                href: "https://linkedin.com/in/srxshiv",
                icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />,
              },
              {
                href: "https://instagram.com/srxshiv",
                icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />,
              },
              {
                href: "https://twitter.com/srxshiv",
                icon: <Twitter className="w-4 h-4 md:w-5 md:h-5" />,
              },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                className="text-zinc-800 dark:text-white hover:text-emerald-400 transition-transform duration-200 hover:scale-125 md:hover:scale-150 hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

//
