import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Brandore transformed our entire brand identity. The results exceeded all expectations.",
    author: "Sarah Chen",
    role: "CEO, TechVision",
    metric: "300% increase in brand recognition",
  },
  {
    quote: "The AI-powered automation they implemented saved us 40 hours per week.",
    author: "Michael Rodriguez",
    role: "CMO, GrowthLab",
    metric: "40 hours saved weekly",
  },
  {
    quote: "Our website conversion rate tripled after Brandore's redesign and optimization.",
    author: "Emily Watson",
    role: "Founder, LuxeBeauty",
    metric: "3x conversion rate",
  },
];

export function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-64 h-64 bg-red-700/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-6 font-black">
            Don't Just Take{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Our Word
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-medium">
            See what our clients are saying about their transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const yOffset = index === 1 ? y1 : index === 2 ? y3 : y2;

            return (
              <motion.div
                key={index}
                style={{ y: yOffset }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/0 border border-white/20 rounded-2xl p-8 h-full hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                  {/* Quote Icon */}
                  <div className="text-red-500/30 mb-6 group-hover:text-red-500/50 transition-colors">
                    <Quote className="w-12 h-12" />
                  </div>

                  {/* Quote */}
                  <p className="text-white text-lg mb-8 leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="text-white font-bold mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm mb-4 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2 inline-block">
                      <div className="text-red-400 font-bold">
                        {testimonial.metric}
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-700/0 group-hover:from-red-500/5 group-hover:to-red-700/10 rounded-2xl transition-all pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
