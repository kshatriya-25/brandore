import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Gem,
  DollarSign,
  Shirt,
  Car,
  Coffee,
  Smartphone,
  Sparkles,
  Heart,
  UtensilsCrossed,
  Wind,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

type Industry = {
  name: string;
  icon: React.ReactNode;
  services: string[];
  color: string;
  gradient: string;
};

const industries: Industry[] = [
  {
    name: "Jewelry",
    icon: <Gem className="w-6 h-6" />,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
    services: [
      "Luxury Brand Identity & Packaging Design",
      "Product Photography & 3D Rendering",
      "High-End Lifestyle Video Campaigns",
      "E-commerce Website Development",
    ],
  },
  {
    name: "Finance",
    icon: <DollarSign className="w-6 h-6" />,
    color: "text-green-400",
    gradient: "from-green-500/20 to-emerald-500/20",
    services: [
      "Professional Brand Identity & Corporate Design",
      "Financial Report Design & Infographics",
      "Explainer Videos & Motion Graphics",
      "Secure Web & Mobile App Development",
    ],
  },
  {
    name: "Fashion",
    icon: <Shirt className="w-6 h-6" />,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-rose-500/20",
    services: [
      "Fashion Brand Identity & Lookbooks",
      "Editorial & Campaign Photography",
      "Reels, Fashion Films & Stop Motion",
      "E-commerce & Fashion Portfolio Websites",
    ],
  },
  {
    name: "Automobile",
    icon: <Car className="w-6 h-6" />,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
    services: [
      "Automotive Brand Design & Showroom Graphics",
      "Car Photography & CGI Visualization",
      "Commercial Video Ads & 3D Animation",
      "Dealership & Booking Website Development",
    ],
  },
  {
    name: "Lifestyle",
    icon: <Coffee className="w-6 h-6" />,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-amber-500/20",
    services: [
      "Lifestyle Brand Identity & Social Media Design",
      "Influencer Content & Lifestyle Photography",
      "Story-Driven Video Content & Reels",
      "Community Platforms & Booking Sites",
    ],
  },
  {
    name: "Digital",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-teal-500/20",
    services: [
      "Tech Brand Identity & UI/UX Design",
      "App & Website Design & Development",
      "Explainer Videos & Product Demos",
      "Digital Marketing & SEO Optimization",
    ],
  },
  {
    name: "Beauty",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-fuchsia-400",
    gradient: "from-fuchsia-500/20 to-purple-500/20",
    services: [
      "Beauty Brand Identity & Packaging Design",
      "Product Photography & Flat Lays",
      "Tutorial Videos, Reels & Before/After Content",
      "Beauty E-commerce & Booking Platforms",
    ],
  },
  {
    name: "Health",
    icon: <Heart className="w-6 h-6" />,
    color: "text-red-400",
    gradient: "from-red-500/20 to-rose-500/20",
    services: [
      "Healthcare Brand Identity & Medical Design",
      "Medical Infographics & Patient Education",
      "Healthcare Videos & Explainer Content",
      "Patient Portal & Telemedicine Platforms",
    ],
  },
  {
    name: "Food & Beverages",
    icon: <UtensilsCrossed className="w-6 h-6" />,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-orange-500/20",
    services: [
      "F&B Brand Identity & Menu Design",
      "Food Photography & Styling",
      "Recipe Videos, Reels & Commercial Ads",
      "Restaurant Websites & Delivery Platforms",
    ],
  },
  {
    name: "Perfumes & Fragrances",
    icon: <Wind className="w-6 h-6" />,
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-violet-500/20",
    services: [
      "Luxury Perfume Brand Identity & Packaging",
      "Product Photography & CGI Bottles",
      "Cinematic Perfume Ads & 3D Animation",
      "Premium E-commerce & Brand Storytelling Sites",
    ],
  },
  {
    name: "Education",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-lime-400",
    gradient: "from-lime-500/20 to-green-500/20",
    services: [
      "Educational Brand Identity & Course Design",
      "Educational Videos & Animation",
      "Course Content Creation & Motion Graphics",
      "Learning Management Systems & E-learning Platforms",
    ],
  },
];

export function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-black to-red-950/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-black">
            Industries We <span className="text-red-600 font-black">Empower</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            We tailor our creativity for every business vertical. Choose your
            industry to explore what we can do for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotateZ: hoveredIndex === index ? [0, -2, 2, 0] : 0,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndustry(industry)}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.5, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Particle effect on hover */}
              {hoveredIndex === index && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 ${industry.color} rounded-full`}
                      initial={{
                        x: "50%",
                        y: "50%",
                        opacity: 1,
                      }}
                      animate={{
                        x: `${50 + (Math.cos((i * Math.PI * 2) / 8) * 100)}%`,
                        y: `${50 + (Math.sin((i * Math.PI * 2) / 8) * 100)}%`,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </>
              )}

              <div className="flex flex-col items-center text-center gap-3 relative z-10">
                <motion.div
                  className={`${industry.color} transition-all`}
                  animate={
                    hoveredIndex === index
                      ? {
                          rotate: [0, 360],
                          scale: [1, 1.3, 1],
                        }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={{
                    duration: 0.8,
                  }}
                >
                  {industry.icon}
                </motion.div>
                <span className="text-white group-hover:text-red-200 transition-colors font-bold">
                  {industry.name}
                </span>
              </div>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-red-500/0 group-hover:border-red-500/50"
                animate={
                  hoveredIndex === index
                    ? {
                        boxShadow: [
                          "0 0 0px rgba(239, 68, 68, 0)",
                          "0 0 20px rgba(239, 68, 68, 0.5)",
                          "0 0 0px rgba(239, 68, 68, 0)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Industry Details Dialog */}
      <Dialog open={!!selectedIndustry} onOpenChange={() => setSelectedIndustry(null)}>
        <DialogContent className="bg-gray-900 border-red-500/30 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-red-500 flex items-center gap-3 font-black">
              <motion.span
                className="text-red-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                {selectedIndustry?.icon}
              </motion.span>
              {selectedIndustry?.name}
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-lg mt-2 font-medium">
              Specialized creative services for the {selectedIndustry?.name.toLowerCase()} industry
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-xl text-white mb-4 font-bold">What We Offer:</h4>
              <div className="space-y-3">
                {selectedIndustry?.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 hover:border-red-500/30 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <p className="text-gray-300 font-medium">{service}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-400 mb-4 font-medium">
                Ready to build your {selectedIndustry?.name.toLowerCase()} brand?
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => {
                    setSelectedIndustry(null);
                    scrollToSection("contact");
                  }}
                  className="bg-red-600 hover:bg-red-700 w-full group font-bold"
                >
                  Let's Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
