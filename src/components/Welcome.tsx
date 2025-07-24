import { useEffect, useState } from "react";
import { motion } from "framer-motion";




const greetings = [
  "Hello!",
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "こんにちは!",
  "안녕하세요!",
  "مرحبا!",
  "नमस्ते!",
  "Namaste!",
  "Привет!",
  "Hej!",
];

export function Welcome({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const startInterval = (delay: number) => {
      interval = setInterval(() => {
        setIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex >= greetings.length) {
            clearInterval(interval);
            setFinished(true);
            setTimeout(onComplete, 500); // allow animation to complete
            return prev;
          }
          return nextIndex;
        });
      }, delay);
    };

    const initialTimeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
      startInterval(100);
    }, 1500);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{
        opacity: 1,
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
      animate={
        finished
          ? {
              opacity: 0,
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }
          : {
              opacity: 1,
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        WebkitBackdropFilter: "blur(20px)", // For Safari
      }}
    >
      <h1 className="text-white text-5xl md:text-7xl borel">
        {greetings[index]}
      </h1>
    </motion.div>
  );
}
