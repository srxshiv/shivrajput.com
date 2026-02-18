import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "srxhshiv@gmail.com",
    href: "mailto:srxshiv@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7668585139",
    href: "tel:+917668585139"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dehradun, IN",
    href: "#"
  }
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Hardware-accelerated scroll tracking relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Maps the scroll progress (0 to 1) to a gentle vertical shift
  const yParallax = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="contact" ref={ref} className="relative min-h-[70vh] py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="pointer-events-none whitespace-nowrap absolute left-1/2 top-[10rem] md:top-[12rem] text-[12vw] font-heading3 text-black/15 dark:text-white/15 z-0 select-none tracking-tight leading-none"
          style={{
            x: "-50%", // Keep it horizontally centered
            y: yParallax // Smooth vertical parallax
          }}
        >
          GET IN TOUCH
        </motion.h2>

        <div className="mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <h3 className="text-2xl font-sf-pro font-semibold text-text-primary mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-secondary transition-all duration-300 group max-w-sm bg-background/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                    <item.icon size={20} className="text-accent-blue group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{item.label}</p>
                    <p className="text-text-primary font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}