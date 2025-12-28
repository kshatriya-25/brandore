import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const scrollSections = [
  {
    title: "Brand Identity",
    subtitle: "Craft Your Unique Story",
    description:
      "From logo design to complete brand guidelines, we create identities that resonate with your audience and stand the test of time.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    color: "from-red-600 to-orange-500",
  },
  {
    title: "Video Production",
    subtitle: "Motion That Moves People",
    description:
      "Cinematic storytelling meets cutting-edge editing. We produce videos that capture attention and drive engagement across all platforms.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    color: "from-red-700 to-red-500",
  },
  {
    title: "Web Development",
    subtitle: "Digital Experiences That Convert",
    description:
      "Beautiful, fast, and functional websites that turn visitors into customers. Built with the latest technologies and best practices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-red-800 to-red-600",
  },
  {
    title: "AI Automation",
    subtitle: "Future-Proof Your Business",
    description:
      "Harness the power of AI to streamline workflows, personalize experiences, and scale your operations like never before.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    color: "from-red-900 to-red-700",
  },
];

export function StickyScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={targetRef} className="relative bg-black">
      {scrollSections.map((section, index) => {
        const start = index / scrollSections.length;
        const end = (index + 1) / scrollSections.length;

        return (
          <StickyCard
            key={index}
            section={section}
            progress={scrollYProgress}
            start={start}
            end={end}
            index={index}
          />
        );
      })}
    </section>
  );
}

interface StickyCardProps {
  section: typeof scrollSections[0];
  progress: any;
  start: number;
  end: number;
  index: number;
}

function StickyCard({ section, progress, start, end, index }: StickyCardProps) {
  const scale = useTransform(progress, [start, end], [1, 0.9]);
  const opacity = useTransform(progress, [start, end], [1, 0]);
  const y = useTransform(progress, [start, end], ["0%", "-10%"]);
  const imageScale = useTransform(progress, [start, start + 0.5, end], [1.2, 1, 1]);
  const textY = useTransform(progress, [start, end], ["0%", "-50%"]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale, opacity, y }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Background Image with Parallax */}
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${section.color} mix-blend-multiply opacity-80`} />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="text-red-400 mb-4 tracking-widest uppercase font-bold">
              {String(index + 1).padStart(2, "0")} / {String(scrollSections.length).padStart(2, "0")}
            </div>
            <h2 className="text-6xl md:text-8xl text-white mb-6 font-black leading-tight">
              {section.title}
            </h2>
            <p className="text-2xl md:text-3xl text-red-400 mb-8 font-bold">
              {section.subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
              {section.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-red-500 to-transparent" />
      </motion.div>
    </div>
  );
}
