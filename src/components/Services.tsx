import { Palette, Video, Code, Megaphone, Cpu, Rocket } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding & Graphic Design",
    description:
      "Logo design, brand identity, packaging, social media creatives, and print design that makes your brand unforgettable.",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Editing & Motion Graphics",
    description:
      "Professional video editing, motion design, 2D/3D animation, and kinetic typography for engaging content.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development & UI/UX",
    description:
      "Responsive website design, custom web development, e-commerce platforms, and mobile app UI/UX design.",
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing & SEO",
    description:
      "SEO optimization, content marketing, social media strategy, email campaigns, and analytics-driven growth.",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Meta & Google Ads",
    description:
      "Strategic ad campaigns, audience targeting, conversion optimization, and ROI-focused performance marketing.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "AI-Powered Design & Automation",
    description:
      "AI design tools, automated content generation, smart analytics, and machine learning-enhanced creativity.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-black">
            All Your Creative Needs. <span className="text-red-600 font-black">One Agency</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6 font-medium">
            From concept to campaign — we take care of every creative and digital
            requirement your brand needs to grow.
          </p>
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-red-700/10 border border-red-500/30 rounded-full px-6 py-3">
            <p className="text-red-300 font-bold">
              We mix human creativity with the latest AI tools for unmatched precision
              and performance
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative bg-gradient-to-br from-white/5 to-white/0 hover:from-red-500/10 hover:to-red-700/10 border border-white/10 hover:border-red-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="text-red-500 group-hover:text-red-400 mb-4 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-white text-xl mb-3 font-bold">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{service.description}</p>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 via-red-700/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-700/5 group-hover:to-red-500/5 transition-all pointer-events-none"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}