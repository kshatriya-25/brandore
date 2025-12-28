import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    title: "Luxury Jewelry Brand",
    category: "Branding & E-commerce",
    image:
      "https://images.unsplash.com/photo-1741288070480-914dfbc642e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NjMzOTA3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Brand Identity", "3D Rendering", "E-commerce"],
  },
  {
    title: "Fashion Lookbook",
    category: "Photography & Design",
    image:
      "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjMzNTI1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Editorial", "Styling", "Motion"],
  },
  {
    title: "Tech Startup Launch",
    category: "Full Brand Suite",
    image:
      "https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjcmVhdGl2ZSUyMHRlYW18ZW58MXx8fHwxNzYzMzkwNzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UI/UX", "Development", "Marketing"],
  },
  {
    title: "Restaurant Rebrand",
    category: "Identity & Digital",
    image:
      "https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBwYXR0ZXJufGVufDF8fHx8MTc2MzMzNDQ5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Menu Design", "Food Photography", "Social Media"],
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-black to-red-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-black">
            Work That <span className="text-red-600 font-black">Speaks for Itself</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            Explore how we've helped brands design, grow, and dominate their markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-red-600 text-white rounded-full p-4">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-red-500 mb-2 font-bold">{project.category}</div>
                  <h3 className="text-white text-2xl mb-4 font-black">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg font-medium">
            Want to see more? We have 500+ projects in our portfolio
          </p>
        </div>
      </div>
    </section>
  );
}