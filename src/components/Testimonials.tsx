import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Brandore transformed our digital presence completely. Their team works like an internal creative department.",
    author: "Sarah Johnson",
    role: "Marketing Head",
    company: "Fashion Brand",
    rating: 5,
  },
  {
    quote:
      "One of the smartest creative teams we've worked with. Their AI tools make projects faster and better.",
    author: "Michael Chen",
    role: "Founder",
    company: "Tech Startup",
    rating: 5,
  },
  {
    quote:
      "The quality of work and attention to detail is outstanding. They truly understand brand building.",
    author: "Priya Sharma",
    role: "CEO",
    company: "Jewelry Brand",
    rating: 5,
  },
];

const clientLogos = [
  "LUXE",
  "FINTECH",
  "FASHION CO",
  "AUTO GROUP",
  "WELLNESS",
  "DIGITAL",
  "BEAUTY LAB",
  "FOOD HUB",
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-black">
            Trusted by <span className="text-red-600 font-black">Startups & Enterprises</span>{" "}
            Worldwide
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            Join hundreds of brands that have transformed their creative operations
            with Brandore
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16 py-8 border-y border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="text-white text-xl tracking-widest font-black">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 relative hover:border-red-500/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-red-500/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>

              <div className="pt-4 border-t border-white/10">
                <div className="text-white mb-1 font-bold">{testimonial.author}</div>
                <div className="text-gray-500 font-medium">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}