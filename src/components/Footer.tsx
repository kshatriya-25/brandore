import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-white text-2xl tracking-tight font-black">
                BRAND<span className="text-red-600">ORE</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-medium">
              Your Creative Team, Powered by AI. We deliver 360° brand growth through
              intelligent design, strategy, and execution.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 rounded-lg p-3 transition-all"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 rounded-lg p-3 transition-all"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 rounded-lg p-3 transition-all"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 rounded-lg p-3 transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 rounded-lg p-3 transition-all"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-black">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4 font-black">Contact</h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li>hello@brandore.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Worldwide, Remote First</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-medium">
              Copyright © Brandore 2025. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 font-medium">
              <a href="#" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}