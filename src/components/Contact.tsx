import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessSize: "",
    budget: "",
    message: "",
    services: {
      website: false,
      socialMedia: false,
      branding: false,
      motion: false,
      cgi: false,
      photography: false,
      videoProduction: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [service]: checked,
      },
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-red-950/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4 font-black">
            Let's Build Something <span className="text-red-600 font-black">Together</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-medium">
            Tell us what your brand needs — we'll handle everything from 0 to 100.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-white text-2xl mb-6 font-black">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1 font-bold">Email</div>
                    <div className="text-white font-medium">hello@brandore.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1 font-bold">Phone</div>
                    <div className="text-white font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 mb-1 font-bold">Location</div>
                    <div className="text-white font-medium">Worldwide, Remote First</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-red-700/10 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-white text-lg mb-2 font-bold">Quick Response Time</h4>
              <p className="text-gray-400 font-medium">
                We typically respond to all inquiries within 24 hours. For urgent
                requests, please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="fullName" className="text-white mb-2 block font-bold">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block font-bold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block font-bold">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="businessName" className="text-white mb-2 block font-bold">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label className="text-white mb-3 block font-bold">
                  Services Interested In *
                </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { id: "website", label: "Website Development" },
                    { id: "socialMedia", label: "Social Media" },
                    { id: "branding", label: "Branding" },
                    { id: "motion", label: "Motion Graphics" },
                    { id: "cgi", label: "CGI & 3D" },
                    { id: "photography", label: "Photography" },
                    { id: "videoProduction", label: "Video Production" },
                  ].map((service) => (
                    <div key={service.id} className="flex items-center gap-2">
                      <Checkbox
                        id={service.id}
                        checked={formData.services[service.id as keyof typeof formData.services]}
                        onCheckedChange={(checked) =>
                          handleServiceChange(service.id, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={service.id}
                        className="text-gray-300 cursor-pointer"
                      >
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="businessSize" className="text-white mb-2 block font-bold">
                    Business Size
                  </Label>
                  <Input
                    id="businessSize"
                    value={formData.businessSize}
                    onChange={(e) =>
                      setFormData({ ...formData, businessSize: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="e.g., Startup, SMB, Enterprise"
                  />
                </div>

                <div>
                  <Label htmlFor="budget" className="text-white mb-2 block font-bold">
                    Budget Range
                  </Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="e.g., $5k-$10k"
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-white mb-2 block font-bold">
                  Tell Us About Your Project *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 text-white min-h-[120px]"
                  placeholder="Describe your project, goals, and timeline..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 group font-bold"
              >
                Submit Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}