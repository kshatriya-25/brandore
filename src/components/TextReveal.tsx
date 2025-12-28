import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function TextReveal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const words = [
    "We don't just",
    "create brands.",
    "We craft",
    "experiences",
    "that turn",
    "customers into",
    "brand advocates."
  ];

  return (
    <section
      ref={targetRef}
      className="relative min-h-[200vh] bg-gradient-to-b from-black via-red-950/20 to-black flex items-center justify-center"
    >
      <motion.div
        style={{ opacity, scale }}
        className="sticky top-1/4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-4">
          {words.map((word, index) => {
            const wordStart = index / words.length;
            const wordEnd = (index + 1) / words.length;
            const wordOpacity = useTransform(
              scrollYProgress,
              [wordStart, wordStart + 0.1, wordEnd - 0.1, wordEnd],
              [0.2, 1, 1, 0.2]
            );
            const wordY = useTransform(
              scrollYProgress,
              [wordStart, wordStart + 0.1],
              [20, 0]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity: wordOpacity, y: wordY }}
                className={`text-4xl md:text-6xl lg:text-7xl font-black ${
                  index % 2 === 0 ? "text-white" : "text-red-500"
                }`}
              >
                {word}
              </motion.div>
            );
          })}
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-12 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
          style={{
            scaleX: useTransform(scrollYProgress, [0.3, 0.7], [0, 1]),
          }}
        />
      </motion.div>
    </section>
  );
}
