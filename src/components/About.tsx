import { Button } from "./ui/button";
import { Lightbulb, ArrowRight, Zap, Users, Target, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Deliver projects 3x faster",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Full Team",
    description: "All skills, one agency",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Data-Driven",
    description: "Strategy backed by insights",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered",
    description: "Smart automation built-in",
  },
];

export function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-40 right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(y, (value) => -value) }}
        className="absolute bottom-40 left-20 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-red-500 mb-4 font-bold"
            >
              Your 0 to 100 Creative Partner
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-white mb-6 font-black"
            >
              We Build Brands That{" "}
              <motion.span
                className="text-red-600 font-black inline-block"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Think
              </motion.span>
              .
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-4 text-lg leading-relaxed font-medium"
            >
              Brandore is an AI-driven creative agency that combines human
              imagination with intelligent technology to deliver 360° brand growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-4 text-lg leading-relaxed font-medium"
            >
              We're your full creative team — graphic designers, motion artists,
              storytellers, ad makers, and developers — working together as one
              system.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 text-lg leading-relaxed font-medium"
            >
              From startups to enterprises, we help brands create, communicate, and
              grow — smarter, faster, and beautifully.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br from-white/5 to-white/0 border rounded-lg p-4 transition-all cursor-pointer ${
                    hoveredFeature === index
                      ? "border-red-500/50 bg-red-500/10"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="text-red-500"
                      animate={
                        hoveredFeature === index
                          ? { rotate: 360 }
                          : { rotate: 0 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="text-white font-bold">{feature.title}</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {feature.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-red-500/10 to-red-700/10 border border-red-500/30 rounded-lg p-6 mb-8"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Lightbulb className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                </motion.div>
                <p className="text-red-200 text-lg font-bold">
                  Why hire multiple people when one agency can do it all?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-red-600 hover:bg-red-700 group font-bold"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Image with Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-red-500/20 group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjcmVhdGl2ZSUyMHRlYW18ZW58MXx8fHwxNzYzMzkwNzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative team working"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-red-500 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>

            {/* Floating Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.8,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-2xl cursor-pointer"
            >
              <motion.div
                className="text-3xl mb-1 font-black"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                360°
              </motion.div>
              <div className="text-sm text-red-200 font-bold">Brand Growth</div>
            </motion.div>

            {/* Corner Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-red-500 rounded-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
