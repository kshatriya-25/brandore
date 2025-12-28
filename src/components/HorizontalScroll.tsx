import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Lightbulb, Palette, Rocket, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to understand what makes you unique.",
    number: "01",
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Creation",
    description: "Our team crafts stunning visuals and compelling content that brings your vision to life.",
    number: "02",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Launch",
    description: "We deploy your brand across all channels with precision and strategic timing.",
    number: "03",
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Growth",
    description: "Continuous optimization and scaling to maximize your brand's reach and impact.",
    number: "04",
  },
];

export function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {/* Title Card */}
          <div className="min-w-[90vw] md:min-w-[40vw] h-[80vh] flex items-center justify-center">
            <div className="max-w-xl">
              <h2 className="text-6xl md:text-7xl text-white mb-6 font-black">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-400 font-medium">
                From concept to launch and beyond, we've got you covered every step of the way.
              </p>
            </div>
          </div>

          {/* Process Cards */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[90vw] md:min-w-[30vw] h-[80vh] relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="h-full bg-gradient-to-br from-white/10 to-white/0 border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group hover:border-red-500/50 transition-all duration-300">
                {/* Large Number Background */}
                <div className="absolute top-4 right-4 text-[12rem] md:text-[16rem] font-black text-white/5 leading-none group-hover:text-red-500/10 transition-colors">
                  {card.number}
                </div>

                <div className="relative z-10">
                  <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div className="text-red-400 text-sm tracking-widest uppercase mb-4 font-bold">
                    Step {card.number}
                  </div>
                  <h3 className="text-4xl md:text-5xl text-white mb-6 font-black">
                    {card.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-medium">
                  {card.description}
                </p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-700/0 group-hover:from-red-500/5 group-hover:to-red-700/10 transition-all pointer-events-none rounded-3xl" />
              </div>
            </motion.div>
          ))}

          {/* End Card */}
          <div className="min-w-[90vw] md:min-w-[40vw] h-[80vh] flex items-center justify-center">
            <div className="text-center max-w-xl">
              <h3 className="text-5xl md:text-6xl text-white mb-6 font-black">
                Ready to Start?
              </h3>
              <p className="text-xl text-gray-400 mb-8 font-medium">
                Let's bring your brand vision to life with our proven process.
              </p>
              <button
                onClick={() => {
                  const contact = document.getElementById("contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
