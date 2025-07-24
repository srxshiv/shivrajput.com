import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

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

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-thin text-text-primary mb-12 tracking-wide">
            Get in touch
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-8"></div>
        </motion.div>

        <div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-secondary transition-all duration-300 group"
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