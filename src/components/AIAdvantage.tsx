import { Brain, Zap, BarChart, Workflow, CheckCircle2 } from "lucide-react";

const advantages = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Enhanced Design",
    description: "Smart design automation and intelligent creative suggestions",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast Delivery",
    description: "Reduce project timelines by 50% with AI-powered workflows",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Data-Driven Insights",
    description: "Analytics and predictive modeling for better decisions",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Automated Processes",
    description: "Streamlined operations from concept to final delivery",
  },
];

export function AIAdvantage() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-950 via-black to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
            <Brain className="w-4 h-4 text-red-500" />
            <span className="text-red-300 font-bold">The Future of Creativity</span>
          </div>

          <h2 className="text-4xl md:text-5xl text-white mb-4 font-black">
            Powered by <span className="text-red-600 font-black">AI</span>. Driven by{" "}
            <span className="text-red-600 font-black">Creativity</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6 font-medium">
            We use cutting-edge AI tools for design, content creation, marketing
            analytics, and automation — helping your brand stay ahead of the curve.
          </p>
          <p className="text-2xl text-red-400 font-bold">
            No more manual chaos — just fast, smart, scalable creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-xl p-6"
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-red-500">
                {advantage.icon}
              </div>
              <h3 className="text-white text-xl mb-2 font-bold">{advantage.title}</h3>
              <p className="text-gray-400 font-medium">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* AI Tools We Use */}
        <div className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl text-white mb-8 text-center font-black">
            AI Tools We Leverage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Midjourney & DALL-E for Visual Creation",
              "ChatGPT & Claude for Content Strategy",
              "Runway ML for Video Enhancement",
              "Adobe Firefly for Design Automation",
              "Jasper AI for Copywriting",
              "Google Analytics AI for Insights",
            ].map((tool, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}