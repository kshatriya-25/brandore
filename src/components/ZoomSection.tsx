import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { Brain, Zap, Target, Sparkles, TrendingUp, Award, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Intelligence",
    description: "Smart automation that learns and adapts to your brand needs",
    stat: "98%",
    statLabel: "Accuracy",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Lightning Fast",
    description: "Deliver projects 3x faster than traditional agencies",
    stat: "3x",
    statLabel: "Faster",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Precision Targeting",
    description: "Data-driven strategies that hit your exact audience",
    stat: "95%",
    statLabel: "Success Rate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: "Creative Excellence",
    description: "Award-winning designs that make your brand unforgettable",
    stat: "50+",
    statLabel: "Awards",
    color: "from-pink-500 to-red-500",
  },
];

const badges = [
  { icon: <TrendingUp className="w-6 h-6" />, label: "Growth Focused" },
  { icon: <Award className="w-6 h-6" />, label: "Award Winning" },
  { icon: <Users className="w-6 h-6" />, label: "Expert Team" },
  { icon: <Shield className="w-6 h-6" />, label: "Trusted Partner" },
];

export function ZoomSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
    setActiveCard(index);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }} />
      </div>

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 border border-red-500/20 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <motion.div
        style={{ scale, opacity }}
        className="sticky top-1/4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main Heading with 3D effect */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-6xl md:text-8xl text-white mb-6 font-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            style={{
              textShadow: "0 0 40px rgba(239, 68, 68, 0.5)",
            }}
          >
            Why{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Brandore
            </motion.span>
            ?
          </motion.h2>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                }}
                viewport={{ once: false }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm hover:border-red-500/50 hover:bg-red-500/10 transition-all cursor-pointer"
              >
                <span className="text-red-500">{badge.icon}</span>
                <span className="text-white font-bold text-sm">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const delay = index * 0.1;
            const itemScale = useTransform(
              scrollYProgress,
              [0.2 + delay / 10, 0.5, 0.8 - delay / 10],
              [0.8, 1, 0.8]
            );

            const isActive = activeCard === index;
            const rotateX = isActive ? (mousePosition.y - 0.5) * 20 : 0;
            const rotateY = isActive ? (mousePosition.x - 0.5) * -20 : 0;

            return (
              <motion.div
                key={index}
                style={{ scale: itemScale }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: delay,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: false }}
                className="group relative"
              >
                <motion.div
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => setActiveCard(null)}
                  animate={{
                    rotateX,
                    rotateY,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                  className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 h-full hover:border-red-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {/* Spotlight effect following mouse */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(239, 68, 68, 0.3), transparent 50%)`,
                      }}
                    />
                  )}

                  {/* Icon Container with gradient */}
                  <motion.div
                    className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white relative`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isActive ? "translateZ(50px)" : "translateZ(0px)",
                    }}
                  >
                    {feature.icon}
                    
                    {/* Orbiting particles */}
                    {isActive && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.3,
                            }}
                            style={{
                              left: "50%",
                              top: "50%",
                              marginLeft: "-4px",
                              marginTop: "-4px",
                            }}
                          >
                            <motion.div
                              animate={{
                                x: Math.cos((i * 2 * Math.PI) / 3) * 40,
                                y: Math.sin((i * 2 * Math.PI) / 3) * 40,
                              }}
                            />
                          </motion.div>
                        ))}
                      </>
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl text-white mb-4 font-black relative z-10">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed font-medium mb-6 relative z-10">
                    {feature.description}
                  </p>

                  {/* Stat Badge */}
                  <motion.div
                    className="flex items-baseline gap-2 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`text-4xl font-black bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.stat}
                    </span>
                    <span className="text-gray-500 font-bold">{feature.statLabel}</span>
                  </motion.div>

                  {/* Animated Border Gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={
                      isActive
                        ? {
                            background: [
                              "linear-gradient(0deg, rgba(239, 68, 68, 0.1), transparent)",
                              "linear-gradient(360deg, rgba(239, 68, 68, 0.1), transparent)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="text-gray-400 text-xl mb-6 font-medium">
            Experience the difference of working with an AI-powered creative agency
          </p>
          <motion.button
            onClick={() => {
              const contact = document.getElementById("contact");
              contact?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Your Transformation</span>
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{
                x: "100%",
              }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
