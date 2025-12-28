import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";

const plans = [
  {
    name: "Single Project",
    icon: <Zap className="w-8 h-8" />,
    description: "Perfect for one-time needs",
    price: "Custom",
    priceDetail: "Based on scope",
    features: [
      "One design or video project",
      "Professional execution",
      "2 rounds of revisions",
      "Source files included",
      "7-14 day delivery",
      "Email support",
    ],
    cta: "Get Quote",
    popular: false,
  },
  {
    name: "Monthly Plan",
    icon: <Sparkles className="w-8 h-8" />,
    description: "Consistent content & growth",
    price: "$2,999",
    priceDetail: "per month",
    features: [
      "Unlimited design requests",
      "Unlimited revisions",
      "2-3 day turnaround",
      "Social media content",
      "Video editing & motion",
      "Dedicated creative team",
      "Priority support",
      "Pause or cancel anytime",
    ],
    cta: "Start Monthly",
    popular: true,
  },
  {
    name: "Yearly Partnership",
    icon: <Crown className="w-8 h-8" />,
    description: "Your full-time creative team",
    price: "$29,999",
    priceDetail: "per year (save 20%)",
    features: [
      "Everything in Monthly",
      "Strategic brand consulting",
      "360° brand development",
      "Ad campaign management",
      "Web & app development",
      "SEO & digital marketing",
      "Quarterly strategy sessions",
      "24/7 priority support",
    ],
    cta: "Partner With Us",
    popular: false,
  },
];

export function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-black">
            Flexible Plans for{" "}
            <span className="text-red-600 font-black">Every Business</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            Whether you need one project or an entire creative department — we have
            packages for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="up">
              <div
                className={`relative bg-gradient-to-br from-white/5 to-white/0 border rounded-2xl p-8 ${
                  plan.popular
                    ? "border-red-600 shadow-2xl shadow-red-500/20 scale-105"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-red-500 mb-4">{plan.icon}</div>
                <h3 className="text-white text-2xl mb-2 font-black">{plan.name}</h3>
                <p className="text-gray-400 mb-6 font-medium">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-white text-4xl mb-1 font-black">{plan.price}</div>
                  <div className="text-gray-500 font-medium">{plan.priceDetail}</div>
                </div>

                <Button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full mb-8 font-bold ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-4 font-medium">
            Need a custom package for your enterprise?
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-red-600 text-red-400 hover:bg-red-500/10 font-bold"
          >
            Contact for Enterprise Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}