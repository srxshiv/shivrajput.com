import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import "../App.css";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [animationsComplete, setAnimationsComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Set animations as complete after the longest animation (1.2s)
    const timer = setTimeout(() => {
      setAnimationsComplete(true);
    }, 1300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          animation-fill-mode: forwards;
        }

        .animate-slide-left {
          animation: slideInFromLeft 1s ease-out forwards;
          animation-fill-mode: forwards;
        }

        .animate-slide-bottom {
          animation: slideInFromBottom 1.2s ease-out forwards;
          animation-fill-mode: forwards;
        }

        .animate-slide-right {
          animation: slideInFromRight 1.1s ease-out forwards;
          animation-fill-mode: forwards;
        }

        /* Remove animations after they complete to allow transforms */
        .animate-slide-top {
          animation: slideInFromTop 1s ease-out forwards;
        }
        .animate-slide-top.animation-complete {
          animation: none;
        }

        .animate-slide-left {
          animation: slideInFromLeft 1.4s ease-out forwards;
        }
        .animate-slide-left.animation-complete {
          animation: none;
        }

        .animate-slide-bottom {
          animation: slideInFromBottom 1.2s ease-out forwards;
        }
        .animate-slide-bottom.animation-complete {
          animation: none;
        }

        .animate-slide-right {
          animation: slideInFromRight 1.1s ease-out forwards;
        }
        .animate-slide-right.animation-complete {
          animation: none;
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
      >
        <div className="absolute top-[6vh] right-5 transform -translate-x-1/2 z-30">
          <a
            href="https://drive.google.com/file/d/1WhyRuLk5zqbm-JvjEcVx7-rJP3fah3OS/view?usp=share_link"
            target="_blank"
            className="bg-emerald-400/80 hover:bg-emerald-500 text-black dark:text-white px-5 py-2 rounded-lg font-medium shadow transition duration-300 hover:shadow-lg hover:shadow-emerald-400/60"
          >
            Download CV
          </a>
        </div>

        {/* Background Giant Name */}
        <h1
          className={`absolute text-[25vw] md:text-[20vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none text-center ${
            !animationsComplete ? "animate-slide-top" : ""
          }`}
          style={{
            transform: `translateY(-${scrollY * 0.7}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          SHIV RAJPUT
        </h1>

        {/* Left Side Hover About */}
        <div
          className={`absolute left-0 top-0 h-full w-full md:w-1/2 flex items-center z-20 pointer-events-none ${
            !animationsComplete ? "animate-slide-left" : ""
          }`}
          style={{
            transform: `translateX(-${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div
            className="relative ml-8 pointer-events-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative cursor-pointer group">
              <div className="w-4 h-24 bg-gradient-to-b from-emerald-300 to-blue-400 rounded-full shadow-lg shadow-emerald-300/60 group-hover:shadow-emerald-300/90 transition-all duration-10 group-hover:scale-110 animate-pulse"></div>
              <div
                className={`absolute left-12 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="px-3 py-1 rounded-lg bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow">
                  <span className="text-emerald-400 text-lg font-mono font-semibold whitespace-nowrap animate-pulse">
                    &lt;hover to decode/&gt;
                  </span>
                </span>
              </div>
            </div>

            <div
              className={`absolute left-10 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="code-block rounded-xl p-8 w-96 md:w-[500px] backdrop-blur-md bg-white/60 dark:bg-white/10 border border-zinc-300 dark:border-white/20 shadow-md transition-all text-zinc-800 dark:text-slate-200">
                <div className="flex items-center gap-3 mb-6 border-b border-emerald-400/20 pb-3">
                  <div className="w-4 h-4 rounded-full bg-red-400"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm font-mono ml-3">
                    about-me.js
                  </span>
                </div>

                <div className="font-mono text-base md:text-lg space-y-3">
                  <div className="text-purple-600 dark:text-purple-400">
                    <span className="typewriter-text">const</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      developer
                    </span>{" "}
                    = {"{"}
                  </div>
                  <div className="ml-6 space-y-2">
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
                        passion
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Building digital experiences"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        location
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Coding the future"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        availability
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Open for opportunities"
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-blue-600 dark:text-blue-400">
                        mission
                      </span>
                      :{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Creating impactful solutions"
                      </span>
                    </div>
                  </div>
                  <div className="text-purple-600 dark:text-purple-400">
                    {"}"}
                  </div>
                  <div className="mt-6 pt-3 border-t border-emerald-400/20">
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      <span className="text-emerald-400">// </span>
                      Ready to collaborate and build amazing things together
                      <span className="terminal-cursor"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar at Bottom - Fixed */}
        <div
          className={`absolute bottom-0 w-full flex justify-center z-10 pointer-events-none ${
            !animationsComplete ? "animate-slide-bottom" : ""
          }`}
          style={{
            transform: `translateY(${scrollY * 0.7}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/avatar.png"
            alt="avatar"
            className="h-[75vh] max-w-full object-contain grayscale opacity-90 pointer-events-none"
          />
        </div>

        {/* Socials */}
        <div
          className={`absolute right-4 top-1/2 z-30 ${
            !animationsComplete ? "animate-slide-right" : ""
          }`}
          style={{
            transform: `translate(${scrollY * 0.3}px, -50%)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="backdrop-blur-md bg-white/40 dark:bg-white/5 p-4 rounded-xl border border-zinc-300 dark:border-white/10 shadow-md flex flex-col items-center space-y-6">
            {[
              { href: "https://github.com/srxshiv", icon: <Github /> },
              { href: "https://linkedin.com/in/srxshiv", icon: <Linkedin /> },
              { href: "https://instagram.com/srxshiv", icon: <Instagram /> },
              { href: "https://twitter.com/srxshiv", icon: <Twitter /> },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                className="text-zinc-800 dark:text-white hover:text-emerald-400 transition-transform duration-200 hover:scale-150 hover:-translate-y-1"
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
